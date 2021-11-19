import './App.css';
import React,{useState} from 'react';
import {Route, Routes} from 'react-router-dom'
//pages
import Home from './pages/Index'
import Oops from './pages/oops'
import About from './pages/About'

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

     <Route path='/' element={<Home/>}/>
     <Route path='/s' element={<Signin/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/*' element={<Oops/>}/>


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
