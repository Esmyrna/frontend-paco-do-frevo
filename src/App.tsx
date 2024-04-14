import { FormProvider } from './context';
import { QueryClient, QueryClientProvider } from 'react-query';
import RouterPage from './Routes/RouterPage';

const queryClient = new QueryClient();

function AppRoute() {
  return (
    <FormProvider>
      <QueryClientProvider client={queryClient}>
        <RouterPage />

      </QueryClientProvider>
    </FormProvider>
  );
}

export default AppRoute;
