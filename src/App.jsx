import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart"
import Home from './pages/Home'
import Navbar from "./components/Navbar"
const App = () => {
  return(
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
    </div>
  )
};

export default App;
