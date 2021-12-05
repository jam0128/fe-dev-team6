import React from "react";
import PostsComponent from "./Posts";
import ImageComponent from "./ImageComponent";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container,  Header, Button, Icon} from 'semantic-ui-react';



function OtherComponent(props) {

    const constOther = (data) => {
        const result = [];
        result.push(<Header as='h4' style={{
            height: "40px",
            padding: "10px 18px",
            borderBottom: "1px solid #e9ecef"
        }}>{data.title}</Header>);
        switch(props.info.type) {
            case "NewsComponent" :                
                result.push(<PostsComponent key='News' info={data.contents} form="News"/>);
                break;
            case "VIEWComponent" :                
                result.push(<PostsComponent key='VIEW' info={data.contents} form="VIEW"/>);
                break;
            case "InfluencerComponent" :                
                result.push(<PostsComponent key='Influencer' info={data.contents} form="Influencer"/>);
                break;
            case "ImageComponent" :
                result.push(<ImageComponent key='Image' info={data.contents}/>);
                break;
            default : 
                break;
        }
        return result;
    }

    const moreStyle = {
        marginTop: "10px",
        borderRadius: "0",
        padding:"18px",
        fontSize: "15px",
        fontWeight: "500",
        backgroundColor: "#f4f7f8"
    };


    return (
        <Container key={props.info.type} style={{
            backgroundColor: "#fff",
            marginTop: "20px",
        }}>
            {constOther(props.info.data)}
            <Button fluid style={moreStyle} href={props.info.data.more}>{props.info.data.title} 더보기 <Icon name="arrow right"/></Button>
        </Container>

    )
}

export default OtherComponent;