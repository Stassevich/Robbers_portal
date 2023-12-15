import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '645px',
    height: '400px',
    marginLeft: '15px'
};

function Map({mLat, mLng}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB9z1kjnqM81t1kYvvxeoQ5P3GR_C3PBJM"
    })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        map.fitBounds(new window.google.maps.LatLngBounds(center));
        setMap(map)
    }, [])

    const center = {
        lat: mLat,
        lng: mLng
    };
    const Zoom = 10;
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={Zoom}
            onLoad={onLoad}
        >
            <>{/*Here will be markers*/}</>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)