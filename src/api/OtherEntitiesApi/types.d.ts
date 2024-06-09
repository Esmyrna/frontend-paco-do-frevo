export interface Address {
    id: string;
    addressSite: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
  
export interface FrevoEntity {
    id: string;
    name: string;
    type: string;
    entityHistoryNotes: string;
    actuationTimeInMonths: number;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    address: Address;
}
  
export interface IResponse {
    response: AxiosResponse<FrevoEntity[]> | null;
    error: AxiosError | null;
}