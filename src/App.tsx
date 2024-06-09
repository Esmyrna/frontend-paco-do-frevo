import {  GlobalProvider } from './context';
import RouterPage from './Routes/RouterPage';
 

 

function AppRoute() {
  return (
    <GlobalProvider>
          <RouterPage />
    </GlobalProvider>
  );
}

export default AppRoute;
