import React,{useState, useEffect} from 'react'
import {FaBars} from '@react-icons/all-files/fa/FaBars';
import logo from '../imgs/logo.png'

const Nav = ({toggle}) => {
        const [tog, setTog]=useState(false)

        useEffect(() => {
            setTog(!tog)
        }, [toggle]);
        return (
            <div className='fake-nav'>
                
                <div className='ham'>
                   {tog && <FaBars onClick={toggle}/>}
                </div>
                <div className='logo1' >
                <a href='/gs'><img src={logo}/></a>
                </div>
                <div className='logo2' >
                <a href='/gs'><img src={logo}/></a>
                </div>
                <div className='navLinks'>
                <h3><a href='/gs'>Home</a></h3>
                <h3><a href='/about'>About</a></h3>
                <h3><a href='/contact'>Contact</a></h3>
                <h3><a href='/thesis'>Thesis</a></h3>
                <h3><a href='/gs'>Gallery</a></h3>
                </div>
                {/* <li className='nav-list'>
                    <ul id='home'><a href='/gs'>Home</a></ul>
                    <ul id='about'><a href='/about'>About</a></ul>
                    <ul id='contact'><a href='/contact'>Contact</a></ul>
                    <ul id='thesis'><a href='/thesis'>Thesis</a></ul>
               
                </li> */}
                <hr/>
            </div>
        )
    
}

export default Nav
