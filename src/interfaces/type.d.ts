import { BrazilStatesType } from "./enum";

export interface PhoneNumber {
  countryCode: string;
  areaCode: string;
  number: string;
}

export interface Address {
  addressSite: string | null;
  number: string | null ;
  complement: string | null;
  district: string | null;
  city: string | null;
  state: BrazilStatesType;
  country: string | null;
  zipCode: string | null;
}

export interface Events {
  eventType: string 
  dateOfAccomplishment: string
  participantsAmount: number 
}

export interface Member {
  name: string | null;
  surname: string | null;
  role: string | null;
  actuationTimeInMonths: number | null;
  isFrevoTheMainRevenueIncome: boolean;
}

export interface SocialNetwork {
  socialNetworkType: ESocialNetworkType | null;
  url: string | null;
}
 

 
export interface Contact {
  addressTo: string | null;
  email: string | null;
  phoneNumbers: PhoneNumber[];
}

export interface Association {
  address: Address;
  events: Event[];
  members: Member[];
  socialNetworks: SocialNetwork[];
  contacts: Contact[];
}

export interface AssociationGeraData {
  name: string | null;
  foundationDate: string | null;
  colors: string[] | null;
  associationType: string | null;
  activeMembers: number | null;
  isSharedWithAResidence: boolean;
  hasOwnedHeadquarters: boolean;
  isLegalEntity: boolean;
  cnpj: string | null;
  canIssueOwnReceipts: boolean;
  associationHistoryNotes: string | null;
}

interface SimplifiedAssociationDTO {
    id: string
    name: string;
    foundationDate: Date;
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
