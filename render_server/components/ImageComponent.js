import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Grid } from 'semantic-ui-react';



function ImageComponent(props) {

    const constImg = (img) => {
        return <Image src={img} style={{width:"100%", height:"100%", objectFit:"cover"}}/>;
    }

    const constImgs = (imgs) => {
        const result = [];
        const imgStyle = {
            padding: "1px",
            height:"30vw"
        }
        for (let i = 0; i < 3; i++) {
            const tmp = [];
            for (let j = 0; j < 3; j++) {
                tmp.push(<Grid.Column style={imgStyle}>{constImg(imgs[i * 3 + j])}</Grid.Column>);
            }
            result.push(<Grid.Row style={{paddingTop:"0px", paddingBottom:"0px"}}>{tmp}</Grid.Row>);
        }
        return <Grid columns='three' style={{paddingLeft:"1rem", paddingRight:"1rem"}}>{result}</Grid>;
    }

    return (
        <Container>
            {constImgs(props.info)}
        </Container>
    
    )
}

export default ImageComponent;