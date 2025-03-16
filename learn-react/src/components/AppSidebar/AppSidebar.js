import React from 'react';

import { Sidebar, Menu, MenuItem, Logo } from "react-mui-sidebar";
import Castle from '@mui/icons-material/Castle';

import { Link } from "react-router-dom";

import SidebarLogo from '../../assets/images/logoipsum-336.svg';

function AppSidebar(props) {
   const element = <>
     <Sidebar>
       <Logo>
         component={Link}
         href='/'
         img={SidebarLogo}
       </Logo>
       <Menu subHeadeing="Analytics">
         <MenuItem
           icon={<Castle/>}
           component={Link}
           link='/analytics'  
         >
         </MenuItem>
 
       </Menu>
     </Sidebar>
   </>
 
   return element;
 }

export default AppSidebar;
