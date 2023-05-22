import { Marker } from '../Marker/Marker'
import { useState, useRef, useEffect, useContext } from "react"
import { Weather } from "@/utils/types/Weather.types"
import { GeolocationContext } from "@/Context/GeolocationContext"



export function Map() {

    const { coordinates} = useContext(GeolocationContext);
  
    const mapOptions = {
      mapId: process.env.NEXT_PUBLIC_MAP_ID,
      center: coordinates,
      zoom: 11,
      disableDefaultUI: true
    }
    const [map, setMap] = useState<google.maps.Map>()
  
    const ref = useRef<HTMLDivElement | null>(null)
  
    useEffect(() => {
        const newMap = new window.google.maps.Map(ref.current!, mapOptions)
        setMap(newMap);
    }, [coordinates]);
  
  
    return (
      <>
        <div id='map' ref={ref} />
        {map && <Marker map={map} />}
      </>
    )
  }

