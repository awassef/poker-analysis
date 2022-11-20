import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import UploadHands from "./components/UploadHands"
import "./App.css";
import {
    BrowserRouter,
  } from "react-router-dom";
  

    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <App /> }> </Route>
            <Route path="/upload/hands/" element={ <UploadHands /> } />

          </Routes>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );