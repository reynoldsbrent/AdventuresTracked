import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
     <Search />
     <CardList />
     <ToastContainer />
    </div>
  );
}

export default App;
