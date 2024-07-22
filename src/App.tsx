import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Code from "./pages/code"
import Electronics from "./pages/electronics"
import Drawings from "./pages/drawings"

function App() {

  return (
    <>
      <BrowserRouter basename="/website">
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/code' element={<Code></Code>}></Route>
        <Route path='/electronics' element={<Electronics></Electronics>}></Route>
        <Route path='/drawings' element={<Drawings></Drawings>}></Route>
      </Routes>
    </BrowserRouter>
    <Home>
    </Home>
    </>
  )
}

export default App
