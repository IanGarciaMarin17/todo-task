import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultUser = {
      username: 'admin',
      password: 'bdb123',
    };
    if (
      username === defaultUser.username &&
      password === defaultUser.password
    ) {
      navigate('/home');
    } else {
      setError('Usuario o Contraseña Invalido');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <img src="/todotask.ico" alt="TODO Task Logo" className={styles.logo} />
        <div className={styles['form-group']}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles['form-group']}>
          <FaLock className={styles.icon} />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
