import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import CalculatorResult from './components/CalculatorResult';
import PartialDataList from './components/PartialDataList';

const App = () => {
  // Estado para armazenar o resultado dos cálculos
  const [result, setResult] = useState(null);

  // Função para calcular o montante acumulado
  const handleCalculate = ({ initialAmount, monthlyDeposit, months, interestRate }) => {
    // Convertendo a taxa de juros para decimal
    const rate = interestRate / 100;

    // Calculando a taxa de juros mensal
    const monthlyRate = Math.pow(1 + rate, 1 / 12) - 1;

    // Cálculo do montante acumulado
    let montante = initialAmount * Math.pow(1 + monthlyRate, months);
    montante += (monthlyDeposit * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate;

    // Armazenando o resultado no estado
    setResult({
      initialAmount,
      monthlyDeposit,
      months,
      interestRate,
      total: montante,
    });
  };

  return (
    <div>
      <h1>Calculadora de Juros Compostos</h1>
      <CalculatorForm onCalculate={handleCalculate} />
      {result && <CalculatorResult result={result} />}
      {result && <PartialDataList result={result} />}
    </div>
  );
};

export default App;
