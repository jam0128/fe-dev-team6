import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';
import ProfileComponent from "./Profile";



function MusicInformationComponent(props) {

    const constMusicInformation = (musicinfo) => {

        const result = [];

        const tmp = [];

        const nameStyle = {
            paddingLeft: "5px",
            color: "#8f8f8f"
        };

        const contentStyle = {
            color: "#424242",
            paddingRight: "auto",
            paddingLeft: "auto"
        };

        const imageStyle = {
            marginLeft: "auto",
            marginRight:"auto",
            marginBottom: "20px",
            height: "100px",
            width: "100px",
            overflow: "hidden"
        };

        if (true){
            for (let i=0; i < 4; i++){
                tmp.push(<tr>
                    {/* <td style={nameStyle}>{musicinfo.contents[0].name}</td> */}
                    <td style={contentStyle}>{musicinfo.contents[i].content}</td>
                </tr>);
            }
        }

        if (false){
            for (let i=0; i < musicinfo.contents.length; i++){
                if(i!=3){
                    tmp.push(<tr>
                        {/* <td style={nameStyle}>{musicinfo.contents[0].name}</td> */}
                        <td style={contentStyle}>{musicinfo.contents[i].content}</td>
                    </tr>);
                }
            }
        }

        result.push(<Card.Description>
            <Image  src={musicinfo.photo} wrapped ui={false} style={imageStyle}/>
            <table style={{marginLeft: "auto", marginRight:"auto", marginBottom: "5px"}}>{tmp}</table>
        </Card.Description>);

        return (<Card fluid style={{
            boxShadow: "none",
            WebBoxShadow: "none"
        }}>{result}</Card>);
    }

    return (
        <Container>
            {constMusicInformation(props.info)}
        </Container>
    
    )
}

export default MusicInformationComponent;