import { Navbar, Container} from "react-bootstrap";
import Image from 'next/image';
import AnimatedBirds from '/components/birds/AnimatedBirds';
import styles from "/styles/Header.module.scss";

export const Header = () => {
  return (
    <>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
                    <Image src="/logo.svg" alt="Logo" width="160" height="80"></Image>
                    <span className={styles.header}>
                        <small>For Business (Corporates)</small>
                        <AnimatedBirds />
                    </span>
                </Navbar.Brand>               
            </Container>
        </Navbar>
    </>
  )
}


export default Header;