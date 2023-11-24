import { Routes, Route,BrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from './pages/HomePage'
import CreateCat from "./pages/CreateCat"
import ProtectedRoute from "./ProtectedRoute"
import {AuthProvider} from './context/AuthContext'


const App = () => {
  return (
    <div className="container">
    <AuthProvider>
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<h1>holamundo</h1>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/create-cat" element={<CreateCat/>}/>
          <Route path="/update/:id" element={<CreateCat/>}/>
        </Route>
      </Routes>
    </BrowserRouter> 
    </AuthProvider>    
    </div>
  )
}

export default App