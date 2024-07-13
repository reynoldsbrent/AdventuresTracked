import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { UserProvider } from './Context/useAuth';

function App() {
  return (
    <>
    <UserProvider>
     <Search />
     <CardList />
     <ToastContainer />
     </UserProvider>
    </>
  );
}

export default App;
