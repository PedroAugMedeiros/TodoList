import { Api } from './Api';

export const getAll = () => Api.get('/users');

export const ApiService = {
  getAll,
};
