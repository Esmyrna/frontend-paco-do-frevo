import React, { useState } from 'react';
import { Address, Contact, Event, Member, SocialNetwork } from '../interfaces/type';
import axios from 'axios';


interface ObjectContextProps {
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
  events: Event[];
  members: Member[];
  socialNetworks: SocialNetwork[];
  contacts: Contact[];
}

interface StepContextProps {
  currentStep?: number;
  setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  userData?: ObjectContextProps;
  setUserData?: React.Dispatch<React.SetStateAction<ObjectContextProps>>;
  finalData: ObjectContextProps[];
  setFinalData: React.Dispatch<React.SetStateAction<ObjectContextProps[]>>;
  submitData: () => Promise<void>; 
}

interface MultiStepContextProps {
  children: React.ReactNode;
}

export const StepContext = React.createContext<StepContextProps | undefined>(undefined);

export const MultiStepContext: React.FC<MultiStepContextProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<ObjectContextProps>({
    name: '',
    foundationDate: '',
    colors: [],
    associationType: '',
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

  const [finalData, setFinalData] = useState<ObjectContextProps[]>([]);

  const submitData = async () => {
    try {
      const response = await axios.post('sua-rota-no-backend', finalData);
      console.log('Resposta do servidor:', response.data);

      setFinalData((prevFinalData) => [...prevFinalData, userData]);
      setCurrentStep((prevStep) => prevStep + 1);
    } catch (error) {

      console.error('Erro ao enviar dados para o backend:', error);
    }
  };

  return (
    <>
      <StepContext.Provider
        value={{ currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData }}>
        {children}
      </StepContext.Provider>
    </>
  );
};
