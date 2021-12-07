import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid, Button, Header, Table, Icon } from 'semantic-ui-react';
import ProfileComponent from "./Profile";



function MusicInformationComponent(props) {

    const constMusicInformation = (musicinfo, cNum) => {

        const result=[];

        const writerStyle = {
            // width:"max-content", 
            // padding: "0px 5px",
            // marginRight:"auto",
            // marginLeft:"auto",
            position:"absolute",
            color:"white",
            top:"90%",
            left:"94%"
        };

        result.push(<Container href={musicinfo.link} key='musicvedio' style={{position:"relative"}}>
            <Image key={props.form+'image'+cNum} src={musicinfo.photo} style={{height:"250px", width:"1000px", objectFit:"cover"}}/>
            <Image key={props.form+'icon'+cNum} src={musicinfo.icon} style={{height:"50px", objectFit:"cover", position:"absolute", top:"45%", left:"45%"}}/>
            <b key={props.form+'length'} floated="right" style={writerStyle}>{musicinfo.contents[0].name}</b>
        </Container>);

        
        result.push(<Header key={'keywordcompo'} as='h4' style={{padding: "0px 10px 15px 10px"}}>{musicinfo.title}</Header>);

        const tmp = [];

        const btn = [];

        const content=[];

        const footer=[];

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
            objectFit:"cover",
            border : "2px solid rgb(230, 230, 230)",
            borderRadius: "50px"
        };

        const nameStyle = {
            paddingLeft: "10px",
            color: "#424242",
            font: "bold",
            paddingBottom: "6px",
            fontSize:"12px",
            paddingTop: "6px",
            float:"left"
        };

        const rightfooterStyle = {
            color: "#424242",
            paddingBottom: "10px",
            fontSize:"12px",
            paddingTop: "6px",
            marginRight: "10px",
            paddingRight:"6px",
            float:"right"
        };

        const buttonStyle = {
            background: "rgb(245,244,242)",
            border : "1px solid rgb(209, 201, 191)",
            borderRadius : "0px",
            width:"300px",
            height:"40px",
            fontSize:"12px",
            // marginLeft:"0px",
            // marginRight:"0px"
        };

        const btnimageStyle = {
            marginLeft: "auto",
            marginRight:"auto",
            // marginBottom: "20px",
            height:"15px",
            width: "15px",
            objectFit:"cover",
        };

        for (let i=0; i < 3; i++){
            tmp.push(<tr key={props.form + 'content' + i + cNum}>
                <td style={contentStyle}>{musicinfo.contents[1].content[i]}</td>
            </tr>);
        }
        
        const handleClick = () => {
            for (let i=0; i < musicinfo.contents.content.length; i++){
                tmp.push(<tr key={props.form + 'content' + i + cNum}>
                    <td style={contentStyle}>{musicinfo.contents[1].content[i]}</td>
                </tr>);
            }
            render();
            restart();
        }

        result.push(<Card.Description key ={props.form+'meta'+cNum}>
            <Image  src={musicinfo.photo2} style={imageStyle}/>
            <table style={{marginLeft: "auto", marginRight:"auto"}}>{tmp}</table>
        </Card.Description>);

        result.push(<Button onclick={handleClick} style={{marginBottom: "15px", background: "rgb(256,256,256)", width:"150px", fontSize:"7px", marginLeft:"auto", marginRight:"auto"}}>
        ... 더보기
        </Button>);

        btn.push(<tr key={props.form + 'button' + cNum} style = {{marginLeft:"auto", marginRight:"auto"}}>
                <td><Button icon labelPosition='left' style={buttonStyle}>
                <Icon name='play' />
                바로재생
                </Button></td>
                <td><Button icon labelPosition='left' style={buttonStyle}>
                <Icon name='download' />
                MP3
                </Button></td>
            </tr>);

        result.push(<Card.Description key ={props.form+'meta1'+cNum}>
            <table style={{marginLeft: "auto", marginRight:"auto", marginBottom:"5px"}}>{btn}</table>
        </Card.Description>);
        
        result.push(<Card.Description key ={props.form+'meta'+cNum}>
            <table style={{width: "100%", borderBottom: "2px solid rgb(242, 242, 242)", marginLeft: "5px", marginRight: "5px", marginBottom: "5px"}}></table>
        </Card.Description>);

        content.push(<tr key={props.form + 'content' + cNum}>
                <td style={nameStyle}>{"뮤직"}</td>
                <td floated="right" style={rightfooterStyle}>{"다른 사이트 더보기"}</td>
            </tr>);   

        footer.push(
            <Button content='VIBE에서 더보기' icon='right arrow' style={{marginLeft:"auto", marginRight:"auto", background: "rgb(242, 242, 242)"}} labelPosition='right' />
        );

        result.push(<Card.Description href={musicinfo.link2} key ={props.form+'meta'+cNum}>
            <table style={{width: "100%", borderBottom: "2px solid rgb(242, 242, 242)", marginLeft: "5px", marginRight: "5px"}}>{content}</table>
        </Card.Description>);

        result.push(<Card.Content href={musicinfo.link3} key ={props.form+'footer'+cNum} style={{width: "100%", height:"60px", background: "rgb(242, 242, 242)"}}>
            {footer}
        </Card.Content>);

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