import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Pet from "./pages/pet/Pet";
import Register from "./pages/register/Register";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/account/Account";
import Error from "./pages/error/Error";
import AccountInfo from "./pages/account/accountInfo/AccountInfo";
import PetInfo from "./pages/account/petInfo/PetInfo";
import DaycareInfo from "./pages/account/daycareInfo/DaycareInfo";
import PaymentInfo from "./pages/account/paymentInfo/PaymentInfo";
import AddPet from "./pages/account/petInfo/addPet/AddPet";
import SitterRegister from "./pages/sitterRegister/sitterRegister";
import Messenger from './components/messenger/Messenger';

const App = () => {
  return (
    <AuthContextProvider>
    <SearchContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-sitter" element={<Login type={'sitter'} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sitter-register" element={<SitterRegister />} />
          <Route path="/pets/:category" element={<List />} />
          <Route path="/pets/:category/:id" element={<Pet />} />
          <Route path="/user" element={<Account />} />
          <Route path="/user/info" element={<AccountInfo />} />
          <Route path="/user/pets" element={<PetInfo />} />
          <Route path="/user/pets/addpet" element={<AddPet />} />
          <Route path="/user/pets/daycareinfo" element={<DaycareInfo />} />
          <Route path="/user/payments" element={<PaymentInfo />} />
          <Route path="/user/messenger" element={<Messenger />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </SearchContextProvider>
    </AuthContextProvider>
  );
};

export default App;
