import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function MusicVedioComponent(props) {

    const constCard = (card, cNum) => {

        const result = [];

        // result.push(<Image src={card.photo} wrapped ui={false} style={{height:props.imgHeight, width:"100%"}}/>);

        const content = [];

        const imageStyle = {
            marginLeft: "auto",
            marginRight:"auto",
            // marginBottom: "20px",
            height: "props.imgHeight"
            // overflow: "hidden"
        };

        // result.push(<Card.Description>
        //     <Image  src={card.photo} wrapped ui={false} style={imageStyle}/>
        //     <table style={{width:"100%"}}>{content}</table>
        // </Card.Description>);

        result.push(<Image key={props.form+'image'+cNum} src={card.photo} wrapped ui={false} style={{marginLeft: "auto", marginRight: "auto", height:"250px", width:"1000px"}}/>);

        // result.push(<Card.Content style={{padding:editPadding(props.padding)}}>{content}</Card.Content>)

        return <Card href={card.link} key={props.form+'card'+cNum} fluid style={{
            boxShadow: "none",
            WebBoxShadow: "none"
        }}>{result}</Card>;
    }


    return (
        <Container key={props.info.form}>
            {constCard(props.info.contents)}
        </Container>
    
    )
}

export default MusicVedioComponent;