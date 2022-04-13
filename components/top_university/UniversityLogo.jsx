import Image from "next/image";
import styles from "../../styles/UniversityLogo.module.scss";


export const UniversityLogo = (props) => {
  return (
    <>
    
        <div className={styles.topUniversityLogo}>
            <Image src={props.UniversityLogo.logoImg} height="50px" width="100px" alt="Logo"></Image>
        </div>
    
    </>
  )
}

export default UniversityLogo