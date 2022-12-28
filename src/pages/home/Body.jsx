import "../../css/body.css";
import Panel from "../../components/Panel";
import tt from "@tomtom-international/web-sdk-maps";
import { useState, useRef, useEffect } from "react";
import ZoomControls from "@tomtom-international/web-sdk-plugin-zoomcontrols";
import PanControls from "@tomtom-international/web-sdk-plugin-pancontrols";
import { services } from "@tomtom-international/web-sdk-services";
import SearchBox from "@tomtom-international/web-sdk-plugin-searchbox";
// import SearchMarkersManager,{ handleResultSelection, handleResultsFound, handleResultClearing } from "./Search.js";

export default function Body() {
  const mapElement = useRef();
  const [map, setMap] = useState();
  const [center, setCenter] = useState([77.405213504284674, 29.12083485654124]);
  const [coords, setCoords] = useState(center);

  //options for search box
  var options = {
    searchOptions: {
      key: import.meta.env.VITE_MAP_API_KEY,
      language: "en-GB",
      limit: 5,
      labels: {
        noResultsMessage: "No results found",
        placeholder: "Location",
      },
    },
    autocompleteOptions: {
      key: import.meta.env.VITE_MAP_API_KEY,
      language: "en-GB",
    },
  };
  useEffect(() => {
    let map = tt.map({
      key: import.meta.env.VITE_MAP_API_KEY,
      container: mapElement.current,
      center: center,
      zoom: 15,
      style: "satellite.json",
    });
    setMap(map);

    //adding zoom and pan controls
    let ttZoomControls = new ZoomControls();
    let ttPanControls = new PanControls();
    map.addControl(ttZoomControls, "bottom-right");
    map.addControl(ttPanControls, "bottom-right");

    //storing coordinates
    map.on("click", (event) => {
      setCoords([event.lngLat.lng, event.lngLat.lat]);
    });

    //adding search box to map
    // export
    function handleResultsFound(event) {
      var results = event.data.results.fuzzySearch.results;

      if (results.length === 0) {
        searchMarkersManager.clear();
      }
      searchMarkersManager.draw(results);
      fitToViewport(results);
    }

    // export
    function handleResultSelection(event) {
      var result = event.data.result;
      if (result.type === "category" || result.type === "brand") {
        return;
      }
      searchMarkersManager.draw([result]);
      fitToViewport(result);
    }

    function fitToViewport(markerData) {
      if (!markerData || (markerData instanceof Array && !markerData.length)) {
        return;
      }
      var bounds = new tt.LngLatBounds();
      if (markerData instanceof Array) {
        markerData.forEach(function (marker) {
          bounds.extend(getBounds(marker));
        });
      } else {
        bounds.extend(getBounds(markerData));
      }
      map.fitBounds(bounds, { padding: 100, linear: true });
    }
    function getBounds(data) {
      var btmRight;
      var topLeft;
      if (data.viewport) {
        btmRight = [
          data.viewport.btmRightPoint.lng,
          data.viewport.btmRightPoint.lat,
        ];
        topLeft = [
          data.viewport.topLeftPoint.lng,
          data.viewport.topLeftPoint.lat,
        ];
      }
      return [btmRight, topLeft];
    }

    // export
    function handleResultClearing() {
      searchMarkersManager.clear();
    }

    //classes
    // export default
    class SearchMarkersManager {
      constructor(map, options) {
        this.map = map;
        this._options = options || {};
        this._poiList = undefined;
        this.markers = {};
      }
      draw(poiList) {
        this._poiList = poiList;
        this.clear();
        this._poiList.forEach(function (poi) {
          var markerId = poi.id;
          var poiOpts = {
            name: poi.poi ? poi.poi.name : undefined,
            address: poi.address ? poi.address.freeformAddress : "",
            distance: poi.dist,
            classification: poi.poi
              ? poi.poi.classifications[0].code
              : undefined,
            position: poi.position,
            entryPoints: poi.entryPoints,
          };
          var marker = new SearchMarker(poiOpts, this._options);
          marker.addTo(this.map);
          this.markers[markerId] = marker;
        }, this);
      }
      clear() {
        for (var markerId in this.markers) {
          var marker = this.markers[markerId];
          marker.remove();
        }
        this.markers = {};
        this._lastClickedMarker = null;
      }
    }

    class SearchMarker {
      constructor(poiData, options) {
        this.poiData = poiData;
        this.options = options || {};
        this.marker = new tt.Marker({
          element: this.createMarker(),
          anchor: "bottom",
        });
        var lon = this.poiData.position.lng || this.poiData.position.lon;
        this.marker.setLngLat([lon, this.poiData.position.lat]);
      }
      addTo(map) {
        this.marker.addTo(map);
        this._map = map;
        return this;
      }
      createMarker() {
        var elem = document.createElement("div");
        elem.className = "tt-icon-marker-black tt-search-marker";
        if (this.options.markerClassName) {
          elem.className += " " + this.options.markerClassName;
        }
        var innerElem = document.createElement("div");
        innerElem.setAttribute(
          "style",
          "background: white; width: 10px; height: 10px; border-radius: 50%; border: 3px solid black;"
        );

        elem.appendChild(innerElem);
        return elem;
      }
      remove() {
        this.marker.remove();
        this._map = null;
      }
    }
    let ttSearchBox = new SearchBox(services, options);
    let searchMarkersManager = new SearchMarkersManager(map);
    ttSearchBox.on("tomtom.searchbox.resultsfound", handleResultsFound);
    ttSearchBox.on("tomtom.searchbox.resultselected", handleResultSelection);
    ttSearchBox.on("tomtom.searchbox.resultfocused", handleResultSelection);
    ttSearchBox.on("tomtom.searchbox.resultscleared", handleResultClearing);
    map.addControl(ttSearchBox, "top-right");
  }, []);
  return (
    <>
      <div className="main-content">
        <Panel map={map}></Panel>
        {/* <Search map={map}/> */}
        <div className="map" ref={mapElement}></div>
        <div className="coordinates">
          <center>
            Coordinates: {coords[1].toFixed(5)}, {coords[0].toFixed(5)}
          </center>
        </div>
      </div>
    </>
  );
}
