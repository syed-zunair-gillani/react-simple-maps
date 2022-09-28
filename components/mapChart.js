import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker
} from "react-simple-maps";
import { useRouter } from 'next/router'

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";
const markers = [

  { markerOffset: -15, name: "France", coordinates: [10.648860, 51.106400], path: "fr" },
  { markerOffset: -15, name: "Turky", coordinates: [29.544689, 36.997540], path: "en-US" },

];



const MapChart = () => {

  const router = useRouter();
  console.log("🚀 ~ file: mapChart.js ~ line 24 ~ MapChart ~ router", router)
  const {locale} = router
  router.asPath === '/fr/en-US' && router.push('https://react-custom-map.netlify.app/en-US') 
  const handleLangRoute = path =>{
    path === 'en-US' ? router.push('https://react-custom-map.netlify.app/en-US') : router.push('https://react-custom-map.netlify.app/fr')
  }


  return (
    <ComposableMap
      width={800}
      height={800}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        scale: 1200
      }}
    >
      <Graticule stroke="#EAEAEC" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (

            <>
              {/* {console.log(geo)} */}
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#9998A3"
                stroke="#EAEAEC"
              />
            </>
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset, path }) => (
        <Marker key={name} coordinates={coordinates} onClick={() => handleLangRoute(path)} className="cursor-pointer">
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
