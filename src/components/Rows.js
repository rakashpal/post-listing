import React from 'react';
const Rows=(props)=>{
 return (
   <tr>
     <td>{props.item.name}</td>
     <td>{props.item.name}</td>
     <td>{props.item.name}</td>
     <td>0</td>
     <td>{props.item.created_at}</td>
     </tr>
 )
}

export default Rows;