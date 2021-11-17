import {Component} from 'react'

function Header(props) {
    return (
        <div >
            N {props.value} 검색결과
        </div>
    )
}

export default () => <Header value="" />