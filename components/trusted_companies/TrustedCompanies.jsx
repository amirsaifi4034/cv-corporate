import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../styles/TrustCompanies.module.scss';
import Marquee from "react-fast-marquee";
import CompaniesCard from './CompaniesCard';

export const TrustedCompanies = () => {

  const companiesLogoCard = [
    {
      id: 0,
      companieImg: "/companies_logo/accenture.jpg"
    },
    {
      id: 1,
      companieImg: "/companies_logo/amazon.png"
    },
    {
      id: 2,
      companieImg: "/companies_logo/birla-soft.png"
    },
    {
      id: 3,
      companieImg: "/companies_logo/dell.png"
    },
    {
      id: 4,
      companieImg: "/companies_logo/ericsson.png"
    },
    {
      id: 5,
      companieImg: "/companies_logo/ey.jpg"
    },
    {
      id: 6,
      companieImg: "/companies_logo/facebook.jpg"
    },
    {
      id: 7,
      companieImg: "/companies_logo/flipkart.jpg"
    },
    {
      id: 8,
      companieImg: "/companies_logo/goldman.jpg"
    },
    {
      id: 9,
      companieImg: "/companies_logo/hcl.jpg"
    },
    {
      id: 10,
      companieImg: "/companies_logo/hdfc.jpg"
    },
    {
      id: 11,
      companieImg: "/companies_logo/honeywell.jpg"
    },
    {
      id: 12,
      companieImg: "/companies_logo/ibm.jpg"
    },
    {
      id: 13,
      companieImg: "/companies_logo/icici-bank.jpg"
    },
    {
      id: 14,
      companieImg: "/companies_logo/kpmg.jpg"
    },
    {
      id: 15,
      companieImg: "/companies_logo/mahindra.png"
    },
    {
      id: 16,
      companieImg: "/companies_logo/microsoft.png"
    },
    {
      id: 17,
      companieImg: "/companies_logo/muthoot.jpg"
    },
    {
      id: 18,
      companieImg: "/companies_logo/national.png"
    },
    {
      id: 19,
      companieImg: "/companies_logo/panasonic.jpg"
    },
    {
      id: 20,
      companieImg: "/companies_logo/pwc.jpg"
    },
    {
      id: 21,
      companieImg: "/companies_logo/standard-chartered.jpg"
    },
    {
      id: 22,
      companieImg: "/companies_logo/tata-power.png"
    },
    {
      id: 23,
      companieImg: "/companies_logo/tech-mahindra.jpg"
    },
    {
      id: 24,
      companieImg: "/companies_logo/ultra-tech.png"
    },
    {
      id: 25,
      companieImg: "/companies_logo/uno.png"
    },
    {
      id: 26,
      companieImg: "/companies_logo/whirlpool.jpg"
    },
    {
      id: 27,
      companieImg: "/companies_logo/wipro.jpg"
    },
    {
      id: 28,
      companieImg: "/companies_logo/yamaha.png"
    }

  ]

  return (
    <>
        <div className={styles.trustByCompany}>
        <Container>
            <Row>
                <Col sm={12}>
                  <h3 className="text-center mb-5">Trusted by Leading Companies</h3>
                  <Marquee pauseOnHover>
                    {companiesLogoCard.map(companiescard =>
                      <CompaniesCard key={companiescard.id} CompaniesCard={companiescard} />
                    )}
                  </Marquee>

                </Col>
            </Row>
        </Container>
            
        </div>
    </>
  )
}

export default TrustedCompanies