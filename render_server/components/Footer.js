import React from 'react';
import { Grid, Button, Icon, Image } from 'semantic-ui-react';


function Footer(props) {
    const colStyle = {
        width: "max-content",
        fontSize: "13px",
        color: "rgba(0,0,0,.3)",
        padding: "0 10px"
    };
    const gridStyle = {
        width:"max-content", 
        margin:"2px auto !important"
    };
    const divStyle = {
        fontWeight: "500",
        borderTop: "1px solid #e2e5e8",
        marginTop: "50px",
        paddingTop: "15px",
        paddingBottom: "50px"
    };
    const btnStyle = {
        backgroundColor: "#fff",
        border: "1px solid #f2f2f2",
        marginTop: "-40px",
        borderRadius: "2px",
        width: "38px",
        height: "35px",
        padding: "10px 15px",
        marginRight: "15px",
        fontSize:""
    };
   return (
       <div>
           <div>
                <Button floated="right" href={"https://share.naver.com/web/shareView?url=http://localhost:3000/&title=naversearch"} style={btnStyle}><Icon name="share square outline"/></Button>
           </div>
            <div style={divStyle}>
                    <Grid divided columns={3} padded style={gridStyle}>
                        <Grid.Column style={colStyle}>로그인</Grid.Column>
                        <Grid.Column style={colStyle}>전체서비스</Grid.Column>
                        <Grid.Column style={colStyle}>PC버전</Grid.Column>
                    </Grid>
                    <Grid divided columns={3} padded style={gridStyle}>
                        <Grid.Column style={colStyle}>이용약관</Grid.Column>
                        <Grid.Column style={colStyle}>개인정보처리방침</Grid.Column>
                        <Grid.Column style={colStyle}>통합검색 고객센터</Grid.Column>
                    </Grid>
                    <div style={{fontWeight:"900", textAlign:"center", fontSize:"20px", color:"rgba(0,0,0,.3)", marginTop:"15px"}}>NAVER</div>
            </div>
       </div>
   )

}


export default Footer;