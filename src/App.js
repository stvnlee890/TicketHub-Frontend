import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Login from "./components/user/Login"
import Signup from "./components/user/Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
