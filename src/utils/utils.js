export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};


export const fetchSelic = async () => {
  const apiUrl = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos/10?formato=json';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    return null;
  }
};

export const getLastDateAndValue = (dadosSelic) => {
  if (dadosSelic.length === 0) {
    return { ultimaData: '', ultimoValor: '' };
  }

  const ultimaData = dadosSelic[dadosSelic.length - 1].data;
  const ultimoValor = dadosSelic[dadosSelic.length - 1].valor;

  return { ultimaData, ultimoValor };
};
