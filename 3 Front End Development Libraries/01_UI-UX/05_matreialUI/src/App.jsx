import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WeatherApp from "./pages/WeatherApp";
import Skeleton from "./pages/Skeleton";


const navLinks = [
  {title: "Home", path: "/"},
  {title: "Login", path: "/login"},
  {title: "Register", path: "/register"},
  {title: "Weather App", path: "/weather-app"},
  {title: "Skeleton", path: "/skeleton"},
]

function App() {
  return (
    <>
      <NavBar navLinks={navLinks} />
      <Container maxWidth="md" sx={{mt: 10}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/weather-app" element={<WeatherApp />} />
          <Route path="/skeleton" element={<Skeleton />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;