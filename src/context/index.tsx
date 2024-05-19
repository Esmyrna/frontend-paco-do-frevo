import React, { createContext, useContext, useState } from 'react';

// Definição dos tipos
interface PhoneNumber {
    countryCode: string;
    areaCode: string;
    number: string;
}

interface Contact {
    addressTo: string;
    email: string;
    phoneNumbers: PhoneNumber[];
}

interface Member {
    name: string;
    surname: string;
    role: string;
    actuationTimeInMonths: number;
    isFrevoTheMainRevenueIncome: boolean;
}

interface SocialNetwork {
    socialNetworkType: string;
    url: string;
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

interface Event {
    eventType: string;
    dateOfAccomplishment: string;
    participantsAmount: number;
}

interface UserData {
    name: string;
    foundationDate: string;
    colors: string[];
    associationType: string;
    activeMembers: number;
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

// Definição do contexto
interface GlobalContextType {
    userData: UserData;
    setUserData: (data: UserData) => void;
}

// Criando o contexto
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Hook personalizado para usar o contexto
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

// Componente provedor do contexto
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<UserData>({
        name: '',
        foundationDate: '',
        colors: [],
        associationType: '',
        activeMembers: 0,
        hasOwnedHeadquarters: false,
        isLegalEntity: false,
        cnpj: '',
        canIssueOwnReceipts: false,
        associationHistoryNotes: '',
        address: {
            addressSite: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
        },
        events: [
            {
                eventType: '',
                dateOfAccomplishment: '',
                participantsAmount: 0,
            },
        ],
        members: [
            {
                name: '',
                surname: '',
                role: '',
                actuationTimeInMonths: 0,
                isFrevoTheMainRevenueIncome: false,
            },
        ],
        socialNetworks: [
            {
                socialNetworkType: '',
                url: '',
            },
        ],
        contacts: [
            {
                addressTo: '',
                email: '',
                phoneNumbers: [
                    {
                        countryCode: '',
                        areaCode: '',
                        number: '',
                    },
                ],
            },
        ],
    });

    return (
        <GlobalContext.Provider value={{ userData, setUserData }}>
            {children}
        </GlobalContext.Provider>
    );
};
