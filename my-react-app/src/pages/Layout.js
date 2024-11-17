import { Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./styles/App.css";

const Layout = () => {
  const navbarRef = useRef(null);  // Ref to access the navbar
  const [comp_height, setComp_height] = useState(0);

  // Function to update the height of the navbar
  const updateNavbarHeight = () => {
    if (navbarRef.current) {
      setComp_height(navbarRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Set the height when the component mounts
    updateNavbarHeight();

    // Add event listener to update navbar height on window resize
    window.addEventListener("resize", updateNavbarHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="container">
          <ul className="navbar_ul" ref={navbarRef}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Divyadesangal">108 divya desangal</Link>
            </li>
            <li>
              <Link to="/Ahzvargal">Ahzvargal</Link>
            </li>
            <li>
              <Link to="/Bhagavatgita">Bhagavatgita</Link>
            </li>
            <li>
              <Link to="/Dasavatharam">Dasavatharam</Link>
            </li>
            <li>
              <Link to="/Songs">Songs</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="main-content"
        style={{ marginTop: `${comp_height}px` }}  // Use updated comp_height
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
