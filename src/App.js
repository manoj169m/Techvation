// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import About from './components/about/About';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Blogs from './components/blogs/Blogs'
import Arrival from './components/arrivals/Arrival';
import Contacts from './components/contacts/Contacts';
import Client from './components/client/Client';
import Footer from './components/footer/Footer';


function App() {

  useEffect(() => {
    AOS.init({
      delay:400,
      duration: 800,  
    });
  }, []);



  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Products/>
      <Blogs/>
      <Arrival/>
      <Contacts/>
      <Client/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
