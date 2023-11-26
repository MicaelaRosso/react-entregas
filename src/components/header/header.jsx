import { HeaderContainer, HeaderTextContainer } from "./styles"

export const Header = () => {
    return (
    <HeaderContainer>
        <HeaderTextContainer>
            <h1>¡Somos Aquamarine!</h1>
            <h2> Tu almacén de plantas.</h2>
            <p>Conocé nuestra selección de plantas para cada ambiente de tu casa.</p>
            <button> Ver más </button>
            </HeaderTextContainer>
            <div>
            <img src= "/plants.png" alt= ""/>
        </div>   
    </HeaderContainer> 
    )
}
