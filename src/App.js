import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About_us from "./pages/About_us/About_us";
import Contact_us from "./pages/Contact_us/Contact_us";
import Hire_page from "./pages/Hire_page/Hire_page";
import Career from "./pages/Career/Career";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hire" element={<Hire_page />} />
          <Route path="About" element={<About_us />} />
          <Route path="contact_us" element={<Contact_us />} />
          <Route path="career" element={<Career />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
