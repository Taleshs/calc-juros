import React from 'react';

const CalculatorResult = ({ result }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div>
      <h2>Resultados</h2>
      <table>
        <thead>
          <tr>
            <th>Aporte inicial</th>
            <th>Aportes mensais</th>
            <th>Juros totais</th>
            <th>Acumulado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formatCurrency(result.initialAmount)}</td>
            <td>{formatCurrency(result.monthlyDeposit)}</td>
            <td>{formatCurrency(result.total - result.initialAmount - result.monthlyDeposit * result.months)}</td>
            <td>{formatCurrency(result.total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalculatorResult;
