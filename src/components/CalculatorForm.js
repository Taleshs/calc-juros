import React, { useState } from 'react';

const CalculatorForm = ({ onCalculate }) => {
  // Estados para armazenar os valores dos campos do formulário
  const [initialAmount, setInitialAmount] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [months, setMonths] = useState('');
  const [interestRate, setInterestRate] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Chamando a função de cálculo no componente pai (App) e passando os valores como números
    onCalculate({
      initialAmount: parseFloat(initialAmount),
      monthlyDeposit: parseFloat(monthlyDeposit),
      months: parseFloat(months),
      interestRate: parseFloat(interestRate),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Aporte inicial:
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Aportes mensais:
          <input
            type="number"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Período de aportes (meses):
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Taxa de juros anual (%):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </label>
      </div>

      <button type="submit">Calcular</button>
    </form>
  );
};

export default CalculatorForm;
