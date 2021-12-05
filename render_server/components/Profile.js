import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image} from 'semantic-ui-react';



function ProfileComponent(props) {

    const constProfile = (profile) => {

        const result = [];

        const tmp = [];

        const nameStyle = {
            paddingLeft: "5px",
            color: "#8f8f8f"
        };

        const contentStyle = {
            color: "#424242",
        };

        for (let i = 0; i < profile.contents.length; i++) {
            tmp.push(<tr key={"profile" + i}>
                <td style={nameStyle}>{profile.contents[i].name}</td>
                <td style={contentStyle}>{profile.contents[i].content}</td>
            </tr>);
        }

        result.push(<Card.Description key="profileBody">
            <Image floated="right" src={profile.photo} style={{width:"87px", height: "108px", borderRadius: "6px", objectFit:"cover", border: "1px solid #f2f2f2"}}/>
            <table style={{borderLeft: "3px solid rgb(235, 231, 228)", marginLeft: "5px", marginBottom: "5px"}}>{tmp}</table>
        </Card.Description>);


        if (profile.footer.participate) {
            result.push(<Card.Content key='profileExtra' extra style={{paddingTop: "7px"}}>본인참여 {profile.footer.date}</Card.Content>)
        }

        return (<Card fluid style={{
            boxShadow: "none",
            WebBoxShadow: "none"
        }}>{result}</Card>);
    }

    return (
        <Container>
            {constProfile(props.info)}
        </Container>
    
    )
}

export default ProfileComponent;