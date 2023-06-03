import { useState } from 'react'
import Employee from "../components/Employee"
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from "../components/Header"

function Employees() {
 const [employees, setEmployees] = useState(
  [
    { id: 1, name: "Caleb", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 2, name: "jon", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 3, name: "jason", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 4, name: "jas", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 5, name: "jasoner", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 6, name: "jasonty", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 7, name: "jasonbu", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 8, name: "jasonho", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
    { id: 9, name: "jasonal", role: "developer",  img :"https://images.pexels.com/photos/14593043/pexels-photo-14593043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",},
  ]
 );

 function UpdateEmployee(id, newName, newRole){
  console.log('updateEmployee inside of app.js !')
  const updatedEmployee = employees.map((employee)=>{
    if(id == employee.id)
    {
      return {...employee, name : newName, role : newRole}
    }
    return employee;
  }) 
  setEmployees(updatedEmployee);
}

 function NewEmployee( newName, newRole, newImg){
  console.log('newEmployee inside of app.js !');
  const newEmployee = {
    id : uuidv4(),
    name: newName,
    role : newRole,
    img: newImg 
  };
  setEmployees([...employees, newEmployee]);
}


  return (
    <> 
    <div className=' mx-auto min-h-screen p-2 max-w-7xl'>
      <div className='flex flex-wrap justify-center'>
         {employees.map((e) => {
          const editEmployee = <EditEmployee id={e.id} name={e.name} role={e.role} UpdateEmployee={UpdateEmployee} />
          return (
           <Employee id={e.id} key={uuidv4()} name={e.name} role={e.role} img={e.img} UpdateEmployee={UpdateEmployee} editEmployee={editEmployee} />
           );
          })}
      </div>
      <div><AddEmployee NewEmployee={NewEmployee}/></div>
  </div>
    </>
  )
}

export default Employees
