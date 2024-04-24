import styled,{css} from "styled-components";

const center = css`
display: flex;
align-items: center;
justify-content: center;

`
export const Main = styled.main`
ackground: rgb(4,0,64);
background: linear-gradient(90deg, rgba(4,0,64,1) 0%, rgba(0,0,101,1) 35%, rgba(2,0,159,1) 100%);
height: 100vh;
display: flex;
`
export const Section = styled.section`
width: 90vw;
`
export const BOX = styled.section`
font-family: "roboto", sans-serif;
height:35vh;
${center}
`
export const H1 = styled.div`
width: 80vw;
height:20vh;
font-family: "roboto", sans-serif;
h1{ color: white;
    text-align: center;
    font-size:60px;
}
h2{
    color: white;
    text-align: justify;
    text-align: center;
    font-size:20px;
}
`
export const Caixa = styled.section`
height:61vh;
`
export const Divc = styled.div`
width: 80vw;
height:59vh;
${center}
justify-content: space-evenly;
img{
    width:15vw;
    border-radius: 10%;
  
}
`

