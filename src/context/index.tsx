/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from "react";
import { FormContextProps } from "./types";

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormContextProvider: React.FC<FormContextProps> = ({ children, jsonData, setJsonData }) => {
  const [formData, setFormData] = useState<object | undefined>(jsonData);

  const contextValue: FormContextProps = {
    jsonData: formData,
    setJsonData: setJsonData || ((data) => setFormData(data)),
    children: children
  }

  return (
    <FormContext.Provider value={contextValue}> 
      {children}
    </FormContext.Provider>
  );
};