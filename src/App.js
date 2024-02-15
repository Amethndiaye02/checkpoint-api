import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [listOfUsers, setListOfUsers] = useState([]);

  
  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
    };

    
    fetchUsers();
  }, []); 

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
