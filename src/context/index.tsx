/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useReducer } from "react";
import { EAssociationType, ESocialNetworkType } from "../interfaces/enum";
import { Address, Contact, Events, Member, SocialNetwork } from "../interfaces/type";


type State = {
    currentStep: number;
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

type Action = {
    type: FormActions,
    payload: any;
}

type ContextType = {
    state: State,
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

// Initial State:

const initialData = {
    currentStep: 0,
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
            socialNetworkType: ESocialNetworkType.instagram,
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
};

// Context

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer

export enum FormActions {
    setCurrentStep,
    setName,
    setFoundationDate,
    setColors,
    setAssociationType,
    setActiveMembers,
    setIsSharedWithAResidence,
    setHasOwnedHeadquarters,
    setIsLegalEntity,
    setCnpj,
    setCanIssueOwnReceipts,
    setAssociationHistoryNotes,
    setAddress,
    setEvents,
    setMembers,
    setSocialNetworks,
    setContacts
}


const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setFoundationDate:
            return { ...state, foundationDate: action.payload };
        case FormActions.setColors:
            return { ...state, colors: action.payload };
        case FormActions.setAssociationType:
            return { ...state, associationType: action.payload };
        case FormActions.setActiveMembers:
            return { ...state, activeMembers: action.payload };
        case FormActions.setIsSharedWithAResidence:
            return { ...state, isSharedWithAResidence: action.payload };
        case FormActions.setHasOwnedHeadquarters:
            return { ...state, hasOwnedHeadquarters: action.payload };
        case FormActions.setIsLegalEntity:
            return { ...state, isLegalEntity: action.payload };
        case FormActions.setCnpj:
            return { ...state, cnpj: action.payload };
        case FormActions.setCanIssueOwnReceipts:
            return { ...state, canIssueOwnReceipts: action.payload };
        case FormActions.setAssociationHistoryNotes:
            return { ...state, associationHistoryNotes: action.payload };
        case FormActions.setAddress:
            return { ...state, address: action.payload };
        case FormActions.setEvents:
            return { ...state, events: action.payload };
        case FormActions.setMembers:
            return { ...state, members: action.payload };
        case FormActions.setSocialNetworks:
            return { ...state, socialNetworks: action.payload };
        case FormActions.setContacts:
            return { ...state, contacts: action.payload };
        default:
            return state;
    }
};

// Provider

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

// Context Hook

export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error("useForm precisa ser usado dentro do FormProvider")
    }
    return context;
}
