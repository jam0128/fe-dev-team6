import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function AlbumsComponent(props) {

    const constAlbum = (album) => {

        const result = [];

        const tmp = [];

        const nameStyle = {
            paddingLeft: "10px",
            // paddingRight: "15px",
            color: "#424242",
            font: "bold",
            paddingBottom: "15px"
        };

        const contentStyle = {
            color: "#424242",
            paddingBottom: "15px",
            paddingLeft: "-10px",
        };

        for (let i = 0; i < album.contents.length; i++) {
            tmp.push(<tr>
                <td style={nameStyle}>{i+1}</td>
                <td style={contentStyle}>{album.contents[i].name}</td>
                {/* <Image floated="right" src={album.contents[i].content} wrapped ui={false} style={{width:"5%",height:"5%",marginTop:"-3px", borderRadius: "50%",}}/> */}
            </tr>);
        }

        result.push(<Card.Description>
            {/* <Image floated="right" src={album.photo} wrapped ui={false} style={{height: "108px", borderRadius: "6px"}}/> */}
            <table style={{width: "100%", borderBottom: "2px solid rgb(219, 219, 219)", marginLeft: "5px", marginRight: "5px", marginBottom: "5px"}}>{tmp}</table>
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