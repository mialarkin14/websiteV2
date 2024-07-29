import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Code from "./pages/code"
import Electronics from "./pages/electronics"
import Drawings from "./pages/drawings"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <BrowserRouter>
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
    <Analytics></Analytics>
    </>
  )
}

export default App
