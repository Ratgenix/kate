import React from 'react'
import {  SidebarContainer, Icon, CloseIcon, SidebarWrapper,
SidebarMenu, SidebarLink /*SidebarRoute, SideBtnWrap*/ } from './SidebarE'
/*import {AiOutlineAudit,
     AiOutlineUser, 
    AiOutlineBulb, AiOutlineHome, AiOutlineMail, 
    AiOutlineProfile } from "react-icons/ai";
*/



//import { MdWebAsset } from "react-icons/md";
import './comp.css'
import {Link as ScrollLink} from 'react-scroll'

import { MdWebAsset} from '@react-icons/all-files/md/MdWebAsset';

const Sidebar = ({isOpen, toggle}) => {
    //const {currentUser} =useAuth();
    //const mUser=currentUser;

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to='/gallery' onClick={toggle}>
                    Home
                    </SidebarLink> 
          <SidebarLink to='/about' onClick={toggle}>
                    About
                    </SidebarLink>

                    <SidebarLink to='/contact' onClick={toggle}>
                        Contact
                    </SidebarLink>

                    <SidebarLink to='/thesis' onClick={toggle}>
                        Thesis
                    </SidebarLink>


                    </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
