import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid, Text} from 'semantic-ui-react';



function MusicVedioComponent(props) {

    const constCard = (card, cNum) => {

        const result = [];

        const tmp = [];

        const writerStyle = {
            // width:"max-content", 
            // padding: "0px 5px",
            floated:"right",
            marginRight:"auto",
            marginLeft:"auto",
            // marginTop:"-30px"
        };

        result.push(<Card.Content key='musicvedio'>
            <Image key={props.form+'image'+cNum} src={card.photo} style={{marginLeft: "auto", marginRight: "auto", height:"250px", width:"1000px", objectFit:"cover"}}/>
            <p key={props.form+'length'} floated="right" style={writerStyle}>{card.contents[0].name}</p>
        </Card.Content>);

        return <Card href={card.link} key={props.form+'card'+cNum} fluid style={{
            boxShadow: "none",
            WebBoxShadow: "none"
        }}>{result}</Card>;
    }


    return (
        <Container>
            {constCard(props.info)}
        </Container>
    
    )
}

export default MusicVedioComponent;