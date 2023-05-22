'use client'
import { Coordinates } from "@/utils/types/Coordinates.types";
import React ,{ createContext, useState } from "react";

interface GeolocationContextProps {
    coordinates: Coordinates ;
    setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>;
  }

  const defaultValue: GeolocationContextProps = {
    coordinates: {
        lat: -23.025960,
        lng: -46.981928
    },
    setCoordinates: () => {},
  };

const GeolocationContext = createContext<GeolocationContextProps>(defaultValue)

function GeolocationContextProvider({children}:{children:React.ReactNode}) {
    const [coordinates, setCoordinates] = useState<Coordinates>({
        lat: -23.025960,
        lng: -46.981928
    })

    const contextValue:GeolocationContextProps = {
        coordinates, setCoordinates
    } 

    return (
        <GeolocationContext.Provider value={contextValue}>
            {children}
        </GeolocationContext.Provider>
    )
}

export {GeolocationContext, GeolocationContextProvider}