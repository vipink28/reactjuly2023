import React from 'react';

function EmployeeList(props) {
    
    const {employeeList} = props;

    return (
        <div>
            {
                employeeList.map((item)=>{
                    return <div key={item?.id}>
                        <p>{item?.name}</p>
                        <p>{item?.designation}</p>
                    </div>
                })
            }
        </div>
    );
}

export default EmployeeList;