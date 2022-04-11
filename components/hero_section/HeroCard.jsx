
import Image from "next/image";

export const HeroCard = (props) => {

  return (
    <>
    {props.herocardmain.map(herocard => 

    <div key={herocard} className="text-center py-5">
        <div className="d-flex align-items-center justify-content-center">
            <Image src={herocard.herocard_icon} alt="university" width="40px" height="40px"></Image>
            <h5 className="mb-0">{herocard.herocard_rank}</h5>
        </div>
        <h6 className="mb-0 mt-2">{herocard.herocard_title}</h6>
    </div>

    )}
    
    </>
  )
}

export default HeroCard