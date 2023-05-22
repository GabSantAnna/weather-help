import { GeolocationContext } from "@/Context/GeolocationContext";
import { KeyboardEvent, useContext } from "react";
import './SearchInput.css'

interface SearchInputProps {
    getData: Function;
  }
  


export function SearchInput({getData} : SearchInputProps) {

    const {setCoordinates} = useContext(GeolocationContext)

    const string = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            const target = e.target as HTMLInputElement
            getData(target.value, setCoordinates)
        }
    }

    return (
        <div id='input-container'>
        <form >
            <input
            id="input" 
            placeholder="insira um endereço e aperte Enter"
            onKeyDown={(e) => string(e)}
            />
        </form>
        </div>
    )


}