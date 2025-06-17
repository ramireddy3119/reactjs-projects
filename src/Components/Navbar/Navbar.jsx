
// import React,{useState} from 'react'
// import '../Navbar/Navbar.css'
// import logo from '../Assests/logo.png'
// import cart_icon from '../Assests/cart_icon.png'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   const [menu,setMenu] = useState("shop");
//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="logo" />
//         <p>SHOPPER</p>
//       </div>
//       <ul className="nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu === "shop" && <hr/>}</li>
//         <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to="/mens">Mens</Link>{menu === "mens" && <hr/>}</li>
//         <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}} to="/womens">Womens</Link>{menu === "womens" && <hr/>}</li>
//         <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu === "kids" && <hr/>}</li>
//         {/* <li onClick={()=>{setMenu("accessories")}}><Link to="/accessories">Accessories</Link>{menu === "accessories" && <hr/>}</li> */}
//       </ul>
//       <div className="nav-login-cart">
//         <Link to="/login"><button>Login</button></Link>
//         <Link to="/cart"><img src={cart_icon} alt="cart_icon"/></Link>
//         <div className="nav-cart-count">0</div>
//       </div>
//     </div>
//   )
// }
// export default Navbar;

import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext.jsx';


const Navbar = () => {
  const location = useLocation(); // Get the current path
  const currentPath = location.pathname;
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>Shop</Link>
          {currentPath === '/' && <hr />}
        </li>
        <li>
          <Link to="/mens" style={{ textDecoration: "none"}}>Mens</Link>
          {currentPath === '/mens' && <hr />}
        </li>
        <li>
          <Link to="/womens" style={{ textDecoration: "none" }}>Womens</Link>
          {currentPath === '/womens' && <hr />}
        </li>
        <li>
          <Link to="/kids" style={{ textDecoration: "none" }}>Kids</Link>
          {currentPath === '/kids' && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
