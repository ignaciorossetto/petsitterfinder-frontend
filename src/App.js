import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Pet from "./pages/pet/Pet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/:category" element={<List />} />
        <Route path="/pets/:category/:id" element={<Pet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
