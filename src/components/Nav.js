import React,{useState, useEffect} from 'react'
import {FaBars} from '@react-icons/all-files/fa/FaBars';
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
                <li className='nav-list'>
                    <ul id='home'><a href='/gallery'>Home</a></ul>
                    <ul id='about'><a href='/about'>About</a></ul>
                    <ul id='contact'><a href='/contact'>Contact</a></ul>
                    <ul id='thesis'><a href='/thesis'>Thesis</a></ul>
                </li>
                <hr/>
            </div>
        )
    
}

export default Nav
