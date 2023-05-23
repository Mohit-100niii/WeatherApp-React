import "./App.css";
import MainCard from "./components/MainCard";
import NavbarTop from "./components/NavbarTop";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
function App() {
  return (
    <>
      <NavbarTop />
      <Detail/>
      <MainCard />
      <Footer />
    </>
  );
}

export default App;
