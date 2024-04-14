import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "../pages/Home"
import MultiStepForm from "../components/MultiStep"
import FirstStep from "../pages/Forms/FirstStep/FirstStep"

function RouterPage() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/multistep" element={<MultiStepForm />} />
          <Route path="/new-from" element={<FirstStep />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPage
