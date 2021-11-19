import styled from 'styled-components';
import {FaTimes} from '@react-icons/all-files/fa/FaTimes';
import {Link as LinkS } from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer=styled.aside`
position:fixed;
z-index:999;

width:50%;
height:100%;
background:black;
display:grid;
align-items:center;
top:0;
right:0;
transition: 0.3s ease-in-out;
opacity:${({isOpen}) => (isOpen ? '70%':'0')};
top:${({isOpen}) => (isOpen ? '0':'-100%')};

`



export const CloseIcon=styled(FaTimes)`
color:cyan;

`
export const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5vw;
background:transparent;
cursor:pointer;
outline:none;
z-index:99999;

`


export const SidebarWrapper=styled.div`
color:yellow;
`
export const SidebarMenu=styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;
    @media screen and(max-width:480px){
        grid-template-rows:repeat(6,60px);
    }

`

export const SidebarLink=styled(LinkR)`
display=flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:cyan;
cursor:pointer;
margin-top:50vw; 
&:hover{
    color:white;
    transition:0.2s ease-in-out;
}

`
export const SideBtnWrap=styled.div`
display:flex;
justify-content:center;
`
export const SidebarRoute=styled(LinkR)`
border-radius:50px;
background:white;
white-space:nowrap;
padding:16px 64px;
color:black;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: 0.2s ease-in-out;

&:hover{
    transition: 0.2s ease-in-out;
    background:#fff;
    color:cornflowerblue;
}
`