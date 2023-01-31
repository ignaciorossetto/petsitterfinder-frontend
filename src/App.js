import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Pet from "./pages/pet/Pet";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pets/:category" element={<List />} />
        <Route path="/pets/:category/:id" element={<Pet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
