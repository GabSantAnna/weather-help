'use client'
import { getBrowserGeolocation } from '@/utils/Geolocation';
import { GoogleMap,useLoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import './page.module.css'


declare global {
  interface Window {
    initMap: () => void;
  }
}

export default function Home() {

  const {isLoaded} = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, })

  if(!isLoaded) return <div>Loading...</div>
  return (
      <Map />
  )
}


function Map () {
  const [coordinates, setCoordinates] = useState({ 
    lat: -23.025960,
    lng: -46.981928
})

  useEffect(() => {
    getBrowserGeolocation(setCoordinates)
  },[coordinates])


  return <GoogleMap zoom={10} center={coordinates} mapContainerClassName='map'> </GoogleMap>
}