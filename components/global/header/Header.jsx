import { Navbar, Container, Nav} from "react-bootstrap";
import Image from 'next/image';
import styles from "/styles/Header.module.scss";
import AnimatedBirds from "/components/birds/AnimatedBirds";
import { useState } from "react";
import {FaUniversity} from "react-icons/fa"

export const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <>
    <header className={styles.headerMain}>
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
                    <Image src="/logo.svg" alt="Logo" width="130" height="65"></Image>
                    <span className={styles.tagline}>
                        <small>For Business (Corporates)</small>
                        <AnimatedBirds />
                    </span>
                </Navbar.Brand>
                <button type="button" onClick={() => setToggle(!toggle)} className={`${styles.toggleButton} ${toggle ? styles.activeToggle : ''} d-lg-none d-block`}>
                    <span className={`${styles.iconBar}`}></span>
                    <span className={`${styles.iconBar}`}></span>
                    <span className={`${styles.iconBar}`}></span>
                </button>
                <Nav className={`${styles.menuItem} ${toggle ? styles.activeMainMenu : ''} ms-auto d-none d-lg-flex align-items-center`}>
                    <Nav.Link href="/" className={styles.menuLink}>Home</Nav.Link>
                    <Nav.Link href="/" className={styles.menuLink}>About us</Nav.Link>
                    <Nav.Link href="/" className={styles.menuLink}>Blog</Nav.Link>
                    <Nav.Link href="/" className={`${styles.menuLink} ${styles.menuTopUni}`} style={{marginLeft: "5px"}}> <span style={{paddingRight: "3px"}}> <FaUniversity /> </span> Top University</Nav.Link>
                </Nav>           
            </Container>
        </Navbar>
    </header>
    </>
  )
}


export default Header;