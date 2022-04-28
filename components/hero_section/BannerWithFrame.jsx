
import styles from "/styles/HeroSection.module.scss";
import Image from "next/image";

export const BannerWithFrame = () => {
  return (
    <>
        <div className={`${styles.heroImgFrame}`}>
            <Image src="/smartphone.png" className="rounded" alt="Corporate" height="400" width="400"></Image>
        </div>
    </>
  )
}

export default BannerWithFrame