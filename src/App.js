import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import CalculatorResult from './components/CalculatorResult';
import PartialDataList from './components/PartialDataList';


const App = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = ({ initialAmount, monthlyDeposit, months, interestRate }) => {
    const rate = interestRate / 100;
    const monthlyRate = Math.pow(1 + rate, 1 / 12) - 1;

    let montante = initialAmount * Math.pow(1 + monthlyRate, months);
    montante +=
      (monthlyDeposit * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate;

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
