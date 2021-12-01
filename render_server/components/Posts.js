import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function PostsComponent(props) {

    const constPost = (post, pNum) => {

        const result = [];

        const content = [];

        
        const writerStyle = {
            width:"max-content", 
            padding: "0px 5px"
        };

        const writerTitleMargin = {
            margin: "0px 0 10px 0px"
        };

        const tmp = [];

        if (props.form === "News" || props.form === "VIEW") {
            tmp.push(<Grid.Column key={props.form + 'writericon' + pNum} style={{...writerStyle, width:"20px", height:"20px", padding:"0"}}>
                <Image key={props.form + 'Icon' + pNum} src={post.icon} style={{width:"100%",height:"100%",marginTop:"-3px", borderRadius: "50%", border: "1px solid #f2f2f2"}}/>
            </Grid.Column>);
        }

        tmp.push(<Grid.Column key={props.form + 'writer' + pNum} style={writerStyle}>{post.writer}</Grid.Column>);

        if (post.influencer) {
            tmp.push(<Grid.Column key={props.form + 'writerinf' + pNum} style={writerStyle}>인플루언서</Grid.Column>);
        }

        tmp.push(<Grid.Column key={props.form + 'writerdate' + pNum} style={writerStyle}>{post.date}</Grid.Column>);

        if (props.form === "News") {
            tmp.push(<Grid.Column key={props.form + 'writerwebsite' + pNum} style={writerStyle}>{post.website}</Grid.Column>);
        }

        content.push(<Card.Meta key={props.form + 'meta' + pNum}><Grid divided style={writerTitleMargin}>{tmp}</Grid></Card.Meta>);

        content.push(<Card.Header key={props.form + 'header' + pNum} style={{color:"#0068c3"}}>{post.title}</Card.Header>);
        
        const body = [];

        if (post.thumbnail) {
            body.push(<Image key={props.form + 'Img' + pNum} floated="right" src={post.thumbnail} style={{width: "87px", height: "87px", objectFit: "contain", border: "1px solid #f2f2f2"}}/>);
        }

        body.push(<div key={props.form + 'body' + pNum}>{post.body}</div>);

        content.push(<Card.Description key={props.form + 'body' + pNum}>{body}</Card.Description>);

        result.push(<Card.Content key={props.form + 'content' + pNum}>{content}</Card.Content>);

        const extra = [];

        switch (props.form) {
            case "News" :
                extra.push(<Card.Content key={props.form + 'extra' + pNum} extra style={{color:"#0068c3", textAlign: "right"}}>
                    관련뉴스 {post.related}건 전체보기
                </Card.Content>);
                break;
            case "VIEW" :
                break;
            case "Influencer" :
                extra.push(<Card.Content key={props.form + 'extra' + pNum} extra>
                    {post.writer}님의 참여 콘텐츠 {post.related}개 더보기
                </Card.Content>);
                break;
            default :
                break;
        }

        result.push(extra);

        return <Card key={props.form + pNum} style={{
            borderShadow: "none",
            WebkitBoxShadow: "none",
            margin: "0px",
            borderBottom: "1px solid #e9ecef",
            borderRadius: "0px"
        }}>{result}</Card>;
    }


    const constPosts = (cards) => {
        const result = [];
        for (let i = 0; i < cards.length; i++) {
            result.push(constPost(cards[i]), i);
        }
        return <Card.Group itemsPerRow="1">{result}</Card.Group>;
    }

    return (
        <Container>
            {constPosts(props.info)}
        </Container>
    
    )
}

export default PostsComponent;