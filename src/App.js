import './App.css';
import PhotoContainer from './components/PhotoContainer/PhotoContainer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <>
      <TopNav />
      <div className='container-body'>
        <ShoppingCart />
        <PhotoContainer />
      </div>

    </>
  );
}

export default App;
