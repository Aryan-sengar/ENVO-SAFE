import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Contactus from "./pages/Contactus"
import Dashboard from "./pages/Dashboard"
import Activities from "./pages/Activities"
import HandleNavbar from "./components/HandleNav/HandleNav"
import Events from "./pages/Events"
import PlantConservationPage from "./pages/PlantConservationPage"
import PlantYourTreePage from "./components/PlantYourTreePage/PlantYourTreePage"
import VoucherReedem from "./pages/VoucherReedem"
import Blogs from "./pages/Blogs"
function App() {

  return (
    <>
    
    <BrowserRouter>
    <HandleNavbar/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/activities" element={<Activities/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/plantconservation" element={<PlantConservationPage/>}></Route>
      <Route path="/yourtree" element={<PlantYourTreePage/>}></Route>
      <Route path="/voucher" element={<VoucherReedem/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>


      </Routes>
      
      <Footer/>
     </BrowserRouter>
     
    </>
  )
}

export default App
