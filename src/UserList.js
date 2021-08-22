import React from 'react'
import { Table,} from 'react-bootstrap';

function UserList({users}) {
    return (
        <div>
            <Table striped bordered hover>
             <thead>
    <tr>
      <th style={{width:'5%'}}>#</th>
      <th style={{width:'25%'}}>Name</th>
      <th style={{width:'20%'}}>Username</th>
      <th style={{width:'25%'}}>Email</th>
      <th style={{width:'25%'}}>City</th>
    </tr>
  </thead>
  </Table>
       {users.map((e)=>(
           
               <div className='UserList'>
                  <Table striped bordered hover>
 
  <tbody>
    <tr>
      <td style={{width:'5%'}}>{e.id}</td>
      <td style={{width:'25%'}}> {e.name} </td>
      <td style={{width:'20%'}}> {e.username} </td>
      <td style={{width:'25%'}}>{e.email}</td>
      <td style={{width:'25%'}}>{e.address.city}</td>

    </tr>
   
  </tbody>
</Table>
               </div>

       )    
       )}    
        </div>
    )
}

export default UserList
