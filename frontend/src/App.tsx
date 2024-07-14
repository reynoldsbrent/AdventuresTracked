import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { UserProvider } from './Context/useAuth';
import { Outlet } from 'react-router';
import Navbar from './Components/Navbar/Navbar';

function App() {
  
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet/>
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
