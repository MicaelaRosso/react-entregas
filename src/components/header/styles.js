import styled from "styled-components";

/*Contenedor del Header con estilos generales*/
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
   justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 30px;
    gap: 30px;
    h1 { /*Separo los h1 2rem de abajo */
        margin-bottom: 2rem;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
/*Contenedor del texto del Header*/
export const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    h1 {
        margin: 10px 0;
        font-size: 4rem;
       
    }
    h2 {
        margin: 10px 0;
        font-size: 2.5rem;
    }
    p {
        margin: 10px 0;
        font-size: 1.2rem;
    }
    button {
        display: flex;
        text-align: center;
    }
    @media (max-width: 1000px) {
        width: 80%;
        align-items: center;
        text-align: center;
    }
`

