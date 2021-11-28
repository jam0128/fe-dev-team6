import React from 'react';
import { Input, Grid } from 'semantic-ui-react';
import "../styles/Header.css";


function Header(props) {
    console.log(props)
   return (
       <div style={{fontWeight: "900", backgroundColor:"#fff"}}>
            <Input 
                fluid
                icon='search'
                value={props.value}
                label={{content:'N', color:'green'}}
                labelPosition='left'
                size='huge'
            />
            <Grid columns={14} padded style={{width:"max-content"}}>
                <Grid.Column className="header_main" style={{width:"max-content", color:"#06c755", borderBottom:"4px solid"}}>통합</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>이미지</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>VIEW</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>지식iN</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>인플루언서</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>동영상</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>쇼핑</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>뉴스</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>어학사전</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>지도</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>책</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>뮤직</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>지식백과</Grid.Column>
                <Grid.Column style={{width:"max-content"}}>오디오클립</Grid.Column>
            </Grid>
       </div>
   )

}


export default Header;