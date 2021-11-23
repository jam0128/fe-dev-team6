import React from "react";
import CardsComponent from "./Cards";
//import styles from '../styles/keyWord.css';
import { Container, Tab } from 'semantic-ui-react';



function WorksComponent(props) {

    const panes = (info) => {
        const result = [];
        for (let i = 0; i < info.length; i++) {
            const tmp = { menuItem : info[i]["title"], render : () => <Tab.Pane><CardsComponent info={info[i]} form="works"/></Tab.Pane>};
            result.push(tmp);
        }
        
        return result;
    }

    return (
        <Container>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes(props.info.tabs)}/>
        </Container> 
    )
}

export default WorksComponent;