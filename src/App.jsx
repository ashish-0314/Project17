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
import Home from './pages/Home'
import Contact from './pages/Contact'
import {Link, Outlet, RouterProvider , createBrowserRouter} from "react-router"


function App() {
  // const [count, setCount] = useState(0)
  //const [name,setName] = useState("");
  // const router = createBrowserRouter([
  //   {path: "/Pages/Home" , element: <Home/>},
  //   {path: "/Pages/Contact" , element: <Contact/>}
  // ])

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
    {/* <UseIdK/> */}
    {/* <h1>React Router</h1>
    <RouterProvider router={router}/> */}
    <h1>Router Provider change in the main.jsx</h1>
    <nav>
        <Link to="/">Home</Link> | {"  "}
        <Link to="/about">About</Link> | {"  "}
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>This is App Component</h1>

      <Outlet />
    
   
    </>
  )
}

export default App
