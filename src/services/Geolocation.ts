import { Coordinates } from "@/utils/types/Coordinates.types";
import { Dispatch, SetStateAction } from "react"



export function getBrowserGeolocation (setData: Dispatch<SetStateAction<Coordinates>>):void {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => setData({lat:position.coords.latitude, lng: position.coords.longitude}))
    }if(!navigator.geolocation){
      return undefined
    }
}

export async function getGeolocationByAddress (adress: string, setData:Dispatch<SetStateAction<Coordinates>>):Promise<void> {
  const formatedAddress = adress.replace(/\s+/g, '+')
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatedAddress}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  const response = await fetch(url);
  const data = await response.json();
  const {location} = data.results[0].geometry
  console.log(location)
  setData(location)

}