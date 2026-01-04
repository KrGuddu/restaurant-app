import React from 'react';
import "./assets/css/style.css";
// import "./assets/css/style"

import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Products/>
    <Review/>
    <Contact/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
