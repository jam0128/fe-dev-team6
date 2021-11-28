import React from "react";
import PostsComponent from "./Posts";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container,  Header} from 'semantic-ui-react';



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
                result.push(<PostsComponent info={data.contents} form="News"/>);
                break;
            case "VIEWComponent" :                
                result.push(<PostsComponent info={data.contents} form="VIEW"/>);
                break;
            case "InfluencerComponent" :                
                result.push(<PostsComponent info={data.contents} form="Influencer"/>);
                break;
            default : 
                break;
        }
        return result;
    }


    return (
        <Container style={{
            backgroundColor: "#fff",
            marginTop: "9px",
        }}>
            {constOther(props.info.data)}
        </Container>

    )
}

export default OtherComponent;