
import Embed from  "./pages/embed"; 
import Login from "./pages/Login";
import Register from "./pages/register";
import Song from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" exact element={<Embed/>} />
      <Route path="/register" exact element={<Register/>} />
      <Route path="/getsongs" exact element={<Song/>} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
