import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormData } from './pages/Forms/FormData'


import HomePage from './pages/Home';
import Nav from './components/Nav';
import { MultiStepContext } from './context';


function AppRoute() {
  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register-association/form' element={
         <MultiStepContext>
           <FormData />
         </MultiStepContext>
          
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;