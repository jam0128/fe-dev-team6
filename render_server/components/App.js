import React from "react";
import Header from "./Header";
import KeyWordComponent from "./KeyWord";
import OtherComponent from "./OtherComponents";

function App(props) {

    const constOthers = (compos) => {
        const result = [];
        for (let i = 0; i < compos.length; i++) {
            result.push(<OtherComponent key={'other' + i} info={compos[i]}/>);
        }
        return result;
    }

    return(
        <div style={{backgroundColor:"#e9ecef"}}>
            <Header value={props.info['test1Key']}/>
            <div style={{
                width:'768px', 
                margin:'0 auto', 
                marginTop:"15px"
            }}>
                <KeyWordComponent info={props.info['compo1']['data']}/>
                {constOthers(props.info['compo2'])}
            </div>
        </div>
    )
}

export default App;