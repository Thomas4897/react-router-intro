import { Outlet, Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="App">
      <h3>NavBar</h3>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
