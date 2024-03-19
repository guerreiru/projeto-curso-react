import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "../pages/intro";
import { Login } from "../pages/login";
import { Registration } from "../pages/registration";
import { Home } from "../pages/home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
