import { Navbar, Container, Nav} from "react-bootstrap";
import Image from 'next/image';
import styles from "/styles/Header.module.scss";
import AnimatedBirds from "/components/birds/AnimatedBirds"
import { useState } from "react";

export const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <>
    <header className={styles.headerMain}>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
                    <Image src="/logo.svg" alt="Logo" width="160" height="80"></Image>
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
                <Nav className={`${styles.menuItem} ${toggle ? styles.activeMainMenu : ''} ms-auto d-none d-lg-flex`}>
                    <Nav.Link href="/" className={styles.menuLink}>Home</Nav.Link>
                    <Nav.Link href="/" className={styles.menuLink}>About us</Nav.Link>
                    <Nav.Link href="/" className={styles.menuLink}>Blog</Nav.Link>
                    <Nav.Link href="/" className={`${styles.menuLink} ${styles.menuTopUni}`}>Top University</Nav.Link>
                </Nav>           
            </Container>
        </Navbar>
    </header>
    </>
  )
}


export default Header;