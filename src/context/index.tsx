import React, { createContext, useContext, useState } from 'react';
import { Address, Contact, Events, Member, SocialNetwork } from '../interfaces/type';
import { BrazilStatesType, EAssociationType } from '../interfaces/enum';
 

export interface UserData {
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
  events: Events[];
  members: Member[];
  socialNetworks: SocialNetwork[];
  contacts: Contact[];
}

interface GlobalContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
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
    associationType: EAssociationType.club,  
    activeMembers: 0,
    isSharedWithAResidence: false,
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
      state: BrazilStatesType.PE,
      country: '',
      zipCode: '',
    },
    events: [],
    members: [],
    socialNetworks: [],
    contacts: [],
  });

  return (
    <GlobalContext.Provider value={{ userData, setUserData }}>
      {children}
    </GlobalContext.Provider>
  );
};
