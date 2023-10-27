import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
