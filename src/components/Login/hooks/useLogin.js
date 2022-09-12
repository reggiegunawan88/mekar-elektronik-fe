import { useRouter } from 'next/router';
import { useState } from 'react';

const useLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleInputUsername = e => {
    setUsername(e.target.value);
  };

  const handleInputPassword = e => {
    setPassword(e.target.value);
  };

  const login = () => {
    setError(false);
    if (username === 'admin' && password === 'admin') {
      router.push('/dashboard');
    } else {
      setError(true);
    }
  };

  return {
    error,
    handleInputUsername,
    handleInputPassword,
    login
  };
};

export default useLogin;
