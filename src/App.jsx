import { Routes, Route,BrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1></h1>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/cats' element={<h1></h1>}/>
        <Route path='/create-cat' element={<h1></h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
