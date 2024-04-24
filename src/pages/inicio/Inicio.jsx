import * as S from "./styled"
import Header from '../../components/Header'
import avatar  from "../../assets/avatar.png"

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Boxpai>
      <S.Texto>
       <S.Titulo>
       <h1>Olá meu nome é Maycon sou dev front-end</h1>
       </S.Titulo>
       <S.Frase>
       <h2>  as oportunidades multiplicam-se á medida que são agarradas</h2>
        <p>Sun Tzu</p>
       </S.Frase>
       </S.Texto>
      <S.Avatar>
        <img src={avatar} alt="" />
      </S.Avatar>
      </S.Boxpai>
    </S.Main>
  )
}