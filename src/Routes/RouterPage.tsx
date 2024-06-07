import { BrowserRouter, Route, Routes } from "react-router-dom";


import HomePage from "../pages/Home";
import ListOfAssociations from "../pages/ListOfAssociations/ListOfAssociations";
import FirstStep from "../pages/Forms/ControlForm/ControlForm";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "../pages/Dashboard/Dashboard";

const queryClient = new QueryClient();

function RouterPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/multistep" element={<FirstStep />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/listing" element={<ListOfAssociations />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default RouterPage;
