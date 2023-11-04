import "./style.css"

import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import Cart from "./Pages/Cart"


function App() {
  



  return (
    <div>
     <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/cart" element={<Cart/>}/>


      </Routes>




    </div>

  );
}

export default App;
