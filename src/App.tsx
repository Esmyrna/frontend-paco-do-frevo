
import { FormProvider } from './context';
import RouterPage from './Routes/RouterPage';



function AppRoute() {
  return (  
    <FormProvider>
        <RouterPage />
    </FormProvider>
  );
}

export default AppRoute;