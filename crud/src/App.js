import "./App.css";
import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDetail from "./Component/AddDetail";
import Home from "./Component/Home";
import AddProduct from "./Component/AddProduct";
import Viewproduct from "./Component/Viewproduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="adddetail" element={<AddDetail />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="viewproduct" element={<Viewproduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
