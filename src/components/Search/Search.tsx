import { useRef } from "react"
import './Search.scss'

export default function Search() {
    const inputEl = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputEl.current!.focus();
    }

    return (
        <div className="container-search">
            <input type='text' ref={inputEl} placeholder='search..' />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}