import "./App.css";
import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDetail from "./Component/AddDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="adddetail" element={<AddDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
