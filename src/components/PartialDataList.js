import React from 'react';
import { formatCurrency } from './../utils/utils';
import Table from 'react-bootstrap/Table';

const PartialDataList = ({ result }) => {
  // Array para armazenar os dados do extrato mês a mês
  const data = [];

  // Verificando se há resultado para calcular o extrato
  if (result) {
    // Convertendo a taxa de juros para decimal
    const rate = result.interestRate / 100;

    // Calculando a taxa de juros mensal
    const monthlyRate = Math.pow(1 + rate, 1 / 12) - 1;

    // Inicializando o montante com o valor do aporte inicial
    let montante = result.initialAmount;

    // Adicionando o mês ZERO com os valores do aporte inicial
    data.push({
      month: 0,
      deposits: formatCurrency(result.initialAmount),
      interestInMonth: formatCurrency(0),
      totalInterest: formatCurrency(0),
      accumulated: formatCurrency(result.initialAmount),
    });

    // Loop para calcular os valores mês a mês
    for (let i = 1; i <= result.months; i++) {
      // Calculando os juros do mês
      const tempJuros = parseInt(montante * monthlyRate * 100) / 100;

      // Atualizando o montante com o valor acumulado no mês
      montante = Math.floor((montante + parseInt((tempJuros + result.monthlyDeposit) * 100) / 100) * 100) / 100;

      // Adicionando os dados do mês ao array data
      data.push({
        month: i,
        deposits: formatCurrency(result.monthlyDeposit),
        interestInMonth: formatCurrency(tempJuros),
        totalInterest: formatCurrency(montante - result.initialAmount - result.monthlyDeposit * i),
        accumulated: formatCurrency(montante),
      });
    }
  }

  return (
    <div>
      <h2>Extrato Mês a Mês</h2>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Aportes</th>
            <th>Juros no mês</th>
            <th>Juros total</th>
            <th>Acumulado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.month}>
              <td>{item.month}</td>
              <td>{item.deposits}</td>
              <td>{item.interestInMonth}</td>
              <td>{item.totalInterest}</td>
              <td>{item.accumulated}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PartialDataList;
