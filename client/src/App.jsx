import react from "react"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import DashBoard from './Pages/DashBoard';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Header from "./Components/Header";
import FooterComponent from "./Components/FooterComponent";

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
