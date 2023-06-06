import React from "react";
import "./App.css";
import Background from "./components/Background";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {
  return (
    <div className="contentPages">
      <div className="contentPage">
        <Background />
      </div>
      <Footer />
    </div>
  );
}

export default App;
