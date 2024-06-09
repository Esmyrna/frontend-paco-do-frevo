import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios"
import { Association } from "../../interfaces/type"
import { useMutation, useQueryClient } from "react-query";
import { IPagingParams, IResponse } from "./types";

const API_URL = 'https://pacodofrevoapi1-6ka9yo5l.b4a.run/associations'

const associationData = async (data: Association): AxiosPromise<unknown> => {
    const response = axios.post(API_URL, data);
    return response;
}

export function AssociationApi() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: associationData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['association-data'])
        }
    })
    return mutate;
}

export async function getPagedAssociations(pagingParams: IPagingParams) {
    try {
      const response = await axios.get(
        `${API_URL}/paged?page=${pagingParams.page}&pageSize=${pagingParams.pageSize}`
      );

      return response
    } catch (error) {
      error = error
      console.error("Error fetching data:", error);
    }
    
}

export const getAllAssociations = async (pagingParams: IPagingParams): Promise<IResponse> => {
  let response: AxiosResponse<any, any> | null = null;
  let error: AxiosError | null = null;
  let loading: boolean = true;

  try {
    response = await axios.get(`${API_URL}/paged?page=${pagingParams.page}&pageSize=${pagingParams.pageSize}`);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error = err;
    } else {
      error = new axios.AxiosError('Unexpected error', err as any);
    }
  }
  loading = false;

  return {response, error, loading};
}