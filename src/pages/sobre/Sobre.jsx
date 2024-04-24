import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import styled from "../../assets/styled.png"

export default function Sobre() {
  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.Textos>
          <h1>Sobre Min</h1>
          <p>Olá meu nome é Maycon tenho 22 anos em maio deste ano  completo 23  resolvi tirar esse breve momento para contar um pouco sobre mim. Sempre gostei da área dá tecnologia e sempre me perguntava como um site é feito,quem coloca essas cores e imagens nele e  como ele ficava tão bonito aos olhos.Tempo depois me mostraram o curso do VNW ( Vai Na Web) onde me matou essa curiosidade de tanto tempo e  por incrível que pareça acabei indo para o curso de front-end, onde era uma das partes que eu ficava mais curioso em saber, hoje tenho a certeza que quero seguir essa carreira de desenvolver front-end continua a me especializar, conhecer novas pessoas e aprender sempre com essa área que com o passar do tempo se torna cada vez mais importante em nossas sociedade como um todo.</p>
        </S.Textos>
        <S.Titulo><h1>Hard Skills</h1></S.Titulo>
        <S.Figure>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javascript} alt="" />
          <img src={react} alt="" />
          <img src={styled} alt="" />
        </S.Figure>
      </S.Section>
    </S.Main>
  )
}
