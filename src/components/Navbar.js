import "../Navbar.css";
function Navbar() {
  return (
    <nav class="navbar">
      <div class="logo">
        <a href="#">Job Finder!</a>
      </div>
      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <button>
            <a href="#post job">Post a job</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
