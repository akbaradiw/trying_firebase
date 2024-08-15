import { useState, useEffect } from "react";
import "./App.css";
import Protected from "./Components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
