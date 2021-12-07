import React, {useState} from "react";
import CardsComponent from "./Tool/Cards";
//import styles from '../styles/keyWord.css';
import { Container, Button, Icon } from 'semantic-ui-react';



function WorksComponent(props) {
    const [tabNum, setTab] = useState(0);


    const constTitle = (titles, link) => {
        const result = [];

        result.push(<Button floated="right" href={link} style={{background:"none", padding:"0 5px 0 0"}}><Icon name="arrow right" size="large"/></Button>)


        const titleStyle = {
            background: "none",
            fontWeight: "500",
            fontSize: "15px",
            padding: "0px 12px 20px 0px"
        };

        for (let i = 0; i < titles.length; i++) {
            if (i === tabNum) {
                result.push(<Button style={{...titleStyle, fontWeight: "900", color:"#000"}}>{titles[i]}</Button>);
            } else {
                result.push(<Button onClick={()=>setTab(i)} style={titleStyle}>{titles[i]}</Button>);
            }
        }

        return result;
    }

    const constTab = (info) => {
        const result = [];

        const titles = [];
        for (let i = 0; i < info.length; i++) {
            titles.push(info[i]["title"]);
        }
        
        result.push(<div>{constTitle(titles, info[tabNum]["link"])}</div>);

        result.push(<CardsComponent info={info[tabNum]} form="works" titleLength={10} width="105px" imgHeight="148px"/>);

        return result;
    }

    return (
        <Container style={{
            fontWeight:"700"
        }}>
            {constTab(props.info.tabs)}
        </Container> 
    )
}

export default WorksComponent;