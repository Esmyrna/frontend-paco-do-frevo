import axios, { AxiosPromise } from "axios"
import { Association } from "../../interfaces/type"
import { useMutation, useQueryClient } from "react-query";
import IPagingParams from "../requestObjects/IPagingParams";

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

      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}