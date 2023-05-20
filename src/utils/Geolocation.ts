import { Dispatch, SetStateAction } from "react"

interface Coordinates {
    lat:number,
    lng:number
  }

export function getBrowserGeolocation (useData: Dispatch<SetStateAction<Coordinates>>) {
    if(navigator.geolocation) {
            let coordinates = {}
        navigator.geolocation.getCurrentPosition(position => useData({lat:position.coords.latitude, lng: position.coords.longitude}))
        return coordinates
    }
}
export function getGeolocationByAddress () {

}

export function getGeolocationByMap () {

}