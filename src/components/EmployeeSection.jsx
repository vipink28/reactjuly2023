import React from 'react';
import AddEmployee from './AddEmployee';
import EmployeeList from '../../EmployeeList';

function EmployeeSection(props) {
    // employee data in this component.    
    // updateEmployee(formData) setEmployee
    return (
        <div>
            <AddEmployee />
            <EmployeeList />
        </div>
    );
}

export default EmployeeSection;