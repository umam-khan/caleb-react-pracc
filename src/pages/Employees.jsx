import { useState } from 'react'
import Employee from "../components/Employee"
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
// import Header from "../components/Header"

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

function updateEmployee(id, newName, newRole) 
{
  const updatedEmployees = employees.map((e)=>{
    if(e.id == id) 
    {
      return {...e, name:newName, role:newRole}
    }
    return e;
  }
  )
  setEmployees(updatedEmployees);
}
function addEmployee(name, role , img)
{
  const newEmployee = {id:uuidv4(), name:name , role : role, img : img};

  setEmployees([...employees, newEmployee]);
}
  return (
    <> 
    <div className=' mx-auto min-h-screen p-2 max-w-7xl'>
      <div className='flex flex-wrap justify-center'>
         {employees.map((e) => {
          const editEmployee = <EditEmployee id={e.id} name={e.name} role={e.role} img={e.img} updateEmployee={updateEmployee} />
          return (
           <Employee id={e.id} key={uuidv4()} name={e.name} role={e.role} img={e.img} editEmployee={editEmployee}/>
           );
          })}
      </div>
      <AddEmployee addEmployee={addEmployee} />
  </div>
    </>
  )
}

export default Employees
