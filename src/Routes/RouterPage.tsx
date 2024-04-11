import { BrowserRouter, Route, Routes } from "react-router-dom"
 
import HomePage from "../pages/Home"
import MultiStepForm from "../components/MultiStep"

function RouterPage() {


  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/multistep" element={<MultiStepForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPage
