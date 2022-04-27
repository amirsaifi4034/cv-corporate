import Image from "next/image";
import styles from "../../../styles/TalkExperts.module.scss";


export const ExpertsCard = (props) => {
  return (
    <>
      <div className={styles.expertsMain}>
        <Image src={props.expertPics.expertImg} width="230px" height="230px" alt="Expert"></Image>
      </div>
    </>
  )
}

export default ExpertsCard