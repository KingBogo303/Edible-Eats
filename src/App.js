import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Area from "./pages/LandingPage/AreaComp/Area";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Area />} path="/area/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
