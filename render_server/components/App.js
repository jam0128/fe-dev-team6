import React from "react";
import Header from "./Header";
import KeyWordComponent from "./KeyWord";
import OtherComponent from "./OtherComponents";
import Footer from "./Footer";

function App(props) {

    const constOthers = (compos) => {
        const result = [];
        for (let i = 0; i < compos.length; i++) {
            result.push(<OtherComponent key={'other' + i} info={compos[i]}/>);
        }
        return result;
    }

    return(
        <html lang="en">
            <head>
                <title>Naver</title>
                <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
                <link rel="stylesheet" href="/static/css/style.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/> 
            </head>
            <body>
                <div id="root" style={{backgroundColor:"#e9ecef"}}>
                    <Header value={props.info['test1Key']}/>
                    <div style={{
                        width:'768px', 
                        margin:'0 auto', 
                        marginTop:"15px"
                    }}>
                        <KeyWordComponent info={props.info['compo1']['data']}/>
                        {constOthers(props.info['compo2'])}
                    </div>
                    <Footer/>
                    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
                    <script type="text/babel" src="/static/main.js"></script>
                </div>
            </body>
        </html>
    )
}


export default App;