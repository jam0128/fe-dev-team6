import React from "react";
import CardsComponent from "./Cards";
import WorksComponent from "./Works";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Item, Grid, Header, Segment } from 'semantic-ui-react';



function KeyWordComponent(props) {

    const constCate = (tabs) => {

        const result = [];
        for (let i = 0; i < tabs.length; i++) {
            result.push(<Grid.Column>{tabs[i]}</Grid.Column>);
            
        }
        return <Grid divided>{result}</Grid>;
    }

    const constTabs = (tabs) => {

        const result = [];
        for (let i = 0; i < tabs.length; i++) {
            if (i === 0) {
                result.push(<Grid.Column color="brown">{tabs[i]}</Grid.Column>);
            } else {
                result.push(<Grid.Column>{tabs[i]}</Grid.Column>);
            }
            
        }
        return <Grid columns={tabs.length} textAlign='center' padded divided>{result}</Grid>;
    }

    const constCompos = (compos) => {
        const result = [];
        for (let i = 0; i < compos.length; i++) {
            const tmp = [];
            switch (compos[i]['type']) {
                case "RelationArtistComponent" :
                    tmp.push(<Header as='h4'>{compos[i]['data']['title']}</Header>);
                    tmp.push(<CardsComponent info={compos[i]['data']} form="basic"/>);
                    break;
                case "AlsoSearchComponent" :
                    tmp.push(<Header as='h4'>{compos[i]['data']['title']}</Header>);
                    tmp.push(<CardsComponent info={compos[i]['data']} form="basic"/>);
                    break;
                case "RecentVideosComponent" :
                    tmp.push(<Header as='h4'>{compos[i]['data']['title']}</Header>);
                    tmp.push(<CardsComponent info={compos[i]['data']} form="videos"/>);
                    break;
                case "WorksComponent" :
                    tmp.push(<WorksComponent info={compos[i]['data']}/>);
                    break;
                default :
                    tmp.push(compos[i]['type']);
            }
            result.push(<Item><Container>{tmp}</Container></Item>)
        }
        return result;
    }


    return (
        <Container>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>{props.info.title}</Item.Header>
                        <Item.Meta>{constCate(props.info.category)}</Item.Meta>
                        <Item.Description>{constTabs(props.info.tab)}</Item.Description>
                    </Item.Content>
                </Item>
                {constCompos(props.info.components)}
            </Item.Group>
        </Container>
    
    )
}

export default KeyWordComponent;