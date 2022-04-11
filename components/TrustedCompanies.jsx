import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import styles from '../styles/TrustCompanies.module.scss';

export const TrustedCompanies = () => {
  return (
    <>
        <div className={`${styles.trustByCompany}`}>
        <Container>
            <Row>
                <Col sm={12}>
                    <h3 className="text-center mb-5">Trusted by Leading Companies</h3>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{delay: 2500, disableOnInteraction: false}}
                        loop={true}
                        slidesPerView={5}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <Image src="/manipal-university.jpg" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nmims-University.png" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/upes.png" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/lovely-professional.png" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Jain-University.jpg" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/manav-rachna.jpg" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/CHandigarh-University.png" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/04Sv-uNiversity.png" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/lingayash.png" height="60px" width="120px" alt="Logo"></Image>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </Container>
            
        </div>
    </>
  )
}

export default TrustedCompanies