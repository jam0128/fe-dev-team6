import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Item, Grid } from 'semantic-ui-react';



function CardsComponent(props) {

    const constCard = (card) => {
        return (
            <Card>
                <Image src={card.thumbnail} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{card.title}</Card.Header>
                </Card.Content>
            </Card>
        )
    }

    const constCards = (cards) => {
        const result = [];
        for (let i = 0; i < cards.length; i++) {
            result.push(constCard(cards[i]));
        }
        return <Card.Group itemsPerRow="6">{result}</Card.Group>;
    }

    return (
        <Container>
            {props.info.title}
            {constCards(props.info.contents)}
        </Container>
    
    )
}

export default CardsComponent;