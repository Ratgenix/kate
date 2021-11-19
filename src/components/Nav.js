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
                    <ul id='home'><a href='/'>Home</a></ul>
                    <ul id='about'><a href='/about'>About</a></ul>
                </li>
                <hr/>
            </div>
        )
    
}

export default Nav
