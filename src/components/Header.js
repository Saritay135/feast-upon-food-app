import { useState } from "react";
import  Logo  from "../../assests/img/Logo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img className="logo" alt="logo" src={Logo} /></Link>
  
  );




const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
       <div className="header">
        <Title />

        <div className="nav">
          <ul>
            <li ><Link to="/about" className="linked">About</Link></li>
            <li ><Link to="/contact" className="linked">Contact</Link></li>
            <li className="linked">Offers</li>
            <li className="linked">Cart</li>
            
          </ul>
        </div>
     {  (isLoggedIn)?<button onClick={()=> setIsLoggedIn(false)}> Logout </button>:
        <button onClick={()=> setIsLoggedIn(true)}> Login </button> }
       </div>
    
    );
    };

    export default Header;