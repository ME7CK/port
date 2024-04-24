import { Link } from "react-router-dom"
import * as S from "./styled"
import avatar from "../assets/avatar.png"
import git from "../assets/git.png"
import linkedin from "../assets/linkedin.png"
import facebook from "../assets/facebook.png"

export default function Header() {
  return (
    <S.Header>
         <S.BoxLogo>
          <img src={avatar} alt="" />
          <h2>Maycon Melo</h2>
          <p>Front-end Developer</p>
        </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <li><Link  to="/">Inicio</Link></li>
                <li><Link to="/sobre">Sobre mim</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
            </ul>
        </S.BoxMenu>
        <S.BoxIcon>
          <a href=""><img src={linkedin} alt="" /></a>
          <a href=""><img src={git} alt="" /></a>
          <a href=""><img src={facebook} alt="" /></a>
        </S.BoxIcon>
    </S.Header>
  )
}
