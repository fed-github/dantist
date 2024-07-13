import { React } from "react";
import AppNav from "./Layout/Navigation/AppNav";
import AppMain from "./Layout/Main/AppMain";
import Footer from "./Layout/Footer";
import "./main.css";

function App() {
  return (
    <div>
      <AppNav />
      <AppMain />
      <Footer />
    </div>
  );
}

export default App;
