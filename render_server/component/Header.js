const React = require('react');
const component = React.Component;


function Header(props) {
//    return (
//        <div >
//            N {props.value} 검색결과
//        </div>
//    )

    return React.createElement(
        'input',
        {value : props},
    )
}

exports.Header = Header

//export default () => <Header value="" />