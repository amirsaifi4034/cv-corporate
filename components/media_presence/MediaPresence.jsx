
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../styles/MediaPresence.module.scss';
import MediaPresenceCard from './MediaPresenceCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

export const MediaPresence = () => {

    const mediaPresenceCards = [
        {
            id: 0,
            mediaLogo: "/media_img/Hindustan.png",
            mediaContent: "I wanted to create a platform that is free and",
            mediaImg: "/media_img/media1.png"
        },
        {
            id: 1,
            mediaLogo: "/media_img/forbesindia.png",
            mediaContent: "College Vidya is enabling information access to",
            mediaImg: "/media_img/media2.jpg"
        },
        {
            id: 2,
            mediaLogo: "/media_img/ani.png",
            mediaContent: "College Vidya’s goal is to bring transparency to the",
            mediaImg: "/media_img/media3.png"
        },
        {
            id: 3,
            mediaLogo: "/media_img/webindia.png",
            mediaContent: "Compare Feature’ is an initiative towards helping",
            mediaImg: "/media_img/media4.png"
        },
        {
            id: 4,
            mediaLogo: "/media_img/lokmat.jpg",
            mediaContent: "College Vidya’s Compare feature removes mediators",
            mediaImg: "/media_img/media5.png"
        },
        {
            id: 5,
            mediaLogo: "/media_img/ly.png",
            mediaContent: "College Vidya’s Compare is a one-stop solution for",
            mediaImg: "/media_img/media6.png"
        },
        {
            id: 6,
            mediaLogo: "/media_img/yahoo.png",
            mediaContent: "Get the real-time data of online and distance",
            mediaImg: "/media_img/media7.png"
        },
        {
            id: 7,
            mediaLogo: "/media_img/financialexpress.svg",
            mediaContent: "College Vidya's recent campaign prioritised the",
            mediaImg: "/media_img/media8.png"
        },
        {
            id: 8,
            mediaLogo: "/media_img/edugraph-logo.svg",
            mediaContent: "College Vidya via its recent campaign",
            mediaImg: "/media_img/media9.png"
        },
        {
            id: 9,
            mediaLogo: "/media_img/et-brandequity.png",
            mediaContent: "College Vidya aims to solve the career-related problems",
            mediaImg: "/media_img/media10.png"
        },
        {
            id: 10,
            mediaLogo: "/media_img/the-hindu.png",
            mediaContent: "College Vidya has launched a brand ifilm to encourage",
            mediaImg: "/media_img/media11.png"
        }
    ]
    const breakpoints = {
        
        '992': {
            slidesPerView: 4
        },
        '768': {
            slidesPerView: 3
        },
        '576': {
            slidesPerView: 2
        }
    }
  return (
    <div className={styles.mediaPresence}>
        <Container>
            <Row className={`${styles.mediaRow}`}>
                <Col sm={12}>
                    <h3 className="text-center mb-5">Voice of our Leaders & Media Presence</h3>
                    <Swiper 
                        breakpoints={breakpoints}
                        navigation={true} 
                        slidesPerView={2}
                        modules={[Navigation]}
                        spaceBetween={20} 
                        className="mediaPresence_slider">
                        {mediaPresenceCards.map(mediaCard =>
                            <SwiperSlide>
                                <MediaPresenceCard key={mediaCard.id} mediaPresenceCard={mediaCard} />
                            </SwiperSlide>
                        )}  
                    </Swiper>
                </Col>                    
            </Row>
        </Container>
    </div>
  )
}

export default MediaPresence