import { useId } from "react"

function UseIdK(){
    const nameId = useId();
    const emailId = useId();
    return(
        <>
            <h1>UseId Hook</h1>
            <form>
                <label htmlFor={nameId}>Name:</label>
                <input type="text" id={nameId} name="name" />
                <h1>{nameId}</h1>
                <br/>
                <label htmlFor={emailId}>Email:</label>
                <input type="email" id={emailId} name="email"/>
                <h1>{emailId}</h1>
            </form>
        </>
    )
}

export default UseIdK;