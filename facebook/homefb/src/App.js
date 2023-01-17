import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
        <BrowserRouter >
        
            <Routes>
                  <Route path="/" element={<Home /> } ></Route>
                  <Route path="/login" element={<SignIn /> } ></Route>
                  <Route path="/register" element={<SignUp /> } ></Route>
            </Routes>
        
        </BrowserRouter>
    
    </>
   
  );
}

export default App;
