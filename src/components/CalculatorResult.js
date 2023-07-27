import React from 'react';
import { formatCurrency } from './../utils/utils';
import Table from 'react-bootstrap/Table';

const CalculatorResult = ({ result }) => {
  // Cálculo do valor total dos juros
  const totalInterest = result.total - result.initialAmount - result.monthlyDeposit * result.months;

  return (
    <div className="border mt-4 p-4 rounded-2">
      <h2>Resultados</h2>
      <Table striped bordered hover variant="dark">
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
        </Table>
    </div>
  );
};

export default CalculatorResult;
