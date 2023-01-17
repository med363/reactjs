
import  ReactDOM  from "react-dom/client"


// Boostrap files 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { BrowserRouter, Routes , Route } from "react-router-dom";
// selectionner root 
const root = document.getElementById("root")
// entry point app 
const app = ReactDOM.createRoot(root)
// JSX 

app.render(
    <>
    <BrowserRouter >
        <Routes>
              <Route path={"/"} element={<App />}    />
        </Routes>
    </BrowserRouter>
    </>
  
)

