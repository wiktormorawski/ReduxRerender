import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { memo } from "react";

import "./App.css";

import EmailList from "./components/EmailList";
import NotFound from "./components/NotFound";
import withMemo from "./utils/withMemo";
import EmailDetailListRenderer from "./components/EmailDetailListRenderer";

function App() {
  return (
    <div className="App">
      <h1>WELCOME TO MY APP</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EmailDetailListRenderer />} />
          <Route path="/details/:id" element={<EmailDetailListRenderer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withMemo(App, []);
