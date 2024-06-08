/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useReducer } from "react";
import { EAssociationType } from "../interfaces/enum";
import { Address, Contact, Events, Member, SocialNetwork } from "../interfaces/type";


export type State = {
    name: string | null;
    foundationDate: string | null;
    colors: string[];
    associationType: EAssociationType;
    activeMembers: string | null;
    isSharedWithAResidence: boolean;
    hasOwnedHeadquarters: boolean;
    isLegalEntity: boolean;
    cnpj: string | null;
    canIssueOwnReceipts: boolean;
    associationHistoryNotes: string | null;
    address: Address | null;
    events: Events[] | null;
    members: Member[] | null;
    socialNetworks: SocialNetwork[] | null;
    contacts: Contact[] | null;
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
    name: null,
    foundationDate: null,
    colors: [],
    associationType: EAssociationType.carnivalBlock,
    activeMembers: null,
    isSharedWithAResidence: false,
    hasOwnedHeadquarters: false,
    isLegalEntity: false,
    cnpj: null,
    canIssueOwnReceipts: false,
    associationHistoryNotes: null,
    address: null,
    events: null,
    members: null,
    socialNetworks: null,
    contacts: null
};

// Context

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer

export enum FormActions {
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


// Reducer

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
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
            return { ...state, address: action.payload === '' ? null : action.payload };
        case FormActions.setEvents:
            const eventsPayload = action.payload.length > 0 ? action.payload : null;
            return { ...state, events: eventsPayload };
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

export const FormProvider = ({ children }: FormProviderProps) => {
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
