import Login from "./pages/Login"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launchscreen from "./pages/launchscreen";

function App() {
  return (
    <BrowserRouter>
<Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/launch" element={<Launchscreen/>}/>


     </Routes>
    </BrowserRouter>
  );
}

export default App;
