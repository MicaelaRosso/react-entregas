import styled from "styled-components";

export const NavbarContainer = styled.div `
height: 100px;
background-color: #333333;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 4rem;
@media (max-width: 768px) {
padding: 1rem 2rem;
}
`

export const LinksContainer = styled.div `
color: white;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
a {
    padding: 1rem 1.5rem;
    &:first-child{
    background-color: var(--green-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
}
`
export const LinkContainer = styled.div `
font-size: 1.2rem;
color: ${(props) => {props.home ?"#ffd01" : "#ff9300"}};
`

export const UserContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const HomeContainer = styled(LinkContainer)`
display: flex;
gap: 2rem;
align-items: center;
@media (max-width: 768px){
    display: none;
}
`
export const MenuContainer = styled(LinkContainer)`
display: none;
align-items: center;
font-size: 2rem;
cursor: pointer;
@media (max-width:768px){
    display: flex;
}
`
export const UserNav = styled.div`
gap: 15px;
cursor: pointer;
span {
    color: white;
    /*font-size: 1rem;
    margin-top: 20px;*/
}
@media (max-width: 768px){
    display: none;
}
`
export const UserImage = styled.img`
width: 30px;
height: 30px;
border-radius: 100px;
cursor: pointer;
` 
export const SpanStyled = styled.span`
&:hover{
    text-decoration: underline;
}
`
/* PRODUTOS*/
export const ProductsNav = styled.div`
gap: 15px;
cursor: pointer;
span {
    color: white;
    /*font-size: 1rem;
    margin-top: 20px;*/
}
@media (max-width: 768px){
    display: none;
}
`