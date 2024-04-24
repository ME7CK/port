import styled,{css} from "styled-components";

const center = css`
display: flex;
align-items: center;
justify-content: center;

`
export const Main = styled.main`
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(29,29,29,1) 36%, rgba(61,61,61,1) 100%);
height: 100vh;
display: flex;
`
export const Section = styled.section`
${center}
width: 90vw;
justify-content: space-evenly;
flex-direction: column;
`
export const Textos = styled.div`
width: 80vw;
height:20vh;
color: white;
font-family: "roboto", sans-serif;
h1{
    text-align: center;
    font-size:40px;
}
p{
    text-align: justify;
    font-size:17px;
}
`
export const Titulo = styled.div`
width: 20vw;
height:5vh;
h1{
    text-align: center;
    font-size:35px;
    color: white;
}
`
export const Figure = styled.figure`
width: 70vw;
${center}
justify-content: space-evenly;
`