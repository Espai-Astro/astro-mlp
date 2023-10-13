import type { endPointT, postT } from '../types/contingutTypes';

export const fetchDades = async (url: endPointT): Promise<postT[] | undefined> => {
  try {
    const resposta = await fetch(url);
    const dades: postT[] = await resposta.json();
    return dades;
  } catch (error) {
    console.error('Error fetchdades -->', error);
  } finally {
    console.log('fetchDades --> finalitzat');
  }
};
