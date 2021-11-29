import React from "react";
import Header from "./Header";
import KeyWordComponent from "./KeyWord";
import OtherComponent from "./OtherComponents";

function App(props) {

    const constOthers = (compos) => {
        const result = [];
        for (let i = 0; i < compos.length; i++) {
            result.push(<OtherComponent info={compos[i]}/>);
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
                <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>  
            </head>
            <body style={{backgroundColor:"#e9ecef"}}>
                <Header value={props.info['test1Key']}/>
                <div style={{
                    width:'768px', 
                    margin:'0 auto', 
                    marginTop:"15px"
                }}>
                    <KeyWordComponent info={props.info['compo1']['data']}/>
                    {constOthers(props.info['compo2'])}
                </div>
            </body>
        </html>
    )
}

export default App;