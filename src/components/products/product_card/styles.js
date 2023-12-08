import styled from "styled-components";

export const ProductoCard = styled.div`
display: flex;
    width: 300px;
    border-radius: 15px;
    padding: 25px;
    border: 2px solid greenyellow;
    align-items: center;
    flex-direction: column;
   
    img{
        width: 300px;
        height: 300px;
        margin-bottom: 1rem;
    }

    h2{
        display: flex;
        font-size: 25px;
        text-align: center;
     }

    p{
        color: antiquewhite;
        font-size: 1.2rem;
        text-align: center;
    }

  /* @media (max-width: 768px) {
        width: 250px;
        text-align: center;
   
    }*/
`