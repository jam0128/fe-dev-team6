import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function MusicVedioComponent(props) {

    const constCard = (card, cNum) => {

        const result = [];

        result.push(<Image key={props.form+'image'+cNum} src={card.photo} style={{marginLeft: "auto", marginRight: "auto", height:"250px", width:"1000px", objectFit:"cover"}}/>);

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