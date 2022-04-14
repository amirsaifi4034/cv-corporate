
import Image from "next/image";
import styles from "../../styles/CompaniesCard.module.scss";

export const CompaniesCard = (props) => {
  return (
    <>
    
        <div className={`${styles.companiesLogo} shadow text-center rounded`}>
            <Image src={props.CompaniesCard.companieImg} width="100px" height="60px"></Image>
        </div>
    
    </>
  )
}

export default CompaniesCard