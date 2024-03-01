import axios from "axios";
import { useEffect, useState } from "react";


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8080/api/v1/employees")
        .then((response) => {
          console.log(response.data);
          setEmployees(response.data);
        }).catch((error) => {
          console.log(error);
        });
      }, []);

    // const employees = [
    //     {
    //         "id" : 1,
    //         "firstName" : "John",
    //         "lastName" : "Doe",
    //         "emailId" : "john@email.com"
    //     },
    //     {
    //         "id" : 2,
    //         "firstName" : "Alex",
    //         "lastName" : "Smith",
    //         "emailId" : "alex@email.com"
    //     }
    // ];

    return(
        <div>  
            <h1>Employee List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Employee Id</td>
                        <td>Employee First Name</td>
                        <td>Employee Last Name</td>
                        <td>Employee Email Id</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>

    );
};

export default ListEmployeeComponent;