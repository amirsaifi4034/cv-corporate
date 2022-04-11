import {Container, Row, Col} from 'react-bootstrap';
import styles from '../styles/TopUniversity.module.scss';
import Image from 'next/image';

export const TopUniversity = () => {
  return (
    <>
    <div className={`${styles.topUniversity}`}>
        <Container>
            <Row>
                <Col sm={12}>
                    <h3 className='text-center mb-5'>Access the best programs from the India's Top University</h3>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/manipal-university.jpg" height="60px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/nmims-University.png" height="70px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/upes.png" height="80px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/lovely-professional.png" height="70px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/Jain-University.jpg" height="70px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/manav-rachna.jpg" height="50px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/CHandigarh-University.png" height="60px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/04Sv-uNiversity.png" height="70px" width="120px" alt="Logo"></Image>
                        </div>
                        <div className={`${styles.topUniversityLogo}`}>
                            <Image src="/lingayash.png" height="70px" width="120px" alt="Logo"></Image>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}


export default TopUniversity