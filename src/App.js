import './App.css';
import TopNav from './components/TopNav/TopNav';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import MainProvider from './context/MainProvider';


function App() {
  
  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <TopNav />
          <Router />
        </BrowserRouter>
      </MainProvider>
    </>
  );
}

export default App;
