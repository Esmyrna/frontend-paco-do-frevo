import { AxiosError, AxiosResponse } from "axios";

export interface IPagingParams {
    page: number;
    pageSize: number;
}

interface Address {
    addressSite: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}

export interface Entity {
    id: string;
    name: string;
    foundationDate: string;
    colors: string[];
    associationType: string;
    activeMembers: number;
    isSharedWithAResidence: boolean;
    hasOwnedHeadquarters: boolean;
    isLegalEntity: boolean;
    cnpj: string;
    canIssueOwnReceipts: boolean;
    associationHistoryNotes: string;
    address: Address;
}
export interface IResponse{
    response: AxiosResponse<any, any> | null
    error: AxiosError | null
    loading: boolean
}
  