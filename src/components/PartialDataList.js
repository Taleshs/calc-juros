import React from 'react';

const PartialDataList = ({ result }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const data = [];

  if (result) {
    const rate = result.interestRate / 100;
    const monthlyRate = Math.pow(1 + rate, 1 / 12) - 1;
    let montante = result.initialAmount;

    data.push({
      month: 0,
      deposits: formatCurrency(result.initialAmount),
      interestInMonth: formatCurrency(0),
      totalInterest: formatCurrency(0),
      accumulated: formatCurrency(result.initialAmount),
    });

    for (let i = 1; i <= result.months; i++) {
      const tempJuros = parseInt(montante * monthlyRate * 100) / 100;
      montante = Math.floor((montante + parseInt((tempJuros + result.monthlyDeposit) * 100) / 100) * 100) / 100;

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
      <table>
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
      </table>
    </div>
  );
};

export default PartialDataList;
