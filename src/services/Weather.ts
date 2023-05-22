import { Coordinates } from "@/utils/types/Coordinates.types";
import { Weather } from "@/utils/types/Weather.types";


export async function getWeather(coordinates: Coordinates): Promise<Weather> {
    try {
        const { lat, lng } = coordinates;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum&current_weather=true&timezone=auto`;
        const response = await fetch(url);
        const { current_weather, daily } = await response.json();
        console.log(daily)
        return {
          current_weather,
          daily
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error
      }
}
