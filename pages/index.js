import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.title};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typographyVariants.titleXs.fontSize};
  
  @media screen and (min-width: 720px) {
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
  }
`;

const Base = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  max-width: 350px;
  padding: 16px 18px;
  margin: 0 auto;
  height: 100vh;
  box-shadow: 0 0 20px 5px #0000004D;
  
  @media screen and (min-width: 720px) {
    max-width: 900px;
    padding: 10px 170px;
  }
`;

export default function Home() {
  return (
    <Base>
      <Title>Alura Viagens</Title>
      <form id="alura-travel">
        <section>
          <h2>Quando será a viagem?</h2>
          <label htmlFor="departure-date" name="departure-date">
            Data de saída
            <input type="date" id="departure-date" />
          </label>
          <label htmlFor="return-date" name="return-date">
            Data de retorno
            <input type="date" id="return-date" />
          </label>
          <label htmlFor="departure-place" name="departure-place">
            Local de origem
            <input type="text" id="departure-place" />
          </label>
          <label htmlFor="arrival-place" name="arrival-place">
            Local de destino
            <input type="text" id="arrival-place" />
          </label>
        </section>
        <section>
          <h2>Qual será a forma de pagamento?</h2>
        </section>
        <section>
          <h2>Quem irá viajar?</h2>
          <label htmlFor="name" name="name">
            Nome
            <input type="text" id="name" />
          </label>
          <label htmlFor="surname" name="surname">
            Sobrenome
            <input type="text" id="surname" />
          </label>
          <label htmlFor="nationality" name="nationality">
            País de residência
            <input type="text" id="nationality" />
          </label>
          <label htmlFor="birth-date" name="birth-date">
            Data de nascimento
            <input type="text" id="birth-date" />
          </label>
          <label htmlFor="document" name="document">
            CPF
            <input type="text" id="document" />
          </label>
          <label htmlFor="email" name="email">
            E-mail
            <input type="email" id="email" />
          </label>
          <label htmlFor="telephone" name="telephone">
            Telefone
            <input type="tel" id="telephone" />
          </label>
        </section>
        <button type="submit">Comprar</button>
      </form>
    </Base>
  );
}
