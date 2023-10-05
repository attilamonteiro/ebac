import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState(null);

  const calcularIMC = (altura, peso) => {
    const calculoIMC = peso / Math.pow(altura, 2);
    setImc(calculoIMC.toFixed(2));

    // Classificação de acordo com a OMS
    if (calculoIMC < 18.5) {
      setClassificacao('Magreza');
    } else if (calculoIMC >= 18.5 && calculoIMC < 24.9) {
      setClassificacao('Normal');
    } else if (calculoIMC >= 25 && calculoIMC < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <Formulario onCalcular={calcularIMC} />
      {imc !== null && classificacao !== null && (
        <Resultado imc={imc} classificacao={classificacao} />
      )}
    </div>
  );
}

export default App;
