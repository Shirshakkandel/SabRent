import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import styled from 'styled-components'
import getCenter from 'geolib/es/getCenter'

const SingleMarker = styled.div``

export default function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  // console.log(coordinates)
  const center = getCenter(coordinates)
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/shirshakkandel/cks2lg4753cgm17lfyivbg81e"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <SingleMarker key={result.long}>
          <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
            <p
              onClick={() => setSelectedLocation(result)}
              className="text-2xl cursor-pointer animate-bounce"
            >
              📌
            </p>
          </Marker>
          {/* The popup that should show when we click on marker */}
          {selectedLocation.long === result.long && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-50"
            >
              {result.title}
            </Popup>
          )}
        </SingleMarker>
      ))}
    </ReactMapGL>
  )
}
