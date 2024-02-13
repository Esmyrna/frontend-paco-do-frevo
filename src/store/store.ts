/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
// store.ts
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import create from 'zustand';

type AssociationData = {
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
  address: {
    addressSite: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  events: {
    eventType: string;
    dateOfAccomplishment: string;
    participantsAmount: number;
  }[];
  members: {
    name: string;
    surname: string;
    role: string;
    actuationTimeInMonths: number;
    isFrevoTheMainRevenueIncome: boolean;
  }[];
  socialNetworks: {
    socialNetworkType: string;
    url: string;
  }[];
  contacts: {
    addressTo: string;
    email: string;
    phoneNumbers: {
      countryCode: string;
      areaCode: string;
      number: string;
    }[];
  }[];
};

type AssociationStore = {
  associationData: AssociationData;
  setAssociationData: (data: Partial<AssociationData>) => void;
  resetAssociationData: () => void;
};

export const useAssociationStore = create<AssociationStore>((set) => ({
  associationData: {
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
    events: [],
    members: [],
    socialNetworks: [],
    contacts: [],
  },
   setAssociationData: (data) => set((state) => ({associationData: {...state.associationData, ...data} })),
   resetAssociationData: () => set({
    associationData: {
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
      events: [],
      members: [],
      socialNetworks: [],
      contacts: [],
    },
  }),
  createAssociation: async (newAssociation: any) => {
    const queryClient = useQueryClient();

    const mutation = useMutation(
      async () => {
        const response = await axios.post('https://pacodofrevoapi1-6ka9yo5l.b4a.run/associations', newAssociation);
        return response.data;
      },
      {
        onSuccess: (data) => {
          // Atualizar o estado do zustand com os dados bem sucedidos :)
          set((state) => ({
            associationData: { ...state.associationData, ...data },
          }));

          // Invalidar a consulta de cache após o sucesso para garantir que os dados sejam recarregados
          queryClient.invalidateQueries('association');
        },
      }
    );
    mutation.mutate();
}
}));