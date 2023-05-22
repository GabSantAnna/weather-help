'use client'
import { Wrapper} from '@googlemaps/react-wrapper';
import { Map } from '@/components/Map/Map';
import './page.css';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { getBrowserGeolocation, getGeolocationByAddress } from '@/services/Geolocation';
import { getWeather } from '@/services/Weather';
import { Weather } from '@/utils/types/Weather.types';
import { useContext, useEffect } from 'react';
import { GeolocationContext } from '@/Context/GeolocationContext';
import { WeatherContext, WeatherContextProps } from '@/Context/WeatherContext';
import { Forecast } from '@/components/Forecast/Forecast';

export default function Home() {

  const { coordinates, setCoordinates } = useContext(GeolocationContext);
  const context = useContext(WeatherContext) as WeatherContextProps
  const {setWeather} = context
  
    useEffect(() => {
     getBrowserGeolocation(setCoordinates);
    }, []);

    useEffect(() => {
      (async () =>{
      const weatherData: Weather = await getWeather(coordinates);
      setWeather(weatherData);})()
    },[coordinates])
  return (
    <>
    <div className='container'>
     <SearchInput getData={getGeolocationByAddress} />
      <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string} version='beta' libraries={['marker']}>
          <Map />
      </Wrapper>
    </div>
      <Forecast/>
    </>
  )
}