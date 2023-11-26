import React from 'react'
import { motion } from "framer-motion"; 
import { FaHome } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa";
import { HomeContainer, LinkContainer, NavbarContainer, ProductsNav, SpanStyled, UserContainer, UserNav } from './styles';
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
            <LinkContainer home= {true}>
            <FaHome/> 
             Home 
            </LinkContainer>
          </a>

        </motion.div>
          
        <ProductsNav>
        <SpanStyled> Productos </SpanStyled>
            </ProductsNav>
          
          <UserNav>
          
          <UserContainer>
          
          <SpanStyled> Iniciar Sesión  </SpanStyled>
          
          <FaUserCircle/>  
                    
          </UserContainer>
          </UserNav>
          </HomeContainer>
      </LinksContainer>
      </NavbarContainer>
  )
};
