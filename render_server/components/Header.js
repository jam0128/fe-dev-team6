import React from 'react';
import { Input, Label } from 'semantic-ui-react';


function Header(props) {
    console.log(props)
   return (
       <div>
           <Input fluid icon='search' value={props.value}>
            <Label>N</Label>
            <input/>
           </Input>
       </div>
   )

}


export default Header;