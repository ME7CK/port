import styled, { createGlobalStyle, css } from "styled-components";

export const Globalstyled = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-saizng:border-box;
}
`
const center = css`
display: flex;
align-items: center;
justify-content: center;

`
export const Header = styled.header`
width: 20vw;
background-color: #8f8989;
display: flex;
flex-direction: column;
align-items: center;

`
export const BoxLogo = styled.div`
height: 38vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: white;
font-family: "roboto", sans-serif;
img{
    width:15vw;
    Heigt:5vh;
    border-radius: 50%;
}
`
export const BoxMenu = styled.nav`
height: 38vh;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
font-family: "roboto", sans-serif;
li{
    list-style: none;
    border-bottom: solid 1px white;
    height: 12.5vh;
    width: 18.2vw;
    ${center}
}
li:nth-child(1){
   border-top: solid 1px white; 
}
a{
 color: white;  
 text-decoration: none;
}

`
export const BoxIcon = styled.div`
idth: 15vw;
height: 28vh;
${center}
flex-direction: column;
justify-content: space-evenly;
`