import React from 'react';
import { formatCurrency } from './../utils/utils';

const CalculatorResult = ({ result }) => {
  // Cálculo do valor total dos juros
  const totalInterest = result.total - result.initialAmount - result.monthlyDeposit * result.months;

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
            <td>{formatCurrency(totalInterest)}</td>
            <td>{formatCurrency(result.total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalculatorResult;
