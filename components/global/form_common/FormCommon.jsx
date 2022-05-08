import styles from "./Form.module.scss";
import { Row, Col, Modal, Button, Form, FloatingLabel } from "react-bootstrap";


export const FormCommon = () => {
  return (
    
    <>
    <div className={styles.formMain}>
        <Form>
            <div className={styles.formHeader}>
                <Modal.Title className={`${styles.modalHeader} text-center mb-4 mb-lg-5`}>Talk with our experts</Modal.Title>
            </div>

            <Row>
                <Col>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Full Name"
                        className="mb-3 mb-lg-4 position-relative"
                    >
                        <Form.Control placeholder="Full Name" required className={styles.inputCustom} type="text"  />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Phone Number"
                        className="mb-3 mb-lg-4 position-relative"
                    >
                        <Form.Control placeholder="Phone Number" pattern="^\d{10}$" required className={styles.inputCustom} type="tel"  />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                        controlId="floatingEmail"
                        label="Work Email"
                        className="mb-3 mb-lg-4 position-relative"
                    >
                        <Form.Control placeholder="Work Email" required className={styles.inputCustom} type="email"  />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                        controlId="floatingJob"
                        label="Job Title"
                        className="mb-3 mb-lg-4 position-relative"
                    >
                        <Form.Control placeholder="Job Title" required className={styles.inputCustom} type="text"  />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="floatingCompany"
                        label="Company"
                        className="mb-3 mb-lg-4 position-relative"
                    >
                        <Form.Control placeholder=" Company" required className={styles.inputCustom} type="text"  />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="floatingEmployees"
                        label="Employees"
                        className="mb-3 mb-lg-4 position-relative"
                    >
                        <Form.Control placeholder="Employees" required className={styles.inputCustom} type="text"  />
                    </FloatingLabel>
                </Col>
            </Row>
            <div className="text-center">
                <Button name="submit" type="submit" className={styles.modalButton}>
                    Submit
                </Button>
            </div>
        </Form>
    </div>
    </>
  )
}

export default FormCommon