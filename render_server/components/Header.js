import React from 'react';
import { Input, Grid } from 'semantic-ui-react';


function Header(props) {
    const maxCo = {
        width: "max-content"
    };
   return (
       <div style={{fontWeight: "900", backgroundColor:"#fff"}}>
            <Input 
                fluid
                icon={{name:"search", link: true}}
                value={props.value}
                label={{content:'N', color:'green'}}
                labelPosition='left'
                size='huge'
            />
            <div style={{overflowX: "auto"}}>
                <Grid columns={14} padded style={{width:"max-content"}}>
                    <Grid.Column className="header_main" style={{...maxCo, color:"#06c755", borderBottom:"4px solid"}}>통합</Grid.Column>
                    <Grid.Column style={maxCo}>이미지</Grid.Column>
                    <Grid.Column style={maxCo}>VIEW</Grid.Column>
                    <Grid.Column style={maxCo}>지식iN</Grid.Column>
                    <Grid.Column style={maxCo}>인플루언서</Grid.Column>
                    <Grid.Column style={maxCo}>동영상</Grid.Column>
                    <Grid.Column style={maxCo}>쇼핑</Grid.Column>
                    <Grid.Column style={maxCo}>뉴스</Grid.Column>
                    <Grid.Column style={maxCo}>어학사전</Grid.Column>
                    <Grid.Column style={maxCo}>지도</Grid.Column>
                    <Grid.Column style={maxCo}>책</Grid.Column>
                    <Grid.Column style={maxCo}>뮤직</Grid.Column>
                    <Grid.Column style={maxCo}>지식백과</Grid.Column>
                    <Grid.Column style={maxCo}>오디오클립</Grid.Column>
                </Grid>
            </div>
       </div>
   )

}


export default Header;