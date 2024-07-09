import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
