import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker
} from "react-simple-maps";
import { useRouter } from 'next/router'

const geoWorldUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const markers = [

  { markerOffset: -15, name: "Georgia", coordinates: [-82.900078, 32.165623], path: "tur" },

];



const Turky = () => {

  const router = useRouter();
  router.asPath === '/fr/en-US' && router.push('https://react-custom-map.netlify.app/tur') 
  const handleLangRoute = path =>{
    path === 'en-US' ? router.push('https://react-custom-map.netlify.app/tur') : router.push('https://react-custom-map.netlify.app/fr')
  }


  return (
    <ComposableMap
      width={1300}
      height={800}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        scale: 1200
      }}
    >


      <Geographies geography={geoWorldUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            switch(geo.properties.name){
              case "Georgia" : return <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#F00"
              stroke="#EAEAEC"
            />
            }
          })
        }
      </Geographies>


      {/* <Geographies geography={geoWorldUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            switch(geo.properties.name){
              case "Azerbaijan" : return <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#F00"
              stroke="#EAEAEC"
            />
              
            }
          })
        }
      </Geographies> */}
      
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

export default Turky;
