import "./css/body.css";
import Panel from "./Panel";
import tt from "@tomtom-international/web-sdk-maps";
import { useState, useRef, useEffect } from "react";
import ZoomControls from "@tomtom-international/web-sdk-plugin-zoomcontrols";
import PanControls from "@tomtom-international/web-sdk-plugin-pancontrols";
import Search from "./Search";

export default function Body() {
  const mapElement = useRef();
  const [map, setMap] = useState();
  const [center, setCenter] = useState([77.405213504284674, 29.12083485654124]);
  const [coords, setCoords] = useState(center);
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
  }, []);
  return (
    <>
      <div className="main-content">
        <Panel map={map}></Panel>
        {/* <Search map={map}/> */}
        <div className="map" ref={mapElement}></div>
        <div className="coordinates">
        <center>Coordinates: {coords[1].toFixed(5)}, {coords[0].toFixed(5)}</center>
      </div>
      </div>
    </>
  );
}
