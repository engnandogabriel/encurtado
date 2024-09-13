import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/index.jsx";
import Home from "./pages/Home/index.jsx";
import Dados from "./pages/Dados/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextAPIPStorage } from "./Context/api/ContextAPI.jsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <ContextAPIPStorage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dados" element={<Dados />} />
          </Routes>
        </ContextAPIPStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
