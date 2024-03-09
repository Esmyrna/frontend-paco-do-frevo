export interface PhoneNumber {
  countryCode: string;
  areaCode: string;
  number: string;
}

export interface Address {
  addressSite: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Event {
  eventType: string;
  dateOfAccomplishment: string;
  participantsAmount: number;
}

export interface Member {
  name: string;
  surname: string;
  role: string;
  actuationTimeInMonths: number;
  isFrevoTheMainRevenueIncome: boolean;
}
export enum ESocialNetworkType {
  facebook = "Facebook",
  instagram = "Instagram",
  twitter = "Twitter",
  tiktok = "TikTok",
  linkedin = "Linkedin",
}

export interface SocialNetwork {
  socialNetworkType: ESocialNetworkType;
  url: string;
}
 

 
export interface Contact {
  addressTo: string;
  email: string;
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
}
