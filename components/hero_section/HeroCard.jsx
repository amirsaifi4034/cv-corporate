
import Image from "next/image";

export const HeroCard = (props) => {

  return (
    <>
    {props.herocardmain.map(herocard => 

    <div key={herocard} className="py-4 py-sm-5">
        <div className="d-flex align-items-center justify-content-center">
            <Image src={herocard.herocard_icon} alt="university" width="50px" height="50px"></Image>
          <div className="ms-2 ms-md-3" style={{lineHeight: "15px"}}>
            <h5 className="mb-0">{herocard.herocard_rank}</h5>
            <p className="mb-0"> <small>{herocard.herocard_title}</small> </p>
          </div>
        </div>
    </div>

    )}
    
    </>
  )
}

export default HeroCard