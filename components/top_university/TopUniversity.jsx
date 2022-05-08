import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../styles/TopUniversity.module.scss';
import Image from 'next/image';
import UniversityLogo from './UniversityLogo';

export const TopUniversity = () => {

    const UniversityLogoCard = [
        {
            id: 0,
            logoImg: "/university_logo/01nmims-University.png"
        },
        {
            id: 1,
            logoImg: "/university_logo/02CHandigarh-University.png"
        },
        {
            id: 2,
            logoImg: "/university_logo/03jecrc.png"
        },
        {
            id: 3,
            logoImg: "/university_logo/04Sv-uNiversity.png"
        },
        {
            id: 4,
            logoImg: "/university_logo/Jain-University.jpg"
        },
        {
            id: 5,
            logoImg: "/university_logo/Acharya-Nagarjuna.png"
        },
        {
            id: 6,
            logoImg: "/university_logo/Amity-University.png"
        },
        {
            id: 7,
            logoImg: "/university_logo/andhra-university.png"
        },
        {
            id: 8,
            logoImg: "/university_logo/bits-pilani.png"
        },
        {
            id: 9,
            logoImg: "/university_logo/calorx-teacger.png"
        },
        {
            id: 10,
            logoImg: "/university_logo/dayalbaghuniversity.png"
        },
        {
            id: 11,
            logoImg: "/university_logo/Delhi-technology-university.png"
        },
        {
            id: 12,
            logoImg: "/university_logo/Devi-Ahilya.png"
        },
        {
            id: 13,
            logoImg: "/university_logo/DR-cv-Raman-University.png"
        },
        {
            id: 14,
            logoImg: "/university_logo/guru-jambheshwar.png"
        },
        {
            id: 15,
            logoImg: "/university_logo/ICFAI.png"
        },
        {
            id: 16,
            logoImg: "/university_logo/ignou.png"
        },
        {
            id: 17,
            logoImg: "/university_logo/imt.png"
        },
        {
            id: 18,
            logoImg: "/university_logo/integral-University.png"
        },
        {
            id: 19,
            logoImg: "/university_logo/jagannath.png"
        },
        {
            id: 20,
            logoImg: "/university_logo/Jain-University.jpg"
        },
        {
            id: 21,
            logoImg: "/university_logo/jain-vishwabharati.png"
        },
        {
            id: 22,
            logoImg: "/university_logo/jamia-millia-university.png"
        },
        {
            id: 23,
            logoImg: "/university_logo/jnu.png"
        },
        {
            id: 24,
            logoImg: "/university_logo/kalinga-University.png"
        },
        {
            id: 25,
            logoImg: "/university_logo/Karnataka-State-Open-Univesity.png"
        },
        {
            id: 26,
            logoImg: "/university_logo/kuvempu-University.png"
        },
        {
            id: 27,
            logoImg: "/university_logo/lingayash.png"
        },
        {
            id: 28,
            logoImg: "/university_logo/lovely-professional.png"
        },
        {
            id: 29,
            logoImg: "/university_logo/maharishi-international-university.png"
        },
        {
            id: 30,
            logoImg: "/university_logo/mangalora-University.png"
        },
        {
            id: 31,
            logoImg: "/university_logo/manipal-university.jpg"
        },
        {
            id: 32,
            logoImg: "/university_logo/maulana -azad-national-University.png"
        },
        {
            id: 33,
            logoImg: "/university_logo/patna-University.png"
        },
        {
            id: 34,
            logoImg: "/university_logo/pondicherry-university.png"
        },
        {
            id: 35,
            logoImg: "/university_logo/Rajiv-gandhi-university.png"
        },
        {
            id: 36,
            logoImg: "/university_logo/Shivaji-University.png"
        },
        {
            id: 37,
            logoImg: "/university_logo/Sikkim-Manipal-University.png"
        },
        {
            id: 38,
            logoImg: "/university_logo/Suresh-gyan-vihar-university.png"
        },
        {
            id: 39,
            logoImg: "/university_logo/swami-vivekanand.png"
        },
        {
            id: 40,
            logoImg: "/university_logo/symbiosis.png"
        },
        {
            id: 41,
            logoImg: "/university_logo/tripura-university.png"
        },
        {
            id: 42,
            logoImg: "/university_logo/University-of-delhi.png"
        },
        {
            id: 43,
            logoImg: "/university_logo/University-of-kashmir.png"
        },
        {
            id: 44,
            logoImg: "/university_logo/University-of-Kerala.png"
        },
        {
            id: 45,
            logoImg: "/university_logo/University-of-mumbai.png"
        },
        {
            id: 46,
            logoImg: "/university_logo/University-of-north-bengal.png"
        },
        {
            id: 47,
            logoImg: "/university_logo/upes.png"
        }

    ]

  return (
    <>
    <div className={`${styles.topUniversity}`}>
        <Container>
            <Row>
                <Col sm={12}>
                    <h3 className='text-center mb-5'>Access the best programs from the India's Top University</h3>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {UniversityLogoCard.map(universityLogo =>
                            <UniversityLogo key={universityLogo.id} UniversityLogo={universityLogo} />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}


export default TopUniversity