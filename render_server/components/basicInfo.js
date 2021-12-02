import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid, Header} from 'semantic-ui-react';



function BasicInfoComponent(props) {

    const constImg = (img) => {
        return <Image src={img} style={{width:"100%", height:"100%", objectFit:"cover"}}/>;
    }

    const constImgs = (imgs) => {
        const result = [];
        const imgStyle = {
            padding: "1px",
            height:"249px"
        }
        for (let i = 0; i < 3; i++) {
            const tmp = [];
            for (let j = 0; j < 3; j++) {
                tmp.push(<Grid.Column key={'biImgRow' + i + 'Col' + j} style={imgStyle}>{constImg(imgs[i * 3 + j])}</Grid.Column>);
            }
            result.push(<Grid.Row key={'biImgRow' + i} style={{paddingTop:"0px", paddingBottom:"0px"}}>{tmp}</Grid.Row>);
        }
        return <Grid columns='three'>{result}</Grid>;
    }

    const constBasicInfo = (infos) => {
        const result = [];
        result.push(constImgs(infos.photo));
        result.push(<Header as='h4'>{infos.title}</Header>);
        result.push(<Container>{infos.contents}</Container>);

        return result;
    }

    return (
        <Container>
            {constBasicInfo(props.info)}
        </Container>
    
    )
}

export default BasicInfoComponent;