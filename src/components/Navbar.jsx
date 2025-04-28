import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return(
      <div>
        <div className="flex flex-row justify-between">
          <NavLink to="/">
            <div> 
            <img src=""/>
            </div>
          </NavLink>

          <div>
           <NavLink to="/">
           <p>Home</p>
           </NavLink>

           <NavLink to="/cart">
           <FaCartShopping/>
           </NavLink>
          </div>
        </div>
      </div>
  )
};

export default Navbar;
