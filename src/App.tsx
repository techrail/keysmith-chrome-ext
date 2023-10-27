import "./App.css";
import { Footer } from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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

const Layout = () => {
  return (
    <div className="h-[500px] bg-white w-[300px] flex flex-col font-sans">
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '*',
        Component: Home,
      },
      {
        path: '/favourite',
        Component: Favourite,
      },
      {
        path: '/add',
        Component: Add,
      },
      {
        path: '/add/login',
        Component: Login,
      },
      {
        path: '/add/note',
        Component: Note,
      },
      {
        path: '/add/wallet',
        Component: Wallet,
      },
      {
        path: '/add/bank',
        Component: Bank,
      },
      {
        path: '/add/credit',
        Component: Credit,
      },
      {
        path: '/add/license',
        Component: License,
      },
      {
        path: '/files',
        Component: Files,
      },
      {
        path: '/settings',
        Component: Settings
      }
    ],
  },
]);

const App = () => <RouterProvider router={router} />

export default App;