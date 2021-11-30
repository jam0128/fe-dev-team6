import React from "react";
import CardsComponent from "./Cards";
import WorksComponent from "./Works";
import ProfileComponent from "./Profile";
import BasicInfoComponent from "./basicInfo";
import '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Item, Grid, Header } from 'semantic-ui-react';



function KeyWordComponent(props) {

    const constCate = (tabs) => {

        const result = [];
        for (let i = 0; i < tabs.length; i++) {
            result.push(<Grid.Column style={{
                width:"max-content", 
                color: "rgb(145, 120, 103)",
                marginTop: "10px",
                paddingTop: "0px",
                paddingBottom: "0px"
            }}>{tabs[i]}</Grid.Column>);
            
        }
        return <Grid style={{marginTop:"-11px", marginBottom:"-3px"}} divided>{result}</Grid>;
    }

    const constTabs = (tabs) => {

        const result = [];

        const tabStyle = {
            width:"max-content",
            padding: "5px 10px",
            height: "30px",
            marginTop: "5px"
        };

        for (let i = 0; i < tabs.length; i++) {
            if (i === 0) {
                result.push(<Grid.Column style={{
                    ...tabStyle,
                    borderRadius: "5px",
                    backgroundColor: "rgb(145, 120, 103)", 
                    color:"#fff",
                    fontWeight: "900"
                }}>{tabs[i]}</Grid.Column>);
            } else {
                result.push(<Grid.Column style={{
                    ...tabStyle,
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
                    tmp.push(<CardsComponent 
                        info={compos[i]['data']} 
                        form="basic" 
                        titleLength={10} 
                        width="105px" 
                        imgHeight="105px"
                    />);
                    break;
                case "AlsoSearchComponent" :
                    tmp.push(<Header as='h4'>{compos[i]['data']['title']}</Header>);
                    tmp.push(<CardsComponent 
                        info={compos[i]['data']} 
                        form="basic" 
                        titleLength={9} 
                        width="87px" 
                        imgHeight="87px"
                    />);
                    break;
                case "RecentVideosComponent" :
                    tmp.push(<Header as='h4'>{compos[i]['data']['title']}</Header>);
                    tmp.push(<CardsComponent 
                        info={compos[i]['data']} 
                        form="videos" 
                        titleLength={25} 
                        width="182px" 
                        imgHeight="103px"
                        padding="12px 15px 14px 15px"
                    />);
                    break;
                case "WorksComponent" :
                    tmp.push(<WorksComponent info={compos[i]['data']}/>);
                    break;
                case "ProfileComponent" :
                    tmp.push(<Header as='h4'>{compos[i]['data']['title']}</Header>);
                    tmp.push(<ProfileComponent info={compos[i]['data']}/>);
                    break;
                case "BasicInfoComponent" :
                    tmp.push(<BasicInfoComponent info={compos[i]['data']}/>);
                    break;
                default :
                    tmp.push(compos[i]['type']);
            }
            result.push(<Item><Container style={{
                backgroundColor: "#fff",
                padding: "13px 10px 15px 10px",
                borderRadius: "10px",
                boxShadow: "0 2px 3px 0 rgb(0 0 0 / 5%), 0 0 2px 0 rgb(0 0 0 / 7%)",
                overflow: "hidden"
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
                        <Item.Header style={{fontWeight:"900"}}>{props.info.title}</Item.Header>
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