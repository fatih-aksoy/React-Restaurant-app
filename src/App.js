import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// ! github pro link: https://github.com/fdnakn/reactRestaurantWebsite

//! navbardan baslayalim. Left side icin hamburger logoyu Navbarda cagiririz. Onsan sonra App.js de, yani burada <Navbar/> comp. u cagiririz.

//! sayfalar arasinda gezinmek icin react-dom kullanriz. yarn add react-router-dom yazar ver yuklersin. sonra bunu import App.js de cagiririz.

//! import { BrowserRouter as Router, Routes, Route } from "react-router-dom";, import ettikten sonra Navbar.js si sarmallayalim. Onemli bir husus, {BrowserRouter as Router, Routes, Route} siralamasi onemli.

// ! https://react-icons.github.io/react-icons/ yarn add react-icons --save

//! Footer icin materials icon kur. yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react;

// ! responsive drawer app bar links
// ! https://mui.com/material-ui/react-drawer/
// ! https://mui.com/material-ui/react-app-bar/
