import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Item, Grid } from 'semantic-ui-react';



function CardsComponent(props) {

    const constCard = (card) => {

        const result = [];

        result.push(<Image src={card.thumbnail} wrapped ui={false}/>);

        const content = [];

        content.push(<Card.Header>{card.title}</Card.Header>)

        switch (props.form) {
            case "works" :
                content.push(<Card.Meta>{card.role}</Card.Meta>);
                content.push(<Card.Meta>{card.date}</Card.Meta>);
                break;
            case "videos" :
                content.push(<Card.Meta>
                    <Grid columns={2} divided>
                        <Grid.Column>{card.website}</Grid.Column>
                        <Grid.Column>{card.date}</Grid.Column>
                    </Grid>
                    </Card.Meta>);
                break;
            default :
                break;
        }

        result.push(<Card.Content>{content}</Card.Content>)

        return <Card>{result}</Card>;
    }


    const constCards = (cards) => {
        const result = [];
        for (let i = 0; i < cards.length; i++) {
            result.push(constCard(cards[i]));
        }
        return <Card.Group itemsPerRow="3">{result}</Card.Group>;
    }

    return (
        <Container>
            {constCards(props.info.contents)}
        </Container>
    
    )
}

export default CardsComponent;