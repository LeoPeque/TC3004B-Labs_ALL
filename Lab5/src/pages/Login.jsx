import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
    
const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/Home');
  };

  return (
    <div>
      <h2>Login</h2>

      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>

      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login
