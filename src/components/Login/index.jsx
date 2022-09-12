import React from 'react';
import useLogin from './hooks/useLogin';

const Login = () => {
  const { error, handleInputUsername, handleInputPassword, login } = useLogin();
  return (
    <div className="flex flex-col gap-y-3">
      <input
        name="username"
        placeholder="username"
        type="text"
        className="input-form"
        onChange={e => handleInputUsername(e)}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        className="input-form"
        onChange={e => handleInputPassword(e)}
      />
      {error && <span className="text-sm text-error-1">Username/password salah</span>}
      <button className="btn-primary" onClick={login}>
        LOGIN
      </button>
    </div>
  );
};
export default Login;
