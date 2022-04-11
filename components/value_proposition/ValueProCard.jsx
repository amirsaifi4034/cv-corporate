import styles from '../../styles/ValueProCard.module.scss';
import Image from 'next/image';

export const ValueProCard = (props) => {

  return (
    <>
    {props.valueCardDiv.map(valueCard =>
      <div key={valueCard} className={`${styles.valuecard} ${props.extraclass ? styles.valueCardActive : ''}`}>
        <div className={`${styles.valuecardImg}`}>
          <Image src={valueCard.valueCardImg} width="60px" height="60px" alt="Pro Position" ></Image>
        </div>
      <h6>{valueCard.valueCardTitle}</h6>
      <p>{valueCard.valueCardContent}</p>
  </div>
    )}
    </>
  )
}

export default ValueProCard