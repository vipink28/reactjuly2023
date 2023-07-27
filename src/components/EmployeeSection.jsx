import React, { useState } from 'react';
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';

function EmployeeSection(props) {
 
    const [employeeList, setEmployeeList]=useState([]);
    
    const updateEmployee=(formData)=>{
        setEmployeeList((prev)=>([
            ...prev,
            formData
        ]))
    }

    return (
        <div>
            <AddEmployee updateEmployee={updateEmployee}/>
            <EmployeeList employeeList={employeeList}/>
        </div>
    );
}

export default EmployeeSection;