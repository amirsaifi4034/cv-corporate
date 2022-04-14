import {Container, Row, Col, Nav} from 'react-bootstrap';
import Image from 'next/image';
import styles from '../../../styles/Footer.module.scss';
import {BsFacebook, BsTwitter, BsLinkedin, BsYoutube, BsInstagram} from 'react-icons/bs';
import {HiPhone} from "react-icons/hi";
import Link from 'next/link';
import {FaHeart} from "react-icons/fa"

export const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer} text-white`}>
        <Container>
          <Row>
            <Col sm={3}>
              <div className={styles.footerItem}>
                <Image src="/logo.svg" width="120px" height="60px" alt="Logo"></Image>
                <div className="mb-3">
                  <h6 className='mb-3'><small>Contact us : </small></h6>
                  <small>Info@collegevidya.com</small>
                  <div className="d-flex align-items-center mt-1">
                    <HiPhone />
                    <Link href="tel: 18004205757"><a className='ms-1'><small>1800-420-5757</small> </a></Link>
                  </div>
                </div>
                <div className={styles.social_icons}>
                  <Nav>
                    <Nav.Link href="/" className='text-white p-2'><BsFacebook /></Nav.Link>
                    <Nav.Link href="/" className='text-white p-2'><BsTwitter /></Nav.Link>
                    <Nav.Link href="/" className='text-white p-2'><BsLinkedin /></Nav.Link>
                    <Nav.Link href="/" className='text-white p-2'><BsYoutube /></Nav.Link>
                    <Nav.Link href="/" className='text-white p-2'><BsInstagram /></Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="">
                <h5 className="pb-2">Useful link</h5>
                  <Nav.Link href="/" className='text-white p-2'> <small>About us</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Blog</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Contact us</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Our Trust</small> </Nav.Link>
              </div>
            </Col>
            <Col sm={3}>
              <div className="">
                <h5 className="pb-2">Useful link</h5>
                  <Nav.Link href="/" className='text-white p-2'> <small>About us</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Blog</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Contact us</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Our Trust</small> </Nav.Link>
              </div>
            </Col>
            <Col sm={3}>
              <div className="">
                <h5 className="pb-2">Useful link</h5>
                  <Nav.Link href="/" className='text-white p-2'> <small>About us</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Blog</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Contact us</small> </Nav.Link>
                  <Nav.Link href="/" className='text-white p-2'> <small>Our Trust</small> </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="border-top text-center mt-5">
          <Row>
            <Col sm={12}>
              <small className="mt-4 mb-4 d-block" style={{fontSize:"12px"}}>The intend of College Vidya is to provide unbiased precise information & comparative guidance on Universities and its Programs of Study to the Admission Aspirants. The contents of the Collegevidya Site, such as Texts, Graphics, Images, Blogs, Videos, University Logos, and other materials contained on Collegevidya Site (collectively, “Content”) are for information purpose only. The content is not intended to be a substitute for in any form on offerings of its Academia Partner. Infringing on intellectual property or associated rights is not intended or deliberately acted upon. The information provided by College Vidya on www.collegevidya.com or any of its mobile or any other applications is for general information purposes only. All information on the site and our mobile application is provided in good faith with accuracy and to the best of our knowledge, however, we make nor representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, completeness of any information on the Site or our mobile application. Collegevidya & its fraternity will not be liable for any errors or omissions and damages or losses resultant if any from the usage of its information.</small>
              <p>© 2022 CollegeVidya, Inc. All Rights Reserved.</p>
              <small>Build with <FaHeart style={{color:"red"}} /> Made in India.</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer