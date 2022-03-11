import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { memo, useEffect, useState } from "react";

import "./App.css";

import EmailList from "./components/EmailList";
import NotFound from "./components/NotFound";
import EmailDetail from "./components/EmailDetail";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
      el.remove();
      setLoading(false);
    }
  }, []);
  if (loading) {
    return null;
  }
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
