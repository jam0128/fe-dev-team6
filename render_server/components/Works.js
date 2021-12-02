import React from "react";
import CardsComponent from "./Cards";
//import styles from '../styles/keyWord.css';
import { Container, Tab } from 'semantic-ui-react';



function WorksComponent(props) {

    const constPanes = (info) => {
        const result = [];
        for (let i = 0; i < info.length; i++) {
            const tmp = { menuItem : info[i]["title"], render : () => <Tab.Pane><CardsComponent info={info[i]} form="works" titleLength={10} width="105px" imgHeight="148px"/></Tab.Pane>};
            result.push(tmp);
        }
        return result;
    }

    return (
        <Container style={{
            fontWeight:"700"
        }}>
            <Tab menu={{ text: true }} panes={constPanes(props.info.tabs)}/>
        </Container> 
    )
}

export default WorksComponent;