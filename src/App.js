import Mascotas from "./components/mascotas";
import Palindromo from "./components/palindromo";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
         <BrowserRouter>
         
      <Navbar />
     <Routes>
     <Route path="*" element={<Mascotas />} />
     <Route path="/palindromo" element={ <Palindromo />} />
     
     </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
