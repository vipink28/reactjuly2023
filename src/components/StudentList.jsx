import React, { useState } from 'react';
import TableRow from './TableRow';

function StudentList(props) {
    const data = [
        {id: 1, name: "Aman", course: "Full Stack", gender: "Male", fees: 25000},
        {id: 2, name: "Arshdeep", course: "Python", gender: "Female", fees: 65000},
        {id: 3, name: "Pradeep", course: "Web Design", gender: "Male", fees: 15000},
        {id: 4, name: "Raveena", course: "Java", gender: "Female", fees: 45000},
        {id: 5, name: "Raghav", course: "PHP", gender: "Male", fees: 45000},
    ]
    const [studentData, setStudentData]=useState(data);

    const deleteStudent=(id)=>{
        const filteredVal = studentData.filter((item)=>{
            return item.id !== id
        })
        setStudentData(filteredVal);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Course</td>
                        <td>Gender</td>
                        <td>Fees</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentData.map((item, index)=>{
                            return(
                              <TableRow key={item.id} item={item} onDelete={deleteStudent}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;