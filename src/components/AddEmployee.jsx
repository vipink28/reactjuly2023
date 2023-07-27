import React, { useState } from 'react';

function AddEmployee(props) {
    const { updateEmployee } = props;
    // this component will have form to add employee and display that single employee
    const [formData, setFormData]= useState();
    const handleChange=(e)=>{
        let { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
            id: Date.now()
        }))
    }
    const addEmployee=(e)=>{
        e.preventDefault();
        updateEmployee(formData);
    }
    return (
        <div>
            <form>
                <input type="text" name='name' placeholder='name' onChange={handleChange}/>
                <input type="text" name='gender' placeholder='gender' onChange={handleChange} />
                <input type="text" name='designation' placeholder='designation' onChange={handleChange} />
                <input type="text" name='salary' placeholder='salary' onChange={handleChange} />
                <input type="text" name='city' placeholder='city' onChange={handleChange} />
                <button onClick={addEmployee}>Add Employee</button>
            </form>
        </div>
    );
}

export default AddEmployee;