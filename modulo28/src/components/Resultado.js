import React from 'react';
import { ResultWrapper, Heading, Paragraph } from '../styles/ResultadoStyles';

const Resultado = ({ imc, classificacao }) => {
  return (
    <ResultWrapper>
      <Heading>Resultado</Heading>
      <Paragraph>IMC: {imc}</Paragraph>
      <Paragraph>Classificação: {classificacao}</Paragraph>
    </ResultWrapper>
  );
};

export default Resultado;
