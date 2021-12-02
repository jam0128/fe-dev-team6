import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function MusicVedioComponent(props) {


    const editPadding = (padding) => {
        let result = "9px 11px 9px";
        if (padding) {
            result = padding;
        }
        return result;
    }

    const constCard = (card) => {

        const result = [];

        // result.push(<Image src={card.photo} wrapped ui={false} style={{height:props.imgHeight, width:"100%"}}/>);

        const content = [];

        const imageStyle = {
            marginLeft: "auto",
            marginRight:"auto",
            // marginBottom: "20px",
            height: "100px",
            width: "100%",
            overflow: "hidden"
        };

        result.push(<Card.Description>
            <Image  src={card.photo} wrapped ui={false} style={imageStyle}/>
            <table style={{width:"100%"}}>{content}</table>
        </Card.Description>);

        // result.push(<Card.Content style={{padding:editPadding(props.padding)}}>{content}</Card.Content>)

        return <Card style={{
            //width: props.width,
        }}>{result}</Card>;
    }


    return (
        <Container>
            {constCard(props.info.contents)}
        </Container>
    
    )
}

export default MusicVedioComponent;