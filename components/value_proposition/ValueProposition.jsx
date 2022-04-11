import {Container, Row, Col} from 'react-bootstrap';
import ValueProCard from './ValueProCard';
import styles from '../../styles/ValuePosition.module.scss'
import { useState } from 'react';

export const ValueProposition = () => {

    const [cardActive, setcardActive] = useState(true);
    
  return (
    <>
        <div className={`${styles.ValuePropositionSec}`}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3 className="text-center mb-5">Value Propositions</h3>
                    </Col>
                    <Col sm={3}>
                        <ValueProCard extraclass={cardActive ? true : false} valueCardDiv={valueCard1} />
                    </Col>
                    <Col sm={3}>
                        <ValueProCard valueCardDiv={valueCard2} />
                    </Col>
                    <Col sm={3}>
                        <ValueProCard valueCardDiv={valueCard3} />
                    </Col>
                    <Col sm={3}>
                        <ValueProCard valueCardDiv={valueCard4} />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default ValueProposition

const valueCard1 = [
    {
        valueCardImg: "/discount.gif",
        valueCardTitle : "Exclusive Corporate Discounts",
        valueCardContent : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
]

const valueCard2 = [
    {
        valueCardImg: "/best.gif",
        valueCardTitle : "Best online universities to choose from",
        valueCardContent : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
]

const valueCard3 = [
    {
        valueCardImg: "/money.gif",
        valueCardTitle : "EMI Facility Available",
        valueCardContent : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
]

const valueCard4 = [
    {
        valueCardImg: "/support.gif",
        valueCardTitle : "Dedicated Counselor Support",
        valueCardContent : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
]