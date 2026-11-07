import { useMemo, useState } from "react";

function UseMemoR(){

    const [count , setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const expensiveComputation = ()=>{
        console.log("Expensive computation started");
        let result = 0 ;
        for(let i = 0; i < 10000000 ; i++){
            result+= number;
        }
        return result;
    }

    const result = useMemo(()=> expensiveComputation(),[number]);
    return(
        <>
            <h2>Expensive Computation</h2>
            <p>Expensive {result}</p>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={() => setNumber(number + 1)}>Increment Number</button>

        </>
    )
}

export default UseMemoR;