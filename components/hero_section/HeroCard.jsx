
import Image from "next/image";
import styles from "../../styles/HeroSection.module.scss";

export const HeroCard = (props) => {

  return (
    <>
    {props.herocardmain.map(herocard => 

    <div key={herocard} className={`py-4 py-sm-5 rounded shadow text-white ${herocard.extra_class}`}>
        <div className="d-flex align-items-center justify-content-center">
            <Image src={herocard.herocard_icon} alt="university" width="50px" height="50px"></Image>
          <div className="ms-2 ms-md-3" style={{lineHeight: "15px"}}>
            <h4 className="mb-2">{herocard.herocard_rank} </h4>
            <p className="mb-0 fw-bold"> {herocard.herocard_title} </p>
          </div>
        </div>
    </div>

    )}
    
    </>
  )
}

export default HeroCard