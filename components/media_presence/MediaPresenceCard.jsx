import {Col} from "react-bootstrap";
import Link from "next/link";
import styles from "../../styles/MediaPresence.module.scss";
import Image from "next/image";


export const MediaPresenceCard = (props) => {
  return (
    <>
        
        <Col sm={3}>
            <div className={`${styles.mediaPresenceCard} rounded`}>
                <div className={`${styles.mediaImg} position-relative rounded`}>
                    <Image src={props.mediaPresenceCard.mediaLogo} layout="fill" alt="Media"></Image>
                </div>
                <div className={styles.mediaCardBody}>
                    <p>{props.mediaPresenceCard.mediaContent}</p>
                </div>
                <div className="position-relative mb-2">
                    <Image src={props.mediaPresenceCard.mediaImg} className="rounded" width="250px" height="150px" alt="Media"></Image>
                </div>
                <Link href="/"><a className={styles.readmoreText}>article full article </a></Link>
            </div>
        </Col>

    </>
  )
}

export default MediaPresenceCard