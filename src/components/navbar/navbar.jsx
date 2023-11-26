import React from 'react'
import { motion } from "framer-motion"; 
import { FaHome } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa";
import { PiPlantDuotone } from "react-icons/pi";
import { HomeContainer, LinkContainer, NavbarContainer, UserContainer } from './styles';
import { LinksContainer } from './styles';

export const Navbar = () => {
  return (
    <NavbarContainer>
        <div>
        <a href="/#">
            <img src="/logoaqua.png" alt='' />
        </a>

        </div>

          <LinksContainer>
          <HomeContainer>
            <motion.div whileTap={{scale: 0.97}}>
            
          <a href="/#">
            <LinkContainer
            home= {true}>
            <span>Home </span>
            <FaHome/>
            </LinkContainer>
          </a>

          </motion.div>

          <LinkContainer>
            <span> Productos </span>
            <PiPlantDuotone/>
          </LinkContainer>

          <UserContainer>
            <span> Iniciar Sesión </span>
          <FaUserCircle/>
          </UserContainer>
          </HomeContainer>
      </LinksContainer>
      </NavbarContainer>
  )
}
