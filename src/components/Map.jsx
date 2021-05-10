import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import classNames from "classnames"

const Map = withScriptjs(
  withGoogleMap(({ ...props }) => {
    return <GoogleMap {...props} />
  }),
)

const MapWrapper = ({ lat, lng, className, ...props }) => {
  return (
    <Map
      defaultCenter={{ lat, lng }}
      defaultZoom={10}
      containerElement={
        <div
          className={classNames("relative", className)}
          style={{ paddingTop: "75%" }}
          {...props}
        />
      }
      loadingElement={<div style={{ height: `100%` }} />}
      mapElement={<div className="absolute inset-0" />}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAO2fsSmo_oOJMjDRGxo2C2BMiv9EnhAoQ"
    >
      <Marker position={{ lat, lng }} />
    </Map>
  )
}
export default MapWrapper
