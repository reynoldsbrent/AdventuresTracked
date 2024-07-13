import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { UserProvider } from './Context/useAuth';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <UserProvider>
        <Outlet/>
        <Search />
        <CardList />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
