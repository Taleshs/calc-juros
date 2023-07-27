import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useDadosSelic from '../hooks/useDadosSelic';


const CalculatorForm = ({ onCalculate }) => {
  // Estados para armazenar os valores dos campos do formulário
  const [initialAmount, setInitialAmount] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [months, setMonths] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const { dadosSelic, ultimaData, ultimoValor } = useDadosSelic();


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
      <Form className="border p-4 rounded-2" onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Aporte inicial:"
              className="mb-3"
            >
              <Form.Control 
                placeholder="Aporte inicial"
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Aporte Mensal:"
              className="mb-3"
            >
              <Form.Control
                placeholder="Aporte Mensal"
                type="number"
                value={monthlyDeposit}
                onChange={(e) => setMonthlyDeposit(e.target.value)}
                required
              />
            </FloatingLabel>
          </Form.Group>
       
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              placeholder="Período de aportes em Meses"
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              required
            />
            <Form.Range
              min="0" max="360"
              step="1"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label={`Taxa selic atual é de: ${ultimoValor}%`}
              className="mb-3"
            >
              <Form.Control
                placeholder={`Taxa selic atual é de: ${ultimoValor}%`}
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                required
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Button variant="primary" type="submit">
              Calcular
            </Button>
          </Form.Group>
      </Form>
  );
};

export default CalculatorForm;
