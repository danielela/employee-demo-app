import React, { useState } from 'react'
import { createEmployee } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] =  useState('');
    const [email, setEmail] = useState('');

    const [result, setResult] = useState('');

    const navigate = useNavigate();

    function saveEmployee(e){
        e.preventDefault();
        console.log("save employee");

        const employee = {firstName, lastName, email};
        console.log("employee input to service "+ employee);
        createEmployee(employee).then((response) => {
            console.log(response.data);
            setResult(response.data);

        }).catch(error => {
            console.log("error while calling create employee "+error);
        });

    }

    function firstNameText(e){
        console.log("first name "+e.target.value);
        setFirstName(e.target.value);
    }

    // function lastNameText(e){
    //     setLastname(e.target.value);
    // }

    function viewAllEmployee(){
        navigate("/employees")
    }

  return (
    <div className='container' >
        <div className='row' >
            <div className='card col-md-6 offset-md-3 offset-md-3 '>
                <h2>Create Employee</h2>
                <form>
                    <div className='form-group mb2' >
                    <label className='form-label'>{result}</label>
                    </div>
                    <div className='form-group mb-2' >
                        <label className='form-label'>First Name</label>
                        <input className='form-control' type='text' onChange={firstNameText} placeholder='Enter First Name' name='firstName' ></input>
                        <div>Typed Value : {firstName}</div>
                    </div>
                    <div className='form-group mb2' >
                        <label className='form-label'>Last Name</label>
                        <input className='form-control' type='text' onChange={(e)=> setLastname(e.target.value)} placeholder='Enter Last Name' name='lastName' ></input>
                        <div>Typed Value : {lastName}</div>
                    </div>
                    <div className='form-group mb2' >
                        <label className='form-label'>Email</label>
                        <input className='form-control' type='text' onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email' name='email' ></input>
                    </div>
                    
                    <button className='btn btn-success' onClick={saveEmployee} > Submit</button>

                </form>
                <br></br>
                <button className='btn btn-danger' onClick={viewAllEmployee} > View All Employee</button>
            </div>
        </div>
    </div>
  )
}

export default CreateEmployee