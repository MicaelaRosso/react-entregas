import styled from "styled-components";

export const ProductosWrapper =styled.div`
border: 2px solid pink;
padding: 0 0 30px 0;
display: flex;
flex-direction: column;
width: 100%;
align-items: center;

@media (max-width: 768px) {
    text-align: center;    
}
` 

export const ProductosContainer = styled.div`
border: 2px solid red;
display: flex;
justify-content: center;
gap: 35px;
flex-wrap: wrap;
width: 100%;
`