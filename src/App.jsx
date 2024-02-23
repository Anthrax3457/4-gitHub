import "./App.css";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Home />;
}

export default App;
