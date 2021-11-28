import React from "react";
import CardsComponent from "./Cards";
import WorksComponent from "./Works";
import '../styles/keyWord.css';
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
                result.push(<Grid.Column style={{
                    width:"max-content", 
                    padding: "5px 10px",
                    height: "30px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    backgroundColor: "rgb(145, 120, 103)", 
                    color:"#fff",
                    fontWeight: "900"
                }}>{tabs[i]}</Grid.Column>);
            } else {
                result.push(<Grid.Column style={{
                    width:"max-content",
                    padding: "5px 10px",
                    height: "30px",
                    marginTop: "5px",
                    color: "rgb(145, 120, 103)"
                }}>{tabs[i]}</Grid.Column>);
            }
            
        }
        return <Grid columns={tabs.length} textAlign='center' padded divided style={{justifyContent: "flex-start"}}>{result}</Grid>;
    }

    const constCompos = (compos) => {
        const result = [];
        for (let i = 0; i < compos.length; i++) {
            const tmp = [];
            switch (compos[i]['type']) {
                case "RelationPlaylistComponent" :
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
            result.push(<Item><Container style={{
                backgroundColor: "#fff",
                padding: "20px 10px",
                borderRadius: "10px",
                boxShadow: "0 2px 3px 0 rgb(0 0 0 / 5%), 0 0 2px 0 rgb(0 0 0 / 7%)"
            }}>{tmp}</Container></Item>)
        }
        return result;
    }


    return (
        <Container className="keyWord" style={{
            backgroundColor:"rgb(241, 237, 235)",
            borderTop:"4px solid rgb(217, 208, 202)",
            padding: "20px 10px 20px 10px"
        }}>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header>{props.info.title}</Item.Header>
                        <Item.Meta style={{color:"rgb(217, 208, 202)"}}>{constCate(props.info.category)}</Item.Meta>
                        <Item.Description>{constTabs(props.info.tab)}</Item.Description>
                    </Item.Content>
                </Item>
                {constCompos(props.info.components)}
            </Item.Group>
        </Container>
    
    )
}

export default KeyWordComponent;