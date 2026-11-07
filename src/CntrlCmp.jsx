import { useState } from "react"

function CntrlCmp(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPass] = useState("");
    const [data, setData] = useState(null);

    const handleChange = (e)=>{
        e.preventDefault();
        setData({name,email,password});
    }

    const handleClear = ()=>{
        setName("");
        setEmail("");
        setPass("");
        setData(null);
    }
    return(
        <>
        <form onSubmit={handleChange}>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}/>
            <button>Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </form>
        {data && 
            <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            </div>
        }
        </>
    )
}

export default CntrlCmp;