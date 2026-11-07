import { useRef, useState } from "react"

function UnctrlCmp(){

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const[data , setData] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        setData({name,email,pass});
        
    }

    const handleClear = ()=>{
        nameRef.current.value="";
        emailRef.current.value="";
        passRef.current.value="";
        setData(null);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" ref={nameRef} />
            <input type="email" placeholder="Enter Email" ref={emailRef} />
            <input type="password" placeholder="Enter password" ref={passRef} />
            <button>Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </form>
        {data && (
            <div>
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p>Password : {data.pass}</p>
            </div>
        )}
        </>
    )
}

export default UnctrlCmp;