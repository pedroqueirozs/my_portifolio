import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <a target="blanck" href="https://pedroqueirozs.github.io/linkBio/">
        Contact
      </a>
    </div>
  );
}
export default NavBar;
