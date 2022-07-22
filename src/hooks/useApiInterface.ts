import { useState } from 'react';
import { ApiInterface } from '../interfaces';
import { ApiService } from '../services';

export const useApiInterface = () => {
  
 const [charactersList, setcharactersList] = useState<ApiInterface[]>([]);

  const getAll = async () => {
    const { status, data } = await ApiService.getAll();
    if (status !== 200 || data === charactersList) throw new Error();
    setcharactersList(data.results);
  };

  return {
    charactersList,
    getAll,
  };
};
