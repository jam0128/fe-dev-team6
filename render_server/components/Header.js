import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input } from 'semantic-ui-react';


function Header(props) {
    console.log(props)
   return (
       <div>
           N <Input fluid icon='search' value={props.value}/>  검색결과
       </div>
   )

}


export default Header;