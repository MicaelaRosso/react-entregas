import React from 'react'
import { FooterContainer, LinksFooterContainer } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
        <LinksFooterContainer>
        <a href='/#'> Términos de uso </a>
        <a href='/#'> Trabajá con nosotros</a>
        <a href='/#'> Soporte </a>
        </LinksFooterContainer>
        
        <p>©2023 Aquamarine. All rights reserved. Designed by @micky.rosso</p>
        
    </FooterContainer>
  )
}
