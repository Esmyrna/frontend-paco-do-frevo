export interface FormContextProps {
  children: ReactNode;
  jsonData?: object;
  setJsonData?: React.Dispatch<React.SetStateAction<object | undefined>>
}