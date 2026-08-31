import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/inicio";
import Explorar from "./pages/Explorar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;