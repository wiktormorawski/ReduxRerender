import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { memo } from "react";

import "./App.css";

import EmailList from "./components/EmailList";
import NotFound from "./components/NotFound";
import EmailDetail from "./components/EmailDetail";

function App() {
  return (
    <div className="App">
      <h1>WELCOME TO MY APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/details/:id" element={<EmailDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default memo(App);
