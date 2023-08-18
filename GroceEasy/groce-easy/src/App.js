import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import NavBar from './Components/NavBar';
import Second from './Components/Second';
import MarketFr from './Components/MarketFr';
import DataProvider from './Components/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BillSplitter from './Components/BillSplitter';
import Checkout from './Components/Checkout';
import Signup from './Components/SignUp';
import Last from './Components/Last';
import Login from './Components/Login';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <DataProvider >
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Signup />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/Home' element={<First />}></Route>
            <Route exact path='/About' element={<Second />}></Route>
            <Route exact path='/Market' element={<MarketFr />}></Route>
            <Route exact path='/Checkout' element={<Checkout />}></Route>
            <Route exact path='/BillSplitter' element={<BillSplitter />}></Route>
            <Route exact path='/Last' element={<Last />}></Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
      <Toaster />

    </div>
  );
}

export default App;
