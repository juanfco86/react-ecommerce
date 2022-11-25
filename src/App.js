import './App.css';
import TopNav from './components/TopNav/TopNav';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import MainProvider from './context/Main/MainProvider';
import AuthProvider from './context/Auth/AuthProvider';


function App() {
  return (
    <>
      <AuthProvider>
        <MainProvider>
            <BrowserRouter>
              <TopNav />
              <Router />
            </BrowserRouter> 
        </MainProvider>
      </AuthProvider>
    </>
  );
}

export default App;
