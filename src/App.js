import logo from './logo.svg';
import './App.css';
import './assets/homepage.css';
import Embed from  "./pages/embed"; 
import Login from "./pages/Login";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" exact element={<Embed/>} />
      <Route path="/register" exact element={<Register/>} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
