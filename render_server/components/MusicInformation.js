import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid, Button } from 'semantic-ui-react';
import ProfileComponent from "./Profile";



function MusicInformationComponent(props) {

    const constMusicInformation = (musicinfo, cNum) => {

        const result = [];

        const tmp = [];

        const content=[];

        const contentStyle = {
            color: "#424242",
            paddingRight: "auto",
            paddingLeft: "auto",
            textAlign: "center"
        };

        const imageStyle = {
            marginLeft: "auto",
            marginRight:"auto",
            marginBottom: "20px",
            height:"100px",
            width: "100px",
            overflow: "hidden",
            objectFit: "cover"
        };

        const nameStyle = {
            paddingLeft: "10px",
            color: "#424242",
            font: "bold",
            paddingBottom: "10px",
            paddingTop: "10px",
            float:"left"
        };

        const rightfooterStyle = {
            color: "#424242",
            paddingBottom: "10px",
            paddingTop: "10px",
            paddingRight:"10px",
            float:"right"
        };

        if (true){
            for (let i=0; i < 4; i++){
                tmp.push(<tr key={props.form + 'content' + i + cNum}>
                    <td style={contentStyle}>{musicinfo.contents[i].content}</td>
                </tr>);
            }
        }

        result.push(<Card.Description key ={props.form+'meta'+cNum}>
            <Image  src={musicinfo.photo} wrapped ui={false} style={imageStyle}/>
            <table style={{marginLeft: "auto", marginRight:"auto"}}>{tmp}</table>
        </Card.Description>);

        result.push(<Button onclick="click()" style={{marginBottom: "15px", background: "rgb(256,256,256)", width:"50px", fontSize:"3px", marginLeft:"auto", marginRight:"auto"}}>
        더보기
        </Button>)

        function click() {
            for (let i=0; i < musicinfo.contents.length; i++){
                if(i!=3){
                    tmp.push(<tr>
                        <td style={contentStyle}>{musicinfo.contents[i].content}</td>
                    </tr>);
                }
            }
        }
        
        result.push(<Card.Description key ={props.form+'meta'+cNum}>
            <table style={{width: "100%", borderBottom: "2px solid rgb(242, 242, 242)", marginLeft: "5px", marginRight: "5px", marginBottom: "5px"}}></table>
        </Card.Description>);

        content.push(<tr key={props.form + 'content' + cNum}>
                <td style={nameStyle}>{"뮤직"}</td>
                <td floated="right" style={rightfooterStyle}>{"다른 사이트 더보기"}</td>
            </tr>);        

        result.push(<Card.Description href={musicinfo.link} key ={props.form+'meta'+cNum}>
            <table style={{width: "100%", borderBottom: "2px solid rgb(242, 242, 242)", marginLeft: "5px", marginRight: "5px", marginBottom: "5px"}}>{content}</table>
        </Card.Description>);

        return (<Card key ={props.form+'card'+cNum} fluid style={{
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