import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function CardsComponent(props) {

    const editTitle = (title) => {
        let result = title;
        if (title.length > props.titleLength) {
            result = result.substring(0,props.titleLength);
            result += "...";
        }
        return result;
    }

    const editPadding = (padding) => {
        let result = "9px 11px 9px";
        if (padding) {
            result = padding;
        }
        return result;
    }

    const constCard = (card) => {

        const result = [];

        result.push(<Image src={card.thumbnail} style={{height:props.imgHeight, objectFit:"cover"}}/>);

        const content = [];

        content.push(<Card.Header style={{
            color:"#242424",
            fontSize: "15px",
            fontWeight: "300"
        }}>{editTitle(card.title)}</Card.Header>)

        switch (props.form) {
            case "works" :
                content.push(<Card.Meta style={{marginTop:"5px", marginBottom:"0px"}}>{card.role}</Card.Meta>);
                content.push(<Card.Meta style={{marginTop:"1px"}}>{card.date}</Card.Meta>);
                break;
            case "videos" :
                const writerBasicStyle = {
                    fontSize: "12px", 
                            color: "#8f8f8f", 
                            width: "max-content", 
                            paddingTop: "0px",
                            paddingBottom: "0px"
                };
                
                content.push(<Card.Meta>
                    <Grid columns={2} divided style={{marginTop:"0px"}}>
                        <Grid.Column style={{
                            ...writerBasicStyle,
                            paddingRight: "5px"
                        }}>{card.website}</Grid.Column>
                        <Grid.Column style={{
                            ...writerBasicStyle,
                            paddingLeft: "5px"
                        }}>{card.date}</Grid.Column>
                    </Grid>
                    </Card.Meta>);
                break;
            default :
                break;
        }

        result.push(<Card.Content style={{padding:editPadding(props.padding)}}>{content}</Card.Content>)

        return <Card style={{
            width: props.width,
        }}>{result}</Card>;
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