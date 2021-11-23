import React from 'react';
import { Input, Label, Grid } from 'semantic-ui-react';


function Header(props) {
    console.log(props)
   return (
       <div>
           <Input fluid icon='search' value={props.value}>
            <Label>N</Label>
            <input/>
           </Input>
           <Grid columns={14} padded>
               <Grid.Column>통합</Grid.Column>
               <Grid.Column>이미지</Grid.Column>
               <Grid.Column>VIEW</Grid.Column>
               <Grid.Column>지식iN</Grid.Column>
               <Grid.Column>인플루언서</Grid.Column>
               <Grid.Column>동영상</Grid.Column>
               <Grid.Column>쇼핑</Grid.Column>
               <Grid.Column>뉴스</Grid.Column>
               <Grid.Column>어학사전</Grid.Column>
               <Grid.Column>지도</Grid.Column>
               <Grid.Column>책</Grid.Column>
               <Grid.Column>뮤직</Grid.Column>
               <Grid.Column>지식백과</Grid.Column>
               <Grid.Column>오디오클립</Grid.Column>
           </Grid>
       </div>
   )

}


export default Header;