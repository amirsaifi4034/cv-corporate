
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "/styles/HeroSection.module.scss";
import HeroCard from "../../components/hero_section/HeroCard"



export const HeroSection = () => {
  return (
    <>
    
    <section className={`${styles.herobanner}`}>
        <Container>
            <Row>
                <Col sm={7}>
                    <div className={`${styles.herocontent}`}>
                        <div>
                            <h1>Helping workforce to enhance their career & enable business success</h1>
                            <p>Lead Form- Full name, Work email, Job Title, Company, Employees, Phone Number</p>
                            <a href="#" className={`${styles.buttonMain}`}>Get Started</a>
                        </div>
                    </div>
                </Col>
                <Col sm={5}>
                    <div className={`${styles.heroImg}`}>
                        <div className={`${styles.dotsPettern}`}></div>
                        <div className={`${styles.bgShad}`}></div>
                        <Image src="/corporate.jpg" className="rounded" alt="Corporate" height="400" width="450"></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <Container>
        <Row>
            <Col sm={4}>
                <HeroCard herocardmain={herocard1} />
            </Col>
            <Col sm={4}>
                <HeroCard herocardmain={herocard2} />
            </Col>
            <Col sm={4}>
                <HeroCard herocardmain={herocard3} />
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default HeroSection

const herocard1 = [
    {
        herocard_icon : "/online-university.gif",
        herocard_rank : "75+",
        herocard_title : "Online Universities"
    }
]

const herocard2 = [
    {
        herocard_icon : "/partners.gif",
        herocard_rank : "1349+",
        herocard_title : "Corporate partners"
    }
]

const herocard3 = [
    {
        herocard_icon : "/outcome.gif",
        herocard_rank : "100%",
        herocard_title : "Business outcome"
    }
]
