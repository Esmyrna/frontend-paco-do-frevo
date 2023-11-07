import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { FormContextProvider } from './context';
import { GeneralData } from './pages/Form/General Data';
import { Dashboard } from './pages/Dashboard';
import { LegalData } from './pages/Form/Legal Data';


function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastrar-agremiacao/dados-gerais' element={
          <FormContextProvider>
            <GeneralData/>
          </FormContextProvider>
        } />
        <Route path='/cadastrar-agremiacao/dados-juridicos' element={
          <FormContextProvider>
            <LegalData/>
          </FormContextProvider>
        } />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;