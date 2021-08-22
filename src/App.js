import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList';



function App() {

  const [users, setUsers] = useState([])
  const [error, setError] = useState()


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {

      setUsers(response.data);
    })

    .catch( function (error){
      setError (error)
    })
  

  },
  [])
  return (
    <div className="App">
      
<img width='100px' height="100px" src="https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png" alt="users" />
<h1>Users:</h1>
      <div className='container'>
        
<UserList users={users} /> 
</div>
    </div>
  );
}

export default App;