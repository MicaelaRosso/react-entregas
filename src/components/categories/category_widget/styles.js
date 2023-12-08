import styled from "styled-components";
import { motion } from "framer-motion";


export const CategoriasWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;/*1300px*/
margin: 15px auto;
h2 {
    text-align: center;
}
@media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
    
}
`

/*Contenedor que encierra las categorias*/
export const CategoriasContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 30px;
text-align: center;
user-select: none;
img {
    width: 60px;
}
@media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
    
}
`