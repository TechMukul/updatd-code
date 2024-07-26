import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUsers,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss"; // Adjust path as per your file structure
import { useRouter } from "next/router";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsFixed(scrolled);
      setBackgroundColor(scrolled ? "#006739" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName"); // Remove the user's name from local storage
    localStorage.removeItem("userCoins"); // Remove the user's coins from local storage
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <header
        className={`${styles.navbar} ${isFixed ? styles.fixed : ""}`}
        style={{ backgroundColor }}
      >
        <Navbar expand="lg" bg="transparent">
          <Container>
            <Link href="/" passHref>
              {/* <Navbar.Brand>
                <img src="/img/logo.png" alt="logo" className={styles.logo} />
              </Navbar.Brand> */}
            </Link>
            <Navbar.Toggle
              aria-controls="navbarSupportedContent"
              onClick={handleToggle}
            >
              <span className={styles.menu_icon}>
                <FontAwesomeIcon
                  icon={faBars}
                  height={40}
                  width={40}
                  color="white"
                />
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="navbarSupportedContent"
              className={isOpen ? styles.show : ""}
            >
              <Nav className={styles.nav}>
                <Link href="/home" passHref className={styles.links}>
                  <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
                </Link>
                <Link href="/Tree" passHref className={styles.links}>
                  <FontAwesomeIcon icon={faUsers} className={styles.icon} /> All
                  Users
                </Link>
                <Link href="/Message" passHref className={styles.links}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{" "}
                  Messages
                </Link>
                <Link href="/contact" passHref className={styles.links}>
                  <FontAwesomeIcon icon={faPhone} className={styles.icon} />{" "}
                  Contact
                </Link>
                <Nav className={styles.links} >
                  <Button
                    variant="outline-light"
                    onClick={handleLogout}
                    // className={styles.links}
                    style={{ color: "white", display: "flex" }}
                  >
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className={styles.icon}
                      color="white"
                    />
                    Logout
                  </Button>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
