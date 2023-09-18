import { Dropdown } from "./components/Dropdown";
import "./App.css";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Favourite } from "./components/Pages/Favourite";
import { Add } from "./components/Pages/Add";
import { Files } from "./components/Pages/Files";
import { Settings } from "./components/Pages/Settings";


function App() {
  return (
    <div className="app">
      <Dropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Files" element={<Files />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
