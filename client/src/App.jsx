import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

export default function app() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
