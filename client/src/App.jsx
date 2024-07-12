import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import Signup from './pages/signup/Signup.jsx'
import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function App() {
    return (
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </div>
    )
}

export default App
