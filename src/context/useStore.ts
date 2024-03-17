import { create } from "zustand";
import { EAssociationType, ESocialNetworkType } from "../interfaces/enum";
import { PhoneNumber } from "../interfaces/type";

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

interface Member {
  name: string;
  surname: string;
  role: string;
  actuationTimeInMonths: number;
  isFrevoTheMainRevenueIncome: boolean;
}

interface SocialNetwork {
  socialNetworkType: ESocialNetworkType;
  url: string;
}

interface Contact {
  addressTo: string;
  email: string;
  phoneNumbers: PhoneNumber[];
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

interface FormStore {
  state: ObjectContextProps;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  updateField: (field: string, value: unknown) => void;
  updateAddress: (address: Partial<Address>) => void;
  addItem: (
    field: "events" | "members" | "socialNetworks" | "contacts",
    item: unknown
  ) => void;
}

const useStore = create<FormStore>((set) => ({
    state: {
        name: "",
        foundationDate: "",
        colors: [],
        associationType: EAssociationType.carnivalBlock,
        activeMembers: 0,
        isSharedWithAResidence: false,
        hasOwnedHeadquarters: false,
        isLegalEntity: false,
        cnpj: "",
        canIssueOwnReceipts: false,
        associationHistoryNotes: "",
        address: {
        addressSite: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        },
        events: [
        {
            eventType: "",
            dateOfAccomplishment: "",
            participantsAmount: 0,
        },
        ],
        members: [
        {
            name: "",
            surname: "",
            role: "",
            actuationTimeInMonths: 0,
            isFrevoTheMainRevenueIncome: false,
        },
        ],
        socialNetworks: [
        {
            socialNetworkType: ESocialNetworkType.twitter,
            url: "",
        },
        ],
        contacts: [
        {
            addressTo: "",
            email: "",
            phoneNumbers: [
            {
                countryCode: "",
                areaCode: "",
                number: "",
            },
            ],
        },
        ],
    },
  currentStep: 1,
  setCurrentStep: (step) => set({ currentStep: step }),
  updateField: (field, value) =>
    set((state) => ({ state: { ...state.state, [field]: value } })),
  updateAddress: (address) =>
    set((state) => ({
      state: {
        ...state.state,
        address: { ...state.state.address, ...address },
      },
    })),
  addItem: (field, item) =>
    set((state) => ({
      state: { ...state.state, [field]: [...state.state[field], item] },
    })),
}));

export default useStore;
