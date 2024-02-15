const axios = require('axios');

const requestOne = axios.get("https://jsonplaceholder.typicode.com/users");
const requestTwo = axios.get("https://jsonplaceholder.typicode.com/posts");
const requestThree = axios.get("https://jsonplaceholder.typicode.com/todos");

axios.all([requestOne, requestTwo, requestThree])
  .then(axios.spread((usersResponse, postsResponse, todosResponse) => {
    
    const users = usersResponse.data;
    const posts = postsResponse.data;
    const todos = todosResponse.data;

    console.log("Liste des utilisateurs :", users);
    console.log("Liste des articles :", posts);
    console.log("Liste des tâches à faire :", todos);
  }))
  
  ;
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response  => {
    console.log(response.data);
  })
  export default Userlist;
