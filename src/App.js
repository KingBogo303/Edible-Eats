import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AreaPage from "./pages/AreaPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import MealByLetterPage from "./pages/LandingPage/MealByLetterPage";
function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<AreaPage />} path="/meal/:name" />
          <Route element={<MealByLetterPage />} path="/meals/:letter" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
