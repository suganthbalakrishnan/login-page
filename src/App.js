import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);
  const [errorMeassage, setErrorMeassage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === 'user' && password === 'password') setAuth(true);
    else setErrorMeassage('Invalid username or password');
  }

  return (
    <div className='container'>
      <h1>Login Page</h1>
      <div style={{color:'red'}}>{errorMeassage}</div>
      {!auth ? 
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' placeholder='username' required value={username} onChange={(e)=>setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' placeholder='password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <input type='submit' value='Submit'/>
        </form>
      </div> 
      : 
      <div> Welcome, user!</div>}
    </div>
  );
}

export default App;