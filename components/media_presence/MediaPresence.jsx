
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../styles/MediaPresence.module.scss';
import Image from 'next/image';

export const MediaPresence = () => {
  return (
    <div className={styles.mediaPresence}>
        <Container>
            <Row>
                <Col sm={12}>
                    <h3 className="text-center mb-5">Media Presence</h3>
                </Col>
                <Col sm={8} className="offset-sm-2">
                    <Row>
                        <Col sm={4}>
                            <div className={styles.mediaPresenceCard}>
                                <div className={styles.mediaImg}>
                                    <Image src="/forbes-logo.png" width="85px" height="20px" alt="Meida"></Image>
                                </div>
                                <div className={styles.mediaCardBody}>
                                    <p>College Vidya is enabling information access to students</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={`${styles.mediaPresenceCard} ${styles.mediaCardActive}`}>
                                <div className={styles.mediaImg}>
                                    <Image src="/hindustan-times.png" width="85px" height="20px" alt="Meida"></Image>
                                </div>
                                <div className={styles.mediaCardBody}>
                                    <p>College Vidya becomes the only dedicated portal for distance & online education</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={styles.mediaPresenceCard}>
                                <div className={styles.mediaImg}>
                                    <Image src="/ani-press.png" width="85px" height="20px" alt="Meida"></Image>
                                </div>
                                <div className={styles.mediaCardBody}>
                                    <p>College Vidya launches Compare Feature, bringing transparency in Online & Distance Learning  </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={styles.mediaPresenceCard}>
                                <div className={styles.mediaImg}>
                                    <Image src="/webindia-press.png" width="85px" height="20px" alt="Meida"></Image>
                                </div>
                                <div className={styles.mediaCardBody}>
                                    <p>College Vidya becomes the only dedicated portal for distance & online education</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={`${styles.mediaPresenceCard} ${styles.mediaCardActive}`}>
                                <div className={styles.mediaImg}>
                                    <Image src="/yahoo-press.png" width="85px" height="20px" alt="Meida"></Image>
                                </div>
                                <div className={styles.mediaCardBody}>
                                    <p>College Vidya becomes the only dedicated portal for distance & online education</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={styles.mediaPresenceCard}>
                                <div className={styles.mediaImg}>
                                    <Image src="/lokmattimes-press.png" width="85px" height="20px" alt="Meida"></Image>
                                </div>
                                <div className={styles.mediaCardBody}>
                                    <p>College Vidya becomes the only dedicated portal for distance & online education</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MediaPresence