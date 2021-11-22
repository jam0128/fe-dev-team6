import React from "react";
import styles from '../styles.css';

function KeyWordComponent(props) {

    const constTabs = (tabs) => {
        const result = [];
        for (let i = 0; i < tabs.length; i++) {
            result.push(<li>{tabs[i]}</li>);
        }
        return <ul>{result}</ul>;
    }

    const constCompos = (compos) => {
        const result = [];
        for (let i = 0; i < compos.length; i++) {
            result.push(<div>{compos[i]['type']}</div>);
        }
        return result;
    }


    return (
        <div className={styles.keyWord}>
            <h2>{props.info.title}</h2>
            {props.info.category}
            {constTabs(props.info.tab)}
            {constCompos(props.info.components)}
        </div>
    
    )
}

export default KeyWordComponent;