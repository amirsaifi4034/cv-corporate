
import Image from "next/image";
import styles from "/styles/HeroSection.module.scss";

export const HeroBannerRight = () => {
  return (
    <>
        <div className={`${styles.heroImg}`}>
            <Image src="/bannerHome.png" className="rounded" alt="Corporate" height="470" width="225"></Image>
        </div>
    </>
  )
}

export default HeroBannerRight