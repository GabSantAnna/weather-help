import { WeatherContext, WeatherContextProps } from "@/Context/WeatherContext"
import { DailyWeather } from "@/utils/types/Weather.types"
import { useContext, useEffect } from "react"
import moment from 'moment';
import 'moment/locale/pt-br';
import './Forecast.css'
import { weatherConditionTxt } from "@/utils/weatherCodes";
moment.locale('pt-br');


export function Forecast() {
    const context = useContext(WeatherContext)
    const { weather } = context as WeatherContextProps

    useEffect(() => {

    }, [weather])

    const daily = weather?.daily;

    if (!daily) {
        return <div className="forecast-container">No daily weather data available</div>; // Handle case when daily weather data is undefined
    }

    const weekdays = daily.time.map((el) => moment(el, 'YYYY-MM-DD').format('ddd'))

    return (
        <div className="forecast-container">
            <h2>Próximos Dias</h2>
            <hr/>
            {weekdays.map((day, index) => (
                <>
                <div className="forecast-div">
                    <span className="daystatus">
                        <p>{day}</p>
                        <p>{weatherConditionTxt(daily.weathercode[index])}</p>
                    </span>
                    <div className="temp">
                    <span><sup>↑</sup>{Math.trunc(daily?.temperature_2m_max[index])}</span>
                    <span><sup>↓</sup>{Math.trunc(daily?.temperature_2m_min[index])}</span>
                    </div>
                </div>
                <hr/>
                </>
            ))
            }
        </div >
    )
}