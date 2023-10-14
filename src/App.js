import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Dashboard from "./components/dashboard/Dashboard";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Buttons from "./components/buttons/Buttons";
import Cards from "./components/buttons/Cards";
import Color from "./components/utilities/Color";
import Border from "./components/utilities/Border";
import Animation from "./components/utilities/Animation";
import Other from "./components/utilities/Other";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import Error404 from "./components/Error404";
import BlankPage from "./components/BlankPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/cards" element={<Cards />} />
            <Route path="/utilities/color" element={<Color />} />
            <Route path="/utilities/border" element={<Border />} />
            <Route path="/utilities/animation" element={<Animation />} />
            <Route path="/utilities/other" element={<Other />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/blankpage" element={<BlankPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
