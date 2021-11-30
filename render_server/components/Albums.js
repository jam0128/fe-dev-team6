import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function AlbumsComponent(props) {

    const constAlbum = (album) => {

        const result = [];

        const tmp = [];

        const nameStyle = {
            paddingLeft: "5px",
            color: "#8f8f8f"
        };

        const contentStyle = {
            color: "#424242",
        };

        for (let i = 0; i < profile.contents.length; i++) {
            tmp.push(<tr>
                <td style={nameStyle}>{i}</td>
                <td style={contentStyle}>{album.contents[i].name}</td>
            </tr>);
        }

        result.push(<Card.Description>
            <Image floated="right" src={album.photo} wrapped ui={false} style={{height: "108px", borderRadius: "6px"}}/>
            <table style={{borderLeft: "3px solid rgb(235, 231, 228)", marginLeft: "5px", marginBottom: "5px"}}>{tmp}</table>
        </Card.Description>);

        return (<Card fluid style={{
            boxShadow: "none",
            WebBoxShadow: "none"
        }}>{result}</Card>);
    }

    return (
        <Container>
            {constAlbum(props.info)}
        </Container>
    
    )
}

export default AlbumsComponent;