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
const geoWorldUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [

  { markerOffset: -15, name: "France", coordinates: [10.648860, 51.106400], path: "fr" },
  { markerOffset: -15, name: "Turky", coordinates: [35.243320, 38.963745], path: "tur" },

];

const GeographyC = ({ key, geography, backgroung }) => {
  return (
    <Geography
      key={key}
      geography={geography}
      fill={backgroung}
      stroke="#EAEAEC"
    />
  )
}

const MapChart = () => {

  const router = useRouter();
  router.asPath === '/fr/tur' && router.push('https://react-custom-map.netlify.app/tur')
  const handleLangRoute = path => {
    path === 'tur' ? router.push('https://react-custom-map.netlify.app/tur') : router.push('https://react-custom-map.netlify.app/fr')
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
          geographies.map((geo) => {
            switch (geo.properties.geounit) {
              case "Germany": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#F7C90D" />
              case "Romania": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#002A7B" />
              case "Bulgaria": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#01916B" />
              case "Ukraine": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#F7CE00" />
              case "Belarus": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#C91621" />
              case "Hungary": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#F7F7F7" />
              case "Serbia": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#0B3F72" />
              case "BosniaandHerzegovina": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#F6C504" />
              case "Croatia": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#018ED6" />
              case "Albania": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#000000" />
              case "Macedonia": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#F7DF00" />
              case "Greece": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#00319B" />
              case "Montenegro": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#DE332C" />
              case "Kosovo": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#CAA14D" />
              default: return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#e5e5e5" />
            }
          })
        }
      </Geographies>
      {/* turkey map */}
      <Geographies geography={geoWorldUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            switch (geo.properties.name) {
              case "Turkey": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#DB0916" />
              case "Azerbaijan": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#4D992D" />
              case "Georgia": return <GeographyC key={geo.rsmKey} geography={geo} backgroung="#EAEAEA" />
            }
          })
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
