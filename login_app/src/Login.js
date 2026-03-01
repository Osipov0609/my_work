import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import i1 from './wishperingGlow/background.png'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message,  setMessage]  = useState('Լրացված Չեն Դաշտերը՛'); // Սա Պետկ է Ցույց տա > Նորմալ է, Սխալ է, որն է Սխալ Լրացրած > 3 Պռոցեսս;
  const navigate = useNavigate();

  const handle_login = async (event) => {
    event.preventDefault();
      try {
        // post > Չշփոթել;
        // Ուղղարկել http://localhost։5000 > username, password > Նշվածններին;
        const res = await axios.post(`http://localhost:5000/login`, {
          username,
          password
        });
        
        localStorage.setItem("token", res.data.token); // Ստացում BackEnd_ից > Token_ին;
        navigate("/home"); // Տվյալ էջ Գնալ;
        setMessage('So Good');
      }
      catch (err) {
        setMessage('Login failed Error: ' + err.response?.data?.message); // BackEnd_ի Message_ին Հասնել;
      }
  }

  return (
    <div className='login_app' style={{backgroundImage: `url(${i1})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div className="all">
            <h3>Login</h3>
            <form onSubmit={handle_login}>
              <input type="text"     placeholder='Նշեք Login'    value={username} onChange={(event) => { setUsername(event.target.value) }} />
              <input type="password" placeholder='Նշեք Password' value={password} onChange={(event) => { setPassword(event.target.value) }} />
              <button type='submit'>Մուտք</button>
            </form>
            <p>Login failed : {message}</p>
        </div>
    </div>
  )
}
