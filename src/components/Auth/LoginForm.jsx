import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './Auth.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};