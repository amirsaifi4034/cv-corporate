
import Image from "next/image";
import styles from "/styles/HeroSection.module.scss";

export const HeroBannerRight = () => {
  return (
    <>
        <div className={`${styles.heroImg}`}>
            <div className={`${styles.dotsPettern}`}></div>
            <div className={`${styles.bgShad}`}></div>
            <Image src="/corporate.jpg" className="rounded" alt="Corporate" height="350" width="400"></Image>
        </div>
    </>
  )
}

export default HeroBannerRight