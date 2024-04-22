import './App.css';
import React,{useState} from 'react';
import {Route, Routes} from 'react-router-dom'

//pages
import Splash from './pages/Splash'
import Home from './pages/Index'
import Oops from './pages/oops'
import About from './pages/About'
import Contact from './pages/Contact'
import Thesis from './pages/Thesis'
import Car from './pages/Carousel'
import GallerySplash from './pages/GallerySplash';
//galleries
import Paintings from './pages/Paintings'
import Digital from './pages/Digital';
import Charcoal from './pages/Charcoal';
import Motion from './pages/Motion';
import BrandingCamp from './pages/BrandingCamp';
import Ink from './pages/Ink';
import Misc from './pages/Misc';
import ApplicationD from './pages/ApplicationD';

//components
import Signin from './components/Signin.js'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar';



function App() {

  
  const[isOpen, setIsOpen] = useState(false)


  const toggle=()=>{
      setIsOpen(!isOpen)
  }


  return (
    
    <div className="site-wrapper" >
    <div className="head-comp">
  <Nav toggle={toggle}/>

  
    </div>
      <div className="page-container">
       { /*
      <Suspense fallback={<div>LOADING...</div>}>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      </Suspense>
    */}
    {/* <Nav toggle={toggle}/> */}
    <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Routes>
    {/* GENERICS */}
     <Route path='/' element={<Splash/>}/>
     <Route path='/s' element={<Signin/>}/>
     <Route path='/*' element={<Oops/>}/>

    {/* MAIN PAGES */}
     <Route path='/gallery' element={<Home/>}/>
     <Route path='/gs' element={<GallerySplash/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/thesis' element={<Thesis/>}/>
     <Route path='/home' element={<Car/>}/>

    {/* GALLERY PAGES */}
    <Route path='/paintings' element={<Paintings/>}/>
    <Route path='/digital' element={<Digital/>}/>
    <Route path='/charcoal' element={<Charcoal/>}/>
    <Route path='/motion' element={<Motion/>}/>
    <Route path='/branding' element={<BrandingCamp/>}/>
    <Route path='/ink' element={<Ink/>}/>
    <Route path='/appD' element={<ApplicationD/>}/>
    <Route path='/misc' element={<Misc/>}/>
    </Routes>


      
      </div>
      {/*}
     <Suspense fallback={<div>LOADING...</div>}>
      <Footer/>
      </Suspense>
  */}
    </div>

    
);
}

export default App;
