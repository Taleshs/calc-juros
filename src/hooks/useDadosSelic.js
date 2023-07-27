import { useState, useEffect } from 'react';
import {fetchSelic,getLastDateAndValue} from '../utils/utils';

const useDadosSelic = () => {
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

  const { ultimaData, ultimoValor } = getLastDateAndValue(dadosSelic);

  return { dadosSelic, ultimaData, ultimoValor };
};

export default useDadosSelic;
