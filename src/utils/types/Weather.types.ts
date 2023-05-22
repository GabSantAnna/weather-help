export interface Current_weather {
    is_day: number,
    temperature: number,
    time: string,
    weathercode: number,
    winddirection: number,
    windspeed: number
}

export interface DailyWeather {
    weathercode: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    time: string[],
    uv_index_max: number[]
}

export interface Weather {
    current_weather: Current_weather,
    daily: DailyWeather
}


