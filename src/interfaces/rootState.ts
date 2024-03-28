 
import { EAssociationType, ESocialNetworkType } from './enum';

export interface PhoneNumber {
    countryCode: string;
    areaCode: string;
    number: string;
}

export interface Contact {
    addressTo: string;
    email: string;
    phoneNumbers: PhoneNumber[];
}

export interface SocialNetwork {
    socialNetworkType: ESocialNetworkType;
    url: string;
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

export interface ObjectContextProps {
    name: string;
    foundationDate: string;
    colors: string[];
    associationType: EAssociationType;
    activeMembers: number;
    isSharedWithAResidence: boolean;
    hasOwnedHeadquarters: boolean;
    isLegalEntity: boolean;
    cnpj: string;
    canIssueOwnReceipts: boolean;
    associationHistoryNotes: string;
    address: Address;
    events: Event[];
    members: Member[];
    socialNetworks: SocialNetwork[];
    contacts: Contact[];
}

 