import { z } from 'zod'


export const objectEventsSchema = z.object({
    eventType: z.string(),
    dateOfAccomplishment: z.string(),
    participantsAmount: z.number(),
});


export const objectMembersSchema = z.object({
    name: z.string(),
    surname: z.string(),
    role: z.string(),
    actuationTimeInMonths: z.number(),
    isFrevoTheMainRevenueIncome: z.boolean(),
});

export const objectMidiaSchema = z.object({
    socialNetworkType: z.string(),
    url: z.string(),
});

export const objectPhoneNumberSchema = z.object({
    countryCode: z.string(),
    areaCode: z.string(),
    number: z.number()
});

export const objectContactsSchema = z.object({
    addressTo: z.string(),
    email: z.string(),
    phoneNumbers: z.array(objectPhoneNumberSchema)
});

export const createUserFormSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    foudationDate: z.string().min(1, 'A data é obrigatório'),
    colors: z.string(),
    associationType: z.string(),
    activeMembers: z.number(),
    hasOwnedHeadquarters: z.boolean(),
    isLegalEntity: z.boolean(),
    cnpj: z.string(),
    canIssueOwnReceipts: z.boolean(),
    associationHistoryNotes: z.string(),
    address: z.object({
        addressSite: z.string(),
        number: z.number(),
        complement: z.string(),
        district: z.string(),
        city: z.string(),
        state: z.string(),
        country: z.string(),
        zipCode: z.string(),
    }),
    events: z.array(objectEventsSchema),
    members: z.array(objectMembersSchema),
    socialNetworks: z.array(objectMidiaSchema),
    contacts: z.array(objectContactsSchema)

})
