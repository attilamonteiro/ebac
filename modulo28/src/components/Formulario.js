import React, { useState } from 'react';
import { FormWrapper, Label, Input, Button } from '../styles/FormularioStyles';

const Formulario = ({ onCalcular }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleCalcular = () => {
    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    if (isNaN(alturaFloat) || isNaN(pesoFloat) || alturaFloat <= 0 || pesoFloat <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    onCalcular(alturaFloat, pesoFloat);
  };

  return (
    <FormWrapper>
      <Label>
        Altura (m):
        <Input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </Label>
      <Label>
        Peso (kg):
        <Input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </Label>
      <Button onClick={handleCalcular}>Calcular</Button>
    </FormWrapper>
  );
};

export default Formulario;
