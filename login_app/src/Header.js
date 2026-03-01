// Պատրաստել Կայքին 
import './Header.css'
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Product from './Product'
import About from './About'
import Contact from './Contact'
import Best from './Best'
import Reviews from './Reviews'
import Sets from './Sets'


export default function Header() {
  return (
    <div className="header">
      <div className="box">
        <h2>LOGO</h2>
        <NavLink to='/Home'>Home</NavLink>
        <NavLink to='/Product'>Product</NavLink>
        <NavLink to='/Best'>Best</NavLink>
        <NavLink to='/About'>About Us</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <NavLink to='/Sets'>Sets</NavLink>
        <NavLink to='/Reviews'>Reviews</NavLink>
        <Routes>
          <Route path='/Home' element={<Home />}>Home</Route>
          <Route path='/Product' element={<Product />}>Product</Route>
          <Route path='/About' element={<About />}>About</Route>
          <Route path='/Contact' element={<Contact />} >Contact</Route>
          <Route path='/Best' element={<Best />} >Best</Route>
          <Route path='/Sets' element={<Sets />}>Sets</Route>
          <Route path='/Reviews' element={<Reviews />}>Reviews</Route>
        </Routes>
      </div>
    </div>
  );
}
