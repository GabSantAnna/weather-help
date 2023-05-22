
export function weatherConditionTxt(weathercode: number) {
    return {
        0: "ensolarado",
        1: "ensolarado com poucas nuvens",
        2: "parcialmente nublado",
        3: "nublado",
        45: "névoa",
        48: "geada",
        51: "garoa leve", 
        53: "garoa moderada",
        55: "garoa densa",
        56: "garoa leve e gelada",
        57: "garoa forte e gelada",
        61: "chuva fraca",
        63: "chuva moderada",
        65: "chuva forte",
        66: "chuva leve e gelada",
        67: "chuva forte e gelada",
        71: "leve queda de neve",
        73: "queda de neve moderada",
        75: "queda de neve forte",
        77: "grãos de neve",
        80: "pancadas chuva leve",
        81: "pancadas de chuva moderada",
        82: "pancadas de chuva fortes",
        85: "pancadas de neve moderadas",
        86: "pancadas de neve fortes",
        95: "tempestade leve a moderada",
        96: "leve tempestade com granizo",
        99: "forte tempestade com granizo"
    }[weathercode]
}