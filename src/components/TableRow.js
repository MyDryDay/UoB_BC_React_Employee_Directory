// import react
import React from 'react';
// Create functional TableRow component
function TableRow(props){
    return (
        <tr key={props.login.uid} {...props}>
            <td>
                <img src={props.picture.thumbnail} alt="Employee"></img>
            </td>
            <td>{`${props.name.title} ${props.name.first} ${props.name.last}`} </td>
            <td>{props.dob.age}</td>
            <td>{props.location.country}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    )
}
// export TableRow as default
export default TableRow;