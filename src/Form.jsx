import {useFormStatus} from "react-dom";
function SubmitButton(){
    const {pending} = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    )
}
function Form(){
    async function handleSubmit(formData){
        const name = formData.get("name");
        const email = formData.get("email");

        console.log("Name:" , name);
        console.log("Email:" , email);

        await new Promise(resolve => setTimeout(resolve,2000));
        alert("From Submitted Successfully");
    }
    return(
        <>
            <form action={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" required />
                <br></br>
                <input type="email" name="email" placeholder="Enter email" required />
                <br></br>
                <SubmitButton/>
            </form>
        </>
    )
}

export default Form;