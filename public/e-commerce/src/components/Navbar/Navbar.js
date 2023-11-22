// src/components/Navbar/Navbar.tsx

//import './Navbar.css';
import img from '../../img/icon_shopping_cart.svg';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';

const Navbar = ({number, handleCart}) => {
  
  

  return (
    <nav className="text-white font-quicksand flex justify-between items-center px-8 py-2 border-b bg-customBlue">
      <div className='flex justify-between items-center gap-12 w-2/3'>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-48 h-16" />
        </div>

        <div className="navbar-center w-4/5">
          <input
            type="text"
            placeholder="Search..."
            className="text-black w-full  rounded-full px-5 py-2 focus:outline-none focus:border-purple box-content"
          />
        </div>
      </div>

      <div className="navbar-right flex justify-center items-center">
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
          </li>
          <li className="navbar-email text-very-light-gray text-sm mr-12 cursor-pointer">
            name@example.com
          </li>
          <li
            className="navbar-shopping-cart relative cursor-pointer"
            onClick={handleCart}
          >
            <img src={img} alt="shopping cart" />
            <div className="num-product-carrito w-4 h-4 bg-white text-customBlue rounded-full text-sm font-bold absolute top-[-8px] right-[-8px] flex justify-center items-center">
              {number}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
