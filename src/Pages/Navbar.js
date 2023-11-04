import {Link,NavLink} from "react-router-dom"

const Navbar=()=>{
    return(
        <div className='header'>

        <NavLink to="/">
          Shoping Cart
        </NavLink>

        <div>
          <NavLink className="head-2" to="/">
            Home Page
          </NavLink>
         
          <NavLink className="head-2" to="/cart">
            Cart Page
          </NavLink>
        </div>
      </div>
    )
}


export default Navbar