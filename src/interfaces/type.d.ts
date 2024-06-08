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
  state: string | null;
  country: string | null;
  zipCode: string | null;
}

export interface Events {
  eventType: string | null;
  dateOfAccomplishment: string | null;
  participantsAmount: number | null;
}

export interface Member {
  name: string | null;
  surname: string | null;
  role: string | null;
  actuationTimeInMonths: number | null;
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
  socialNetworkType: ESocialNetworkTyp | null;
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
