import React, { useState, useEffect } from 'react';
import { formatCurrency, fetchSelic, getLastDateAndValue } from './../utils/utils';
import Table from 'react-bootstrap/Table';

const CalculatorResult = ({ result }) => {
  // Cálculo do valor total dos juros
  const totalInterest = result.total - result.initialAmount - result.monthlyDeposit * result.months;
  const [dadosSelic, setDadosSelic] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSelic();
      if (data) {
        setDadosSelic(data);
      }
    };

    fetchData();
  }, []);

  // Utiliza a função getLastDateAndValue para obter a última data e último valor
  const { ultimaData, ultimoValor } = getLastDateAndValue(dadosSelic);

  return (
    <div className="border mb-4 p-4 rounded-2">
      <p className="lead">
        <strong>{formatCurrency(result.total)}</strong>, é o valor aproximado de retorno após {result.months} meses.
      </p>
      <div class="table-responsive-lg">
        <Table striped bordered hover>
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
      <h3>
        A taxa Selic hoje está em <strong>{ultimoValor}%</strong> ao ano.
      </h3>
      <p class="lead">Conforme decisão mais recente do Copom em: <strong>{ultimaData}</strong></p>
    </div>
  );
};

export default CalculatorResult;
