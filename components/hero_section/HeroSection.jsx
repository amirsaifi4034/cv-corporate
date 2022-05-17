
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "/styles/HeroSection.module.scss";
import HeroCard from "../../components/hero_section/HeroCard";
import { useState } from "react";
import { HeroBannerRight } from "./HeroBannerRight";
import FormCommon from "../global/form_common/FormCommon";


export const HeroSection = () => {

    const [show, setShow] = useState(false);

  return (
    <>
    
    <section className={`${styles.herobanner}`}>
        <Container>
            <Row className={`${styles.columnReverse} flex-row-reverse flex-lg-row position-relative`}>
                <Col sm={7}>
                    <div className={`${styles.herocontent}`}>
                        <div>
                            <h1>Helping workforce to enhance their career and enable <span className="text-primary">business success</span></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, corrupti earum</p>
                            <Button  onClick={() => setShow(true)} className={`${styles.buttonMain}`}>Get Started</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={5} className="position-relative">
                    {/* <div className={styles.homeForm}>
                        <FormCommon />
                    </div> */}
                    <HeroBannerRight />
                </Col>
            </Row>
        </Container>
    </section>
    <section className={styles.heroCardIcons}>
        <Container>
            <Row>
                <Col lg={`${10} offset-lg-1`}>
                    <Row className={styles.heroIconsRow}>
                        <Col sm={4} xs={6}>
                            <HeroCard herocardmain={herocard1} style={{background: "red"}} />
                        </Col>
                        <Col sm={4} xs={6}>
                            <HeroCard herocardmain={herocard2} style={{background: "red"}} />
                        </Col>
                        <Col sm={4}>
                            <HeroCard herocardmain={herocard3} style={{background: "red"}} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>

    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-xl"
        aria-labelledby="example-custom-modal-styling-title"
        className="modalForm"
    >
        <Modal.Body className="p-0">
            <div className="d-flex">
                <div className={`${styles.popFormImg} position-relative`}>
                    <Image src="/modal1.png" layout="fill" alt="Modal Pic"></Image>
                </div>
                <div className={styles.leadForm}>
                    <Modal.Header style={{marginRight: "-15px"}} className="border-0 p-0 mt-3" closeButton></Modal.Header>
                    <FormCommon />
                </div>
            </div>
        </Modal.Body>
    </Modal>

    </>
  )
}

export default HeroSection

const herocard1 = [
    {
        herocard_icon : "/scholarship.png",
        herocard_rank : "75+",
        herocard_title : "Online Universities",
        extra_class: styles.hero1_class
    }
]

const herocard2 = [
    {
        herocard_icon : "/handshake.png",
        herocard_rank : "1349+",
        herocard_title : "Corporate partners",
        extra_class: styles.hero2_class
    }
]

const herocard3 = [
    {
        herocard_icon : "/strategy-development.png",
        herocard_rank : "100%",
        herocard_title : "Business outcome",
        extra_class: styles.hero3_class
    }
]
