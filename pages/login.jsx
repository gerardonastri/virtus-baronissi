import styles from '../styles/Login.module.css'
import Image from "next/image"
import React, {useState, useContext} from "react";
import {AuthContext} from '../context/authContext/AuthContext';
import {login} from '../context/authContext/apiCalls'
import {useRouter} from "next/router";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
  const {dispatch} = useContext(AuthContext)

  const handleLogin =  async () => {
    login({email, password}, dispatch)
    await new Promise(done => setTimeout(() => done(), 3000));  
    router.push('/admin')
    
}

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.form}>

        <div className={styles.formGroup}>
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Submit</button>

      </div>
    </div>
  )
}