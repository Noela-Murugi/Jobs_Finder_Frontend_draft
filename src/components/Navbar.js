import "../Navbar.css";
function Navbar() {
  return (
    <nav class="navbar">
      <div class="max-width">
        <div class="logo">
          <a href="#">Job Finder!</a>
        </div>
        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#find jobs">Find jobs</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
