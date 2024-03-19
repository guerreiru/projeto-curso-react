import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "../pages/intro";
import { Login } from "../pages/login";
import { Registration } from "../pages/registration";
import { Home } from "../pages/home";
import { Start } from "../pages/start";
import { Onboarding } from "../pages/onboarding";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="login" element={<Login />} />
        <Route path="start" element={<Start />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="registration" element={<Registration />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
