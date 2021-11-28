import React from "react";
//import styles from '../styles/keyWord.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Image, Grid } from 'semantic-ui-react';



function PostsComponent(props) {

    const constPost = (post) => {

        const result = [];

        const content = [];

        content.push(<Image floated="right" size="medium" src={post.thumbnail} wrapped ui={false}/>);

        const writerStyle = {
            width:"max-content", 
            padding: "0px 5px"
        };

        const writerTitleMargin = {
            marginBottom: "10px"
        };

        switch (props.form) {
            case "News" :
                content.push(<Card.Meta>
                    <Grid divided style={writerTitleMargin}>
                        <Grid.Column style={writerStyle}>{post.publish}</Grid.Column>
                        <Grid.Column style={writerStyle}>{post.date}</Grid.Column>
                        <Grid.Column style={writerStyle}>{post.website}</Grid.Column>
                    </Grid>
                </Card.Meta>);
                break;
            case "VIEW" :
                if (post.influencer) {
                    content.push(<Card.Meta>
                        <Grid divided style={writerTitleMargin}>
                            <Grid.Column style={writerStyle}>{post.writer}</Grid.Column>
                            <Grid.Column style={writerStyle}>인플루언서</Grid.Column>
                            <Grid.Column style={writerStyle}>{post.date}</Grid.Column>
                        </Grid>
                    </Card.Meta>);
                } else {
                    content.push(<Card.Meta>
                        <Grid divided style={writerTitleMargin}>
                            <Grid.Column style={writerStyle}>{post.writer}</Grid.Column>
                            <Grid.Column style={writerStyle}>{post.date}</Grid.Column>
                        </Grid>
                    </Card.Meta>);
                } 
                break;
            case "Influencer" :
                content.push(<Card.Meta>
                    <Grid divided style={writerTitleMargin}>
                        <Grid.Column style={writerStyle}>{post.writer}</Grid.Column>
                        <Grid.Column style={writerStyle}>{post.date}</Grid.Column>
                    </Grid>
                </Card.Meta>);
                break;
            default :
                break;
        }

        content.push(<Card.Header>{post.title}</Card.Header>);
        content.push(<Card.Description>{post.body}</Card.Description>);
        

        result.push(<Card.Content>{content}</Card.Content>);

        const extra = [];

        switch (props.form) {
            case "News" :
                extra.push(<Card.Content extra>
                    관련뉴스 {post.related}건 전체보기
                </Card.Content>);
                break;
            case "VIEW" :
                break;
            case "Influencer" :
                extra.push(<Card.Content extra>
                    {post.writer}님의 참여 콘텐츠 {post.related}개 더보기
                </Card.Content>);
                break;
            default :
                break;
        }

        result.push(extra);

        return <Card style={{
            borderShadow: "none",
            WebkitBoxShadow: "none"
        }}>{result}</Card>;
    }


    const constPosts = (cards) => {
        const result = [];
        for (let i = 0; i < cards.length; i++) {
            result.push(constPost(cards[i]));
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