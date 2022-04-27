
import {Button} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";
import styles from "../../../styles/TalkExperts.module.scss";
import ExpertsCard from "./ExpertsCard";

export const TalkExperts = () => {

  const expertImages = [
    {
      id: 0,
      expertImg: '/expert1.jpg'
    },
    {
      id: 1,
      expertImg: '/expert2.jpg'
    },
    {
      id: 2,
      expertImg: '/expert3.jpg'
    },
    {
      id: 3,
      expertImg: '/expert4.jpg'
    },
    {
      id: 4,
      expertImg: '/expert6.jpg'
    },
    {
      id: 5,
      expertImg: '/expert5.jpg'
    }
  ]

  return (
    <>
      <section className="py-sm-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <div className={styles.TalkExpertsText}>
                <h2 className="m-0 text-dark">Talk to our Experts</h2>
                <h2>1800-420-5757</h2>
                <p>Got a question? call us!</p>
                <p>We are here for you round the clock with our assistance for your driving career!</p>
                <Button type="button" className={styles.expertButton} >Talk With Experts</Button>
              </div>
            </Col>
            <Col md={5}>
            <div className={styles.expertsMain}>
              {expertImages.map(expertBox =>
                <ExpertsCard key={expertBox.id} expertPics={expertBox} />  
              )}
            </div>
            </Col>
          </Row>
        </Container>
      </section>  
    </>
  )
}

export default TalkExperts