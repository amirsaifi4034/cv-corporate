
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import Image from "next/image";
import styles from "/styles/HeroSection.module.scss";
import HeroCard from "../../components/hero_section/HeroCard";
import { useState } from "react";


export const HeroSection = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    
    <section className={`${styles.herobanner}`}>
        <Container>
            <Row>
                <Col sm={7}>
                    <div className={`${styles.herocontent}`}>
                        <div>
                            <h1>Helping workforce to enhance their career & enable business success</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, corrupti earum. </p>
                            <Button onClick={handleShow} className={`${styles.buttonMain}`}>Get Started</Button>
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
    <section className={styles.heroCardIcons}>
        <Container>
            <Row>
                <Col sm={8} className="offset-sm-2">
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
                </Col>
            </Row>
        </Container>
    </section>

    <Modal show={show} onHide={handleClose} className="modalForm">
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
        <Form className={styles.leadForm}>
            <div className={styles.formHeader}>
                <Modal.Title className="text-center mb-4">Talk with our experts</Modal.Title>
            </div>
            <Form.Group className="mb-4 position-relative" controlId="formBasicName">
                <Form.Control required className={styles.inputCustom} type="text"  />
                <Form.Text className={`${styles.labelAnimation} text-muted`}>
                Full Name
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 position-relative" controlId="formBasicEmail">
                <Form.Control required className={styles.inputCustom} type="email"  />
                <Form.Text className={`${styles.labelAnimation} text-muted`}>
                    Work Email
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 position-relative" controlId="formBasicTitle">
                <Form.Control required className={styles.inputCustom} type="text"  />
                <Form.Text className={`${styles.labelAnimation} text-muted`}>
                    Job Title
                </Form.Text>
            </Form.Group>
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
            <Form.Group className="mb-4 position-relative" controlId="formBasicNumber">
                <Form.Control required className={styles.inputCustom} type="tel" min="10" max="10" pattern="^\d{10}$" />
                <Form.Text className={`${styles.labelAnimation} text-muted`}>
                    Phone Number
                </Form.Text>
            </Form.Group>
            <div className="text-center">
            <Button name="submit" style={{borderRadius: "10px"}} type="submit">
                Submit
            </Button>
            </div>
        </Form>
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
