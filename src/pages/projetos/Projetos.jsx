import React from 'react';
import * as S from "./styled";
import mac from "../../assets/mac.png"
import prime from "../../assets/prime.png"
import self from "../../assets/self.png"
import Header from '../../components/Header';


export default function Projetos() {
  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.BOX>
          <S.H1>
            <h1>projetos</h1>
            <h2>
              Os projetos apresentados abaixo, foram realizados para desafiar os nossos conhecimentos.
              o projeto Mac foi desenvolvido utilizando html, css, javascript e styled-components; para que
              ao click do usuario ele possa escolher entre o hambúrguer a batata ou a casquinha. os projeto
              Prime e Self foram utilizando apenas html e o css porem o projeto self em questã foi um desafio 
              onde foi posto em prova nossos conheciemntos em css e suas bouas praticass
            </h2>
          </S.H1>
        </S.BOX>
        <S.Caixa>
          <S.Divc>
            <img src={mac} alt="" />
            <img src={prime} alt="" />
            <img src={self} alt="" />
          </S.Divc>
        </S.Caixa>
      </S.Section>
    </S.Main>
  );
}
