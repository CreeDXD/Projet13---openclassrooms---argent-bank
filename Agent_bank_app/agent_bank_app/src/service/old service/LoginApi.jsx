import React, { useEffect, useState } from 'react';
import { Api } from '../service/Api';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/Action';

export function Login() {
  const [email, setEmail] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');

  const [loginData, setLoginData] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  const dispatch = useDispatch();

  const { data, error, isLoading } = Api({
    method: 'POST',
    url: '/api/v1/user/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email: email,
      password: password,
    },
  });

  useEffect(() => {
    setLoginData({ data, error, isLoading: false });

    if (data) {
      const { token } = data.body;
      dispatch(setToken(token)); // Dispatch the token to Redux store
    } else if (error) {
      console.error('Error:', error);
    }
  }, [data, error, dispatch]);

  if (isLoading) {
    return isLoading;
  }

  return (
    <>
      {/* Your login form */}
      {data && <p>Login successful!</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}
