import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import User from './user'
import Hobby from './Hobby'
import UnctrlCmp from './UnctrlCmp'
import CntrlCmp from './CntrlCmp'
import Checkbox from './CheckBox'
import Dropdown from './Dropdown'
import Form from './Form'
import Transition from './Transition'
import UseMemoR from './UseMemoR'
import Parent from './component/Parent'
import { UserProvider } from './UserContext'
import Form2 from './Form2'
import UseIdK from './UseIdK'


function App() {
  // const [count, setCount] = useState(0)
  const [name,setName] = useState("");

  return (
    <>
    {/* <h1>count is {count}</h1>
    <button onClick={()=> setCount(count+1)}>INC</button>
    <button onClick={()=> setCount(count-1)}>DEC</button>
    <button onClick={()=> setCount(0)}>RESET</button> */}
    {/* <User name="Ashish" age = {97}/>
    <Hobby hobby={["Reading","Eating","Drinking"]}/>    */}

    {/* <input type="text" 
    placeholder='Enter Name' 
    value={name} 
    onChange={(e)=>setName(e.target.value)}/>
    <p>
      Live Preview : {name}
    </p>
    <button onClick={()=>setName("")}>Clear</button> */}
    {/* <UnctrlCmp/> */}
    {/* <CntrlCmp/> */}
    {/* <Checkbox/> */}
    {/* <Dropdown/> */}
    {/* <Form/>
    <Transition/> */}
    {/* <UseMemoR/> */}
    {/* <div style={{backgroundColor: "red" , padding:"20px"}}>
      <h2>App Component</h2>
      <UserProvider>
        <Parent/>
      </UserProvider>
    </div> */}

    {/* <Form2/> */}
    <UseIdK/>
    
   
    </>
  )
}

export default App
