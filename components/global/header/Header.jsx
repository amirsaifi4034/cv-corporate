import { Navbar, Container, Nav} from "react-bootstrap";
import Image from 'next/image';
import styles from "/styles/Header.module.scss";
import AnimatedBirds from "/components/birds/AnimatedBirds"

export const Header = () => {
  return (
    <>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
                    <Image src="/logo.svg" alt="Logo" width="160" height="80"></Image>
                    <span className={styles.tagline}>
                        <small>For Business (Corporates)</small>
                        <AnimatedBirds />
                    </span>
                </Navbar.Brand>
                <Nav className={`${styles.menuItem} ms-auto`}>
                    <Nav.Link href="/" className={styles.menuLink}>Home</Nav.Link>
                    <Nav.Link href="/" className={styles.menuLink}>About us</Nav.Link>
                    <Nav.Link href="/" className={styles.menuLink}>Blog</Nav.Link>
                    <Nav.Link href="/" className={`${styles.menuLink} ${styles.menuTopUni}`}>Top University</Nav.Link>
                </Nav>           
            </Container>
        </Navbar>
    </>
  )
}


export default Header;