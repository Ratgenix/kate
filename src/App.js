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
    {/*}
    <Suspense fallback={<div>LOADING...</div>}>
    <Navbar toggle={toggle}/>
    </Suspense>
  */}

  
    </div>
      <div className="page-container">
       { /*
      <Suspense fallback={<div>LOADING...</div>}>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      </Suspense>
    */}
    <Nav toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Routes>
    {/* GENERICS */}
     <Route path='/' element={<Splash/>}/>
     <Route path='/s' element={<Signin/>}/>
     <Route path='/*' element={<Oops/>}/>

    {/* MAIN PAGES */}
     <Route path='/gallery' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/thesis' element={<Thesis/>}/>

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
