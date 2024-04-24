import styled,{css} from "styled-components";

const center = css`
display: flex;
align-items: center;
justify-content: center;

`

export const Main = styled.main`
background: rgb(51,1,1);
background: linear-gradient(90deg, rgba(51,1,1,1) 0%, rgba(133,0,0,1) 36%, rgba(255,0,0,1) 100%);
height: 100vh;
display: flex;
`
export const Boxpai = styled.section`
width:90vw;
display: flex;
`

export const Texto = styled.section`
${center}
width: 45vw;
height: 70vh;
justify-content: space-evenly;
flex-direction: column;
`
export const Titulo = styled.div`
width:35vw;
height: 13vh;
font-family: "roboto", sans-serif;
h1{
    color:white;
    font-size:42px;
}
`
export const Frase = styled.div`
width: 37vw;
height: 15vh;
font-family: "roboto", sans-serif;
h2{
    color:white;
    font-size:30px;
}
p{
    color:white;
    font-size:20px;
}
`
export const Avatar = styled.div`
${center}
width: 35vw;
img{
    width:35vw;
    Heigt:5vh;
    border-radius: 50%;
}
`