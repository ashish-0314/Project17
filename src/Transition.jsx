import { useTransition } from "react";

function Transition(){
    const [pending,startTransition] = useTransition()
    const handleClick = ()=>{
        startTransition(async ()=>{
            await new Promise((resolve)=> setTimeout(resolve,2000));
        })
    }    
    return(
        <>
            <h2>UseTransition Hook Demo</h2>
            {pending && <p>Loading...</p>}
            <button disabled={pending} onClick={handleClick}>Click me</button>
        </>
        
    )
}

export default Transition;