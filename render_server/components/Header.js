import React from 'react';


function Header(props) {
    console.log(props)
   return (
       <div>
           N <input value={props.value}/>  검색결과
       </div>
   )

}


export default Header;