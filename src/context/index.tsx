import React, { useState } from 'react';
import { Address, Contact, Event, Member, SocialNetwork } from '../interfaces/type'
import axios from 'axios';
import { EAssociationType, ESocialNetworkType } from '../interfaces/enum'


interface ObjectContextProps {
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

interface StepContextProps {
  currentStep?: number;
  setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  userData?: ObjectContextProps;
  setUserData?: React.Dispatch<React.SetStateAction<ObjectContextProps>>;
  finalData: ObjectContextProps[];
  setFinalData: React.Dispatch<React.SetStateAction<ObjectContextProps[]>>;
  submitData: () => Promise<void>;

  socialNetworkType: ESocialNetworkType;
  setSocialNetworkType: React.Dispatch<React.SetStateAction<ESocialNetworkType>>;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  memberName: string,
  setMemberName: React.Dispatch<React.SetStateAction<string>>;
  surnameMember: string;
  setSurnameMember: React.Dispatch<React.SetStateAction<string>>;
  roleMember: string;
  setRoleMember: React.Dispatch<React.SetStateAction<string>>;
  actuationTimeInMonths: number;
  setActuationTimeInMonths: React.Dispatch<React.SetStateAction<number>>;
  isFrevoTheMainRevenueIncome: boolean;
  setIsFrevoTheMainRevenueIncome: React.Dispatch<React.SetStateAction<boolean>>;
  addressTo: string,
  setAddressTo: React.Dispatch<React.SetStateAction<string>>;
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  areaCode: string;
  setAreaCode: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
}

interface MultiStepContextProps {
  children: React.ReactNode;
}

export const StepContext = React.createContext<StepContextProps | undefined>(undefined);

export const MultiStepContext: React.FC<MultiStepContextProps> = ({ children }) => {
  


  const [currentStep, setCurrentStep] = useState(1);

  const [socialNetworkType, setSocialNetworkType] = useState<ESocialNetworkType>(ESocialNetworkType.facebook);
  const [url, setUrl] = useState<string>('');

  const [memberName, setMemberName] = useState<string>('');
  const [surnameMember, setSurnameMember] = useState<string>('');
  const [roleMember, setRoleMember] = useState<string>('');
  const [actuationTimeInMonths, setActuationTimeInMonths] = useState(0);
  const [isFrevoTheMainRevenueIncome, setIsFrevoTheMainRevenueIncome] = useState(false);
  const [addressTo, setAddressTo] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('');
  const [areaCode, setAreaCode] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const [userData, setUserData] = useState<ObjectContextProps>({
    name: '',
    foundationDate: '',
    colors: [],
    associationType: EAssociationType.carnivalBlock,
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
    members: [],
    socialNetworks: [],
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
        value={{
          currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData, socialNetworkType,
          setSocialNetworkType,
          url,
          setUrl,
          memberName,
          setMemberName,
          surnameMember,
          setSurnameMember,
          roleMember,
          setRoleMember,
          actuationTimeInMonths,
          setActuationTimeInMonths,
          isFrevoTheMainRevenueIncome,
          setIsFrevoTheMainRevenueIncome,
          addressTo,
          setAddressTo,
          email,
          setEmail,
          countryCode,
          setCountryCode,
          areaCode,
          setAreaCode,
          number,
          setNumber
        }}>
        {children}
      </StepContext.Provider>
    </>
  );
};
