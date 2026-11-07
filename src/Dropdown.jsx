import { useState } from "react"

function Dropdown(){
    const [gender , setGender] = useState();
    const [country, setCountry] = useState("India")
    const handleChange = (e)=>{
        setGender(e.target.value)
    }
    const countries = ["India","China","Japan","US","Russia"]
    return(
        <>
        <p>Radio Buttons</p>
        <label> <input type="radio" value="male" name="gender" checked={gender==="male"} onChange={handleChange}/>Male</label>
        <label> <input type="radio" value="female" name="gender" checked={gender==="female"} onChange={handleChange} />Female</label>
        <label> <input type="radio" value="other" name="gender" checked={gender==="other"} onChange={handleChange}/>Other</label>
        <button onClick={()=>setGender("")}>Clear</button>
        <p>Selected Gender : {gender}</p>

        <h2>Select Country Dropdown</h2>
        <select value={country} onChange={(e)=>setCountry(e.target.value)}>
            {/* <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="US">US</option>
            <option value="Russia">Russia</option> */}
            {countries.map((country,index)=>(
                <option key={index} value={country}>{country}</option>
            ))}
        </select>
        <button onClick={()=>setCountry("India")}>Clear</button>
        <p>Selected Country : {country}</p>


        </>
    )
}

export default Dropdown