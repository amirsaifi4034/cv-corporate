
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import Image from "next/image";
import styles from "/styles/HeroSection.module.scss";
import HeroCard from "../../components/hero_section/HeroCard";
import { useState } from "react";
import { HeroBannerRight } from "./HeroBannerRight";
import { BannerWithFrame } from "./BannerWithFrame";


export const HeroSection = () => {

    const [show, setShow] = useState(false);

  return (
    <>
    
    <section className={`${styles.herobanner}`}>
        <Container>
            <Row className={`${styles.columnReverse} flex-row-reverse flex-lg-row`}>
                <Col sm={7}>
                    <div className={`${styles.herocontent}`}>
                        <div>
                            <h1>Helping workforce to enhance their career & enable business success</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, corrupti earum. </p>
                            <Button  onClick={() => setShow(true)} className={`${styles.buttonMain}`}>Get Started</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={5} className="position-relative">
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
                            <HeroCard herocardmain={herocard1} />
                        </Col>
                        <Col sm={4} xs={6}>
                            <HeroCard herocardmain={herocard2} />
                        </Col>
                        <Col sm={4}>
                            <HeroCard herocardmain={herocard3} />
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
                    <Form>
                        <div className={styles.formHeader}>
                            <Modal.Title className={`${styles.modalHeader} text-center mb-5`}>Talk with our experts</Modal.Title>
                        </div>
                        <Form.Group className="mb-4 position-relative" controlId="formBasicName">
                            <Form.Control required className={styles.inputCustom} type="text"  />
                            <Form.Text className={`${styles.labelAnimation} text-muted`}>
                            Full Name
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4 position-relative" controlId="formBasicNumber">
                            <Form.Control required className={styles.inputCustom} type="tel" min="10" max="10" pattern="^\d{10}$" />
                            <Form.Text className={`${styles.labelAnimation} text-muted`}>
                                Phone Number
                            </Form.Text>
                        </Form.Group>
                        <Row className="g-2">
                            <Col md>
                                <Form.Group className="mb-4 position-relative" controlId="formBasicEmail">
                                    <Form.Control required className={styles.inputCustom} type="email"  />
                                    <Form.Text className={`${styles.labelAnimation} text-muted`}>
                                        Work Email
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md>
                            <Form.Group className="mb-4 position-relative" controlId="formBasicTitle">
                                <Form.Control required className={styles.inputCustom} type="text"  />
                                <Form.Text className={`${styles.labelAnimation} text-muted`}>
                                    Job Title
                                </Form.Text>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-4 position-relative" controlId="formBasicCompany">
                            <Form.Control required className={styles.inputCustom} type="text" />
                            <Form.Text className={`${styles.labelAnimation} text-muted`}>
                                Company
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4 position-relative" controlId="formBasicEmployess">
                            <Form.Control required className={styles.inputCustom} type="text" />
                            <Form.Text className={`${styles.labelAnimation} text-muted`}>
                                Employees
                            </Form.Text>
                        </Form.Group>
                        <div className="text-center">
                        <Button name="submit" style={{borderRadius: "10px"}} type="submit" className={styles.modalButton}>
                            Submit
                        </Button>
                        </div>
                    </Form>
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
        herocard_title : "Online Universities"
    }
]

const herocard2 = [
    {
        herocard_icon : "/handshake.png",
        herocard_rank : "1349+",
        herocard_title : "Corporate partners"
    }
]

const herocard3 = [
    {
        herocard_icon : "/strategy-development.png",
        herocard_rank : "100%",
        herocard_title : "Business outcome"
    }
]
