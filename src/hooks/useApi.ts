import { useState } from 'react';
import { ApiInterface } from '../interfaces';
import { ApiService } from '../services';

export const useApi = () => {
  
 const [usersList, setusersList] = useState<ApiInterface[]>([]);

  const getAll = async () => {
    const { status, data } = await ApiService.getAll();
    if (status !== 200 || data === usersList) throw new Error();
    setusersList(data);
  };

  return {
    usersList,
    getAll,
  };
};
