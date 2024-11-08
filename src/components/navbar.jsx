import { useState, useEffect } from "react";
import Logo from "../components/bitly_logo.svg";
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let now2 = Date.now()
    const handleScroll = () => {
       setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bars = document.getElementById("fa-bars");
  const xmark = document.getElementById("fa-xmark");
  const menu = document.getElementById("menu-container");

  function shownav() {
    bars.classList.add("hide");
    xmark.style.display = "block";
    menu.style.display = "block";
  }
  function hidenav() {

    if (xmark) {
      xmark.style.display = "none";
    }
    if (bars) {
      bars.classList.remove("hide");
    }
    
    if (menu) {
       menu.style.display = "none";
    }
   
  }

  useEffect(() => {
    let now = Date.now();

    function handleResize() {
      if (window.innerWidth > 768) {
        const newNow = Date.now();
        if (newNow - now > 1000) {
          // throttling to once per second
          hidenav();
          now = newNow;
          console.log("function called");
        }
      }
    }

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="nav-outer">
        <div className={`nav-container ${scrolled ? "scroll" : ""}`}>
          <img src={Logo} alt="" />

          <div className="links-container">
            <p>Home</p>
            <p>dashboard</p>
            <p>shortner</p>
            <p>blog</p>
            <p>tutotial</p>
            <p>feedback</p>
            <a href="#">Login</a>
          </div>
          <i class="fa-solid fa-bars" id="fa-bars" onClick={shownav}></i>
          <i class="fa-solid fa-xmark" id="fa-xmark" onClick={hidenav}></i>
        </div>

        <div className="menu-container" id="menu-container">
          <div className="links-container-mo">
            <p>Home</p>
            <hr />
            <p>dashboard</p>

            <hr />
            <p>shortner</p>
            <hr />
            <p>blog</p>
            <hr />
            <p>tutotial</p>
            <hr />
            <p>feedback</p>
            <hr />
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
