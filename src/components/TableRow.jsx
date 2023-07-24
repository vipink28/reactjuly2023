import React from 'react';

function TableRow(props) {
    const {item, onDelete}=props;
    return (
        <tr className={item.gender === "Female" ? "bg-red": ""}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.course}</td>
        <td>{item.gender}</td>
        <td>{item.fees}</td>
        <td><button onClick={()=>{onDelete(item.id)}}>Delete</button></td>
    </tr>
    );
}


export default TableRow;