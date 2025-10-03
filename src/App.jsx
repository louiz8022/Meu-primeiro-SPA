import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { AboutPage } from "./pages/About"
import { ContactPage } from "./pages/Contact"
import { AnimalsPage } from "./pages/Animals"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/animais" element={<AnimalsPage />} />
      </Routes>
    </BrowserRouter>

  )



}

export default App