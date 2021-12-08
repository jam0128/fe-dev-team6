import React from "react";
import CardsComponent from "./Tool/Cards";
import WorksComponent from "./Works";
import ProfileComponent from "./Profile";
import MusicInformationComponent from "./MusicInformation";
import AlbumsComponent from "./Albums";
import MusicVedioComponent from "./MusicVedio";
import BasicInfoComponent from "./basicInfo";
import '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Item, Grid, Header, Button, Icon, Image } from 'semantic-ui-react';



function KeyWordComponent(props) {

    const constCate = (tabs) => {

        const result = [];
        for (let i = 0; i < tabs.length; i++) {
            result.push(<Grid.Column key={'keywordcate' + i} style={{
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
                result.push(<Grid.Column key={'keywordtab' + i} style={{
                    ...tabStyle,
                    borderRadius: "5px",
                    backgroundColor: "rgb(145, 120, 103)", 
                    color:"#fff",
                    fontWeight: "900"
                }}>{tabs[i]}</Grid.Column>);
            } else {
                result.push(<Grid.Column key={'keywordtab' + i} style={{
                    ...tabStyle,
                    color: "rgb(145, 120, 103)"
                }}>{tabs[i]}</Grid.Column>);
            }
            
        }
        return <Grid columns={tabs.length} textAlign='center' padded divided style={{justifyContent: "flex-start"}}>{result}</Grid>;
    }

    const constTitle = (title, link, cNum) => {
        const result = []; 
        
        result.push(<Button floated="right" href={link} style={{background:"none", padding:"0 5px 0 0"}}><Icon name="arrow right" size="large"/></Button>)

        result.push(<Header key={'keywordcompo' + cNum} as='h4' style={{marginTop: "3px"}}>{title}</Header>);

        return result;
    }

    const constCompos = (compos) => {
        const result = [];
        const cards = ["RelationPlaylistComponent", "AlsoSearchComponent", "RecentVideosComponent", "WorksComponent"];
        const music = ["MusicInformationComponent"];
        const compoStyle = {
            backgroundColor: "#fff",
            padding: "13px 10px 15px 10px",
            borderRadius: "10px",
            boxShadow: "0 2px 3px 0 rgb(0 0 0 / 5%), 0 0 2px 0 rgb(0 0 0 / 7%)"
        };
        const compoStylemusic = {
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 3px 0 rgb(0 0 0 / 5%), 0 0 2px 0 rgb(0 0 0 / 7%)"
        };
        for (let i = 0; i < compos.length; i++) {
            const tmp = [];
            switch (compos[i]['type']) {
                case "RelationPlaylistComponent" :
                    tmp.push(constTitle(compos[i]['data']['title'], compos[i]['data']['link'], i));
                    tmp.push(<CardsComponent 
                        info={compos[i]['data']} 
                        form="basic" 
                        titleLength={10} 
                        width="105px" 
                        imgHeight="105px"
                    />);
                    break;
                case "AlsoSearchComponent" :
                    tmp.push(constTitle(compos[i]['data']['title'], compos[i]['data']['link'], i));
                    tmp.push(<CardsComponent 
                        info={compos[i]['data']} 
                        form="basic" 
                        titleLength={9} 
                        width="87px" 
                        imgHeight="87px"
                    />);
                    break;
                case "RecentVideosComponent" :
                    tmp.push(constTitle(compos[i]['data']['title'], compos[i]['data']['link'], i));
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
                    tmp.push(constTitle(compos[i]['data']['title'], compos[i]['data']['link'], i));
                    tmp.push(<ProfileComponent info={compos[i]['data']}/>);
                    break;
                case "MusicInformationComponent" :
                    tmp.push(<MusicInformationComponent info={compos[i]['data']} form="basic"/>);
                    break;
                case "AlbumComponent" :
                    tmp.push(constTitle(compos[i]['data']['title'], compos[i]['data']['link'], i));
                    tmp.push(<AlbumsComponent info={compos[i]['data']} form="basic"/>);
                    break;
                case "BasicInfoComponent" :
                    tmp.push(<BasicInfoComponent info={compos[i]['data']}/>);
                    break;
                default :
                    tmp.push(compos[i]['type']);
            }
            if (cards.indexOf(compos[i]['type']) === -1) {
                if (music.indexOf(compos[i]['type']) === -1){
                    result.push(<Item key={"itemother" + i}><Container style={{
                        ...compoStyle,
                        overflow: "hidden"
                    }}>{tmp}</Container></Item>);
                }
                else {
                    result.push(<Item key={"itemother" + i}><Container style={{
                        ...compoStylemusic,
                        overflow: "hidden"
                    }}>{tmp}</Container></Item>);
                }
            } else {
                result.push(<Item key={"itemother" + i}><Container className="scrollNone" style={{
                    ...compoStyle,
                    overflowX: "auto"
                }}>{tmp}</Container></Item>);
            }
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
                <Item key="itemkeyword">
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