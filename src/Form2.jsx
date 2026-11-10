import { useActionState } from "react"

function Form2(){
    const [message , formAction , pending] = useActionState(submitFeedback, "");

     async function submitFeedback(prevState , formData){
        const name = formData.get("name");
        const feedback = formData.get("feedback");

        await new Promise((resolve)=>setTimeout(resolve,2000));

        if(name && feedback){
            return `"Thank you ${name} for your feedback ${feedback}"`
        } else{
            return "please fill in all fields";
        }
     } 
    return(
        <>
        <h1>UseActionState Hook in Reack 19</h1>
        <form action={formAction}>
            <input type="text" name="name" placeholder="Enter Name" />
            <br/>
            <textarea name="feedback" placeholder="Enter your feedback"/>
            <br />
            <button type="submit" disabled={pending}>Submit</button>
            <br/>
            <p>{message}</p>
        </form>
        </>
    )
}

export default Form2;