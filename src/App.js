import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Form from "./views/Form";

export default function App() {
  return (
    <div>
      <h1>react-keep-alive</h1>
      <BrowserRouter>
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
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
