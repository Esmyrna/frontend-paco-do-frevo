import { AxiosError, AxiosResponse } from "axios";

export interface IPagingParams {
  page: number;
  pageSize: number;
}

export default IPagingParams;

export interface IAddress {
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
  createdBy: string | null;
  updatedBy: string | null;
}

export interface IAssociation {
  name: string;
  foundationDate: string;
  associationType: string;
  activeMembers: number;
  isSharedWithAResidence: boolean;
  hasOwnedHeadquarters: boolean;
  isLegalEntity: boolean;
  cnpj: string | null;
  canIssueOwnReceipts: boolean;
  associationHistoryNotes: string;
  colors: string[];
  address: IAddress;
  id: string;
}

export interface IResponseData {
  result: IAssociation[];
  hasNextPage: boolean;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface IResponse {
  response: AxiosResponse<any, any> | null;
  error: AxiosError | null;
}