import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

const Map = ({ lat, lng }) => {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  )
}

Map.defaultProps = {
  lat: 41.7402,
  lng: 2.2686123,
}
export default withScriptjs(withGoogleMap(Map))
