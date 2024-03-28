/* eslint-disable no-case-declarations */
import React, { ReactNode, Dispatch } from 'react';
import { Address, Contact, Event, Member, SocialNetwork } from '../interfaces/type';
import { EAssociationType } from '../interfaces/enum';

import { Reducer, combineReducers } from '@reduxjs/toolkit';

interface UpdateFieldPayload {
    field: string;
    value: unknown;
}

interface UpdateAddressPayload {
    address: Partial<Address>;
}

interface AddItemPayload {
    field: 'events' | 'members' | 'socialNetworks' | 'contacts';
    item: unknown;
}

interface MyAction<T = unknown> {
    type: string;
    payload?: T;
}


export interface FormContextProps {
    children?: ReactNode;
    jsonData?: object;
    setJsonData?: React.Dispatch<React.SetStateAction<object | undefined>>
    state: ObjectContextProps;
    dispatch: Dispatch<MyAction>;
}

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

const initialState: ObjectContextProps = {
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
};



export const updateField = (field: string, value: unknown) => ({
    type: 'UPDATE_FIELD',
    payload: { field, value } as UpdateFieldPayload,
  });
  
export const updateAddress = (address: Partial<Address>) => ({
    type: 'UPDATE_ADDRESS',
    payload: { address } as UpdateAddressPayload,
  });
  
export const addItem = (field: 'events' | 'members' | 'socialNetworks' | 'contacts', item: unknown) => ({
    type: 'ADD_ITEM',
    payload: { field, item } as AddItemPayload,
  });
 
export const formReducer: Reducer<ObjectContextProps, MyAction> = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        const updateFieldPayload = action.payload as UpdateFieldPayload;
        return { ...state, [updateFieldPayload.field]: updateFieldPayload.value };
      case 'UPDATE_ADDRESS':
        const updateAddressPayload = action.payload as UpdateAddressPayload;
        return { ...state, address: { ...state.address, ...updateAddressPayload.address } };
      case 'ADD_ITEM':
        const addItemPayload = action.payload as AddItemPayload;
        return { ...state, [addItemPayload.field]: [...state[addItemPayload.field], addItemPayload.item] };
      default:
        return state;
    }
  };

export const rootReducer = combineReducers({
    form: formReducer,

});