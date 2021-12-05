import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function AlbumsComponent(props) {

    const constAlbum = (album, cNum) => {

        const result = [];

        const tmp = [];

        const nameStyle = {
            paddingLeft: "10px",
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
            tmp.push(<tr key={props.form + 'content' + i + cNum}>
                <td style={nameStyle}>{i+1}</td>
                <td style={contentStyle}>{album.contents[i].name}</td>
                <td> <Image href={album.contents[i].link} floated="right" src={album.contents[i].content} style={{ borderRadius: "50%", width:"25px",height:"25px",marginRight:"10px", marginTop:"-10px",}}/> </td>
            </tr>);
        }

        result.push(<Card.Description key ={props.form+'meta'+cNum}>
            <table style={{width: "100%", borderBottom: "2px solid rgb(219, 219, 219)", marginLeft: "5px", marginRight: "5px", marginBottom: "5px"}}>{tmp}</table>
        </Card.Description>);

        return (<Card key ={props.form+'card'+cNum} fluid style={{
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

        // <button type="button" id="" class="btn btnEvent">
        //   <img src="http://c.huv.kr/c/0b/0b8c4a6d60aea665193612bb31af071039da9e16.png" alt="btnImages" class="btnImages">
        // </button>
        // // <input type="button" onclick="audio.play();" value="PLAY"> 
        // // <input type="button" onclick="audio.pause();" value="PAUSE"> 