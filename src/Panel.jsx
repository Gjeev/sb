import "./css/panel.css";
import Tooltip from "@mui/material/Tooltip";
import DrawingTools from "@tomtom-international/web-sdk-plugin-drawingtools";
import tt from "@tomtom-international/web-sdk-maps";
import { data } from "./js/grid.js";
import { useState } from "react";

export default function Panel(props) {
  let map = { ...props.map };
  const [gridLayer, setGridLayer] = useState(false);
  const [shapes, setShapes] = useState([]);
  const [click,setClick] = useState(0);
  //drawing tool
  let ttDrawingTools = new DrawingTools({
    ttMapsSdk: tt,
    controls: {
      line: false,
      ellipse: false,
      pen: false,
    },
  });
  function handlePenClick() {
    setClick(1);
    if(click == 0)
    {
        map.addControl(ttDrawingTools, "top-left");
    ttDrawingTools.on("tomtom.drawingtools.created", function (event) {
      addFeatures(event.data.features);
    });

    ttDrawingTools.on("tomtom.drawingtools.deleted", function (event) {
      deleteFeatures(event.data.features);
    });

    ttDrawingTools.on("tomtom.drawingtools.changed", function (event) {
      updateFeatures(event.data.features);
    });

    // ttDrawingTools.on("tomtom.drawingtools.dragged", function (event) {
    //   updateFeatures(event.data.features);
    // });
    }
    else{
        console.log("drawing tool is already open");
    }
    
  }

  class Shape {
    constructor(id, coordinates) {
      this.id = id;
    }
  }

  // features add, delete and update handlers
  function addFeatures(features) {
    features.forEach(function (feature) {
      setShapes([
        ...shapes,
        new Shape(feature.id, feature.geometry.coordinates[0]),
      ]);
    });
  }
  function deleteFeatures(features) {
    features.forEach(function (feature) {
      setShapes(
        shapes.filter(function (shape) {
          if (feature.id === shape.id) {
            return false;
          } else {
            return true;
          }
        })
      );
    });
  }

  //   function updateFeatures(features) {
  //     features.forEach(function (feature) {
  //       for (var i = 0; i < shapes.length; i++) {
  //         if (shapes[i].id === feature.id) {
  //           shapes[i].update(feature.geometry.coordinates[0]);
  //           break;
  //         }
  //       }
  //     });
  //   }

  //adding and removing layers
  function addLayer(boolean) {
    if (boolean == true) {
      props.map.addLayer({
        id: "gridOverlay",
        type: "fill",
        source: {
          type: "geojson",
          data: data,
        },
        layout: {},
        paint: {
          "fill-color": "#A4BFC1",
          "fill-opacity": 0.6,
          "fill-outline-color": "#A4BFC1",
        },
      });
    } else {
      map.removeLayer("gridOverlay");
      map.removeSource("gridOverlay");
    }
  }

  function handleLayerClick() {
    addLayer(!gridLayer);
    setGridLayer(!gridLayer);
  }

  return (
    <div className="left-panel">
      <ul>
        <li onClick={handlePenClick}>
          <Tooltip placement="top" title="select AOI">
            <img src="/images/panelicon1.png" />
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="top" title="upload to cart">
            <a href="/">
              <img src="/images/panelicon2.png" />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="top" title="delete grids">
            <a href="/">
              <img src="/images/panelicon3.png" />
            </a>
          </Tooltip>
        </li>
        <li onClick={handleLayerClick}>
          <Tooltip placement="top" title="show layers">
            <img src="/images/panelicon4.png" />
          </Tooltip>
        </li>
      </ul>
      
    </div>
  );
}
