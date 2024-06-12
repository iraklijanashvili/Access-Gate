import Features from "./Features";
import Home from "./Home";
import Register from "./Register";
import Contact from "./Contact";
import Pricing from "./Pricing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Register" element={<Register />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Pricing" element={<Pricing />} />
      <Route path="Features" element={<Features />} />
    </Routes>
  );
}

export default App;
