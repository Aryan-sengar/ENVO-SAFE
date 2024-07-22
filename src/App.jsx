import Navbar from "../src/components/Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Contactus from "./pages/Contactus"
import Dashboard from "./pages/Dashboard"
import Activities from "./pages/Activities"
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/activities" element={<Activities/>}></Route>
      
      </Routes>
      
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
