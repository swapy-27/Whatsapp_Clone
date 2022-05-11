import react, { useState } from 'react';
import styles from '../css/login.module.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }
    return (
        <div className=''>

            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <span className={styles.loginSignupHeader}>Login</span>
                <div className={styles.field} ><input name='Enter Email' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /></div>

                <div className={styles.field} ><input  name='Enter Password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>
                <div className={styles.field} ><button  type='submit'>Login</button></div>
            </form>
        </div>
    )
}

export default Login;