import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CustomerDashboard from "./components/CustomerDashboard";
import AdminDashboard from "./components/AdminDashboard";
import SignUp from "./components/SignUp";
import About from "./components/About";
import AppNavbar from "./components/layout/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <MemoryRouter>
          <AppNavbar title={"Capstone Project"} />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route exact path="/about" Component={About} />
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/customer" element={<CustomerDashboard />}></Route>
            <Route path="/admin" element={<AdminDashboard />}></Route>
          </Routes>
        </MemoryRouter>
      </Container>
    </div>
  );
}

export default App;
