import React, { createContext,  ReactNode } from "react";
import { FormContextProps } from "./types";

export const FormContext = createContext<FormContextProps | undefined>(undefined);

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContextProvider: React.FC<FormContextProviderProps> = ({ children }) => {

  return (
    <FormContext.Provider value={{}}>
      {children}
    </FormContext.Provider>
  );
};