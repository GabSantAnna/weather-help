import { GeolocationContext } from "@/Context/GeolocationContext";
import { MutableRefObject, useRef, useEffect, useContext } from "react";
import { Root, createRoot } from "react-dom/client";


export function MarkerWrapper({ map, children}: { map: google.maps.Map, children: React.ReactNode}) {
  const { coordinates} = useContext(GeolocationContext);
    const markerRef: MutableRefObject<google.maps.marker.AdvancedMarkerView | undefined> = useRef();
    const rootRef: MutableRefObject<Root| undefined> = useRef();
  
    useEffect(() => {
      if (!rootRef.current) {
        const container = document.createElement("div")
        rootRef.current = createRoot(container)
  
        markerRef.current = new google.maps.marker.AdvancedMarkerView({
          position: coordinates,
          content: container
        })
      }
  
    }, [])
  
    useEffect(() => {
  
      rootRef.current!.render(children);
      markerRef.current!.position = coordinates;
      markerRef.current!.map = map;
  
    }, [map, coordinates, children])
  
    return null
  }
  