import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "../pages/Home"
 
import ListOfAssociations from "../pages/ListOfAssociations/ListOfAssociations"
import FirstStep from "../pages/Forms/FirstStep/FirstStep"


function RouterPage() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/multistep" element={<FirstStep />} />
          <Route path="/listing" element={<ListOfAssociations />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPage
