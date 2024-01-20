export interface PhoneNumber {
    contactId: string,
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
    associationId: string;
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

export interface SocialNetwork {
    associationId: string,
    socialNetworkType: string;
    url: string;
}

export interface Contact {
    associationId: string;
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