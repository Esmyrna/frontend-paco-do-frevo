import axios, { AxiosResponse, AxiosError } from 'axios';
import { FrevoEntity, IResponse } from './types';

const API_URL = 'https://pacodofrevoapi1-6ka9yo5l.b4a.run/';

const ENDPOINT_URL = `${API_URL}other-frevo-entities`;

/** Chamada do endpoint de get de outras entidades do frevo */
export const getOtherFrevoEntities = async (): Promise<IResponse> => {
  let response: AxiosResponse<FrevoEntity[]> | null = null;
  let error: AxiosError | null = null;

  try {
    response = await axios.get<FrevoEntity[]>(ENDPOINT_URL);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error = err;
    } else {
      error = new axios.AxiosError('Error:', err as any);
    }
  }

  return { response, error };
};
