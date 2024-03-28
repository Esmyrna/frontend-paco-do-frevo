import { BrowserRouter, Route, Routes } from "react-router-dom"
import { OneStep } from "../pages/Forms/OneStep"
import { SecondStep } from "../pages/Forms/SecondStep"
import { ThreeStep } from "../pages/Forms/ThreeStep"
import HomePage from "../pages/Home"

function RouterPage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/step1' element={<OneStep />} />
          <Route path='/step2' element={<SecondStep />} />
          <Route path='/step3' element={<ThreeStep />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPage
