import { weatherConditionTxt } from "@/utils/weatherCodes"
import { MarkerWrapper } from "./MarkerWrapper"
import { useContext } from "react"
import { WeatherContext } from "@/Context/WeatherContext"
import "./Marker.css"
import { DailyWeather } from "@/utils/types/Weather.types"

export function Marker({ map}: { map: google.maps.Map}) {
    const context = useContext(WeatherContext)

    const currentWeather = context?.weather?.current_weather
    const daily = context?.weather?.daily as DailyWeather


    return (
        <MarkerWrapper map={map} >
           { currentWeather && 
                <div className='marker'>

                <div className="current-tem">
                <h2 className="title">{currentWeather.temperature}<sup>°c</sup></h2>
                <p>{weatherConditionTxt(currentWeather.weathercode)}</p>
                </div>
                
                <div className="daily-temp-range">
                    <div className="range-temp">
                    <span>↑{Math.trunc(daily?.temperature_2m_max[0])}</span>
                    <span>↓{Math.trunc(daily?.temperature_2m_min[0])}</span>
                    </div>
                <div>
                <p>UV: {daily?.uv_index_max[0]}</p>
                </div>
                </div>

            </div>
           } 
        </MarkerWrapper>
    )
}