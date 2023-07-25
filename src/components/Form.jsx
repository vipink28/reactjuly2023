import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import TableRow from './TableRow';

function Form(props) {

    const data = [
        {id: 1, name: "Aman", course: "Full Stack", gender: "Male", fees: 25000},
        {id: 2, name: "Arshdeep", course: "Python", gender: "Female", fees: 65000},
        {id: 3, name: "Pradeep", course: "Web Design", gender: "Male", fees: 15000},
        {id: 4, name: "Raveena", course: "Java", gender: "Female", fees: 45000},
        {id: 5, name: "Raghav", course: "PHP", gender: "Male", fees: 45000},
    ]
    const [studentData, setStudentData]=useState(data);

    const [name, setName]=useState();
    const [formData, setFormData]=useState();
    
    const handleName = (event)=>{
        setName(event.target.value);
    }

    const handleChange=(e)=>{
        // e.preventDefault();
        const { name, value } = e.target;
        // let name = e.target.name;
        // let value = e.target.value;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
            id: studentData[studentData.length - 1].id + 1
        }));
        
    }
    // {name: value} -prev
    // name:value, fees: value


    //{name: value, course: value, fees: value}

    const addStudent=(e)=>{
        e.preventDefault();
        setStudentData((prev)=>([
            ...prev,
            formData
        ]))
    }

    return (
        <div className='form-container'>
            <label>Name</label>
            <input type="text" onChange={handleName}/>
            <p>{name}</p>

            <form>
                <input type="text" name='name' placeholder='Name' onChange={handleChange} />
                <br />
                <input type="text" name='course' placeholder='Course' onChange={handleChange}/>
                <br />
                <input type="text" name='gender' placeholder='Gender' onChange={handleChange}/>
                <br />
                <input type="text" name='fees' placeholder='Fees' onChange={handleChange}/>
                <br />

                <button onClick={addStudent}>Add Student</button>
             
            </form>

            <p>Name: {formData?.name}</p>
                <p>Course: {formData?.course}</p>
                <p>Gender: {formData?.gender}</p>
                <p>Fees: {formData?.fees}</p>
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
                              <TableRow key={item.id} item={item} />
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default Form;