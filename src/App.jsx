import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu/Menu";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Updates from "./pages/updates/Updates";
import Solutions from "./pages/solutions/Solutions";
import Contact from "./pages/contact/Contact";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Menu />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
