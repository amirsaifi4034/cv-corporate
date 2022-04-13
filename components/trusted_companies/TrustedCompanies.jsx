import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import styles from '../../styles/TrustCompanies.module.scss';

export const TrustedCompanies = () => {
  return (
    <>
        <div className={styles.trustByCompany}>
        <Container>
            <Row>
                <Col sm={12}>
                  <h3 className="text-center mb-5">Trusted by Leading Companies</h3>
                </Col>
            </Row>
        </Container>
            
        </div>
    </>
  )
}

export default TrustedCompanies