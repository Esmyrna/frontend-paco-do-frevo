import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "../pages/Home"
import MultiStepForm from "../components/MultiStep"
import ListOfAssociations from "../pages/ListOfAssociations/ListOfAssociations"


function RouterPage() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/multistep" element={<MultiStepForm />} />
          <Route path="/listing" element={<ListOfAssociations />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPage
