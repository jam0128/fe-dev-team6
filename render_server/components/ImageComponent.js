import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Grid } from 'semantic-ui-react';



function ImageComponent(props) {

    const constImg = (img) => {
        return <Image src={img} style={{width:"100%", height:"auto", objectFit:"scale-down"}}/>;
    }

    const constImgs = (imgs) => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            const tmp = [];
            for (let j = 0; j < 3; j++) {
                tmp.push(<Grid.Column>{constImg(imgs[i * 3 + j])}</Grid.Column>);
            }
            result.push(<Grid.Row>{tmp}</Grid.Row>);
        }
        return <Grid columns='three'>{result}</Grid>;
    }

    return (
        <Container>
            {constImgs(props.info)}
        </Container>
    
    )
}

export default ImageComponent;