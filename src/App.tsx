import "./App.css";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Favourite } from "./components/Pages/Favourite";
import { Add } from "./components/Pages/Add";
import { Files } from "./components/Pages/Files";
import { Settings } from "./components/Pages/Settings";
import { Login } from './components/Pages/PlusPages/Login'
import { Bank } from './components/Pages/PlusPages/Bank'
import { Credit } from './components/Pages/PlusPages/Credit'
import { License } from './components/Pages/PlusPages/License'
import { Note } from './components/Pages/PlusPages/Note'
import { Wallet } from './components/Pages/PlusPages/Wallet'

function App() {
  return (
    <div className="h-[500px] w-[300px] flex flex-col font-sans">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favourite" element={<Favourite />} />
        <Route path="/add" element={<Add />} />
        <Route path="/add/login" element={<Login />} />
        <Route path="/add/note" element={<Note />} />
        <Route path="/add/wallet" element={<Wallet />} />
        <Route path="/add/bank" element={<Bank />} />
        <Route path="/add/credit" element={<Credit />} />
        <Route path="/add/license" element={<License />} />
        <Route path="/files" element={<Files />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;