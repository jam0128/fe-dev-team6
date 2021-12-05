import React, {useState} from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid, Header, Button, Icon } from 'semantic-ui-react';



function PostsComponent(props) {
    const [buttonActivate, setButton] = useState(false);
    const btnClick = () => {
        setButton(prev => !prev);
    }

    const constButton = () => {
        const btnContent = [];
        let btnStyle = {
            borderRadius : "15px",
            padding: "8px 10px"
        };
        if (buttonActivate) {
            btnContent.push(<Icon color="white" name="smile outline"/>);
            btnContent.push("팬취소");
            return(<Button floated="right" color="green" onClick={btnClick} style={btnStyle}>{btnContent}</Button>);
        } else {
            btnContent.push(<Icon color="green" name="smile outline"/>);
            btnContent.push("팬하기");
            return(<Button basic floated="right" color="green" onClick={btnClick} style={btnStyle}>{btnContent}</Button>);
        }
    }

    const constWriter = (post, pNum) => {
        const result = [];

        const writerStyle = {
            width:"max-content", 
            padding: "0px 5px"
        };

        const writerTitleMargin = {
            margin: "0px 0 10px 0px"
        };

        let iconSize = "20px";

        if (props.form === "Influencer") {
            iconSize = "40px";
        }

        result.push(<Grid.Column key={props.form + 'writericon' + pNum} style={{...writerStyle, width:iconSize, height:iconSize, padding:"0"}}>
            <Image key={props.form + 'Icon' + pNum} src={post.icon} style={{width:"100%",height:"100%",marginTop:"-3px", borderRadius: "50%", border: "1px solid #f2f2f2"}}/>
        </Grid.Column>);

        switch (props.form) {
            case "Influencer" :
                const tmp = [];
                const rResult = [];
                rResult.push(constButton());
                tmp.push(<Header as='h5' style={{marginBottom:"0px", marginLeft:"5px"}}>{post.writer}</Header>);
                const info = [];
                for (let i = 0; i < post.info.length; i++) {
                    info.push(<Grid.Column kye={props.form + pNum + 'info' + i} style={writerStyle}>{post.info[i]}</Grid.Column>);
                }
                tmp.push(<Grid divided style={writerTitleMargin}>{info}</Grid>);
                result.push(<Grid.Column key={props.form + 'writer' + pNum} style={writerStyle}>{tmp}</Grid.Column>);
                rResult.push(<Grid style={writerTitleMargin}>{result}</Grid>);
                return rResult;
            default :
                result.push(<Grid.Column key={props.form + 'writer' + pNum} style={writerStyle}>{post.writer}</Grid.Column>);

                if (post.influencer) {
                    result.push(<Grid.Column key={props.form + 'writerinf' + pNum} style={writerStyle}>인플루언서</Grid.Column>);
                }
        
                result.push(<Grid.Column key={props.form + 'writerdate' + pNum} style={writerStyle}>{post.date}</Grid.Column>);
        
                if (props.form === "News" && post.website) {
                    result.push(<Grid.Column key={props.form + 'writerwebsite' + pNum} style={writerStyle}>{post.website}</Grid.Column>);
                }
        
                return <Grid divided style={writerTitleMargin}>{result}</Grid>;
        }
    }

    const constPost = (post, pNum) => {

        const result = [];

        const content = [];


        content.push(<Card.Meta key={props.form + 'meta' + pNum}>{constWriter(post, pNum)}</Card.Meta>);

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
                if(post.related) {
                    extra.push(<Card.Content key={props.form + 'extra' + pNum} extra style={{color:"#0068c3", textAlign: "right"}}>
                        관련뉴스 {post.related}건 전체보기
                    </Card.Content>);
                }
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

        return <Card href={post.link} key={props.form + pNum} style={{
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
            result.push(constPost(cards[i], i));
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