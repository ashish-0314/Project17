import { useState } from "react"

function Checkbox(){
    const [selected , setSelected] = useState({
        html:false,
        css:false,
        js:false
    })

    const handleClear = ()=>{
        setSelected({
            html:false,
            css:false,
            js:false
        })
    }
    return(
        <>
        <label>
            <input 
                type="checkbox"
                checked={selected.html} 
                onChange={(e)=>{
                    setSelected({...selected, html:e.target.checked})
                }}
                />
            HTML
        </label>
        <label> <input 
        type="checkbox" 
        checked={selected.css}
        onChange={(e)=>{
            setSelected({...selected, css:e.target.checked})
        }}
        />CSS</label>
        <label> <input type="checkbox"
        checked={selected.js}
        onChange={(e)=>{
            setSelected({...selected, js:e.target.checked})
        }}
        />Js</label>
        <button onClick={handleClear}>Clear</button>
        <h2>
            <ul>
                {selected.html && <li>HTML</li>}
                {selected.css && <li>CSS</li>}
                {selected.js && <li>JS</li>}
            </ul>
        </h2>

        </>
    )
}

export default Checkbox ;