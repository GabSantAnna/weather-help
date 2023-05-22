'use client'
import { Weather } from "@/utils/types/Weather.types";
import React ,{ createContext, useState } from "react";

export interface WeatherContextProps {
    weather: Weather | undefined ;
    setWeather: React.Dispatch<React.SetStateAction<Weather| undefined>>;
  }

const WeatherContext = createContext<WeatherContextProps|undefined>(undefined)

function WeatherContextProvider({children}:{children:React.ReactNode}) {
    const [weather, setWeather] = useState<Weather>()

    const contextValue: WeatherContextProps= {
        weather, setWeather
    } 

    return (
        <WeatherContext.Provider value={contextValue}>
            {children}
        </WeatherContext.Provider>
    )
}

export {WeatherContext, WeatherContextProvider}