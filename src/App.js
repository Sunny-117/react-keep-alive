import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Form from "./views/Form";
import { KeepAlive, keepAliveTransfer } from "./core";

const AliveHome = keepAliveTransfer(Home, "home");
const AliveForm = keepAliveTransfer(Form, "form");

export default function App() {
  return (
    <div>
      <h1>react-keep-alive</h1>
      <BrowserRouter>
        <KeepAlive>
          <div>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/form"}>form</Link>
              </li>
            </ul>
            <div>
              <Routes>
                <Route path="/" element={<AliveHome />}></Route>
                <Route path="/form" element={<AliveForm />}></Route>
              </Routes>
            </div>
          </div>
        </KeepAlive>
      </BrowserRouter>
    </div>
  );
}
