import React from "react";
import PostsComponent from "./Posts";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container,  Header} from 'semantic-ui-react';



function OtherComponent(props) {

    const constOther = (data) => {
        const result = [];
        result.push(<Header as='h4'>{data.title}</Header>);
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
        <Container>
            {constOther(props.info.data)}
        </Container>

    )
}

export default OtherComponent;