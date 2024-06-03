import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import API from '../utils/api';
import '../style.css';

const schema = yup.object().shape({
    email: yup.string()
      .email('Email inválido')
      .required('Email é obrigatório'),
    password: yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha é obrigatória'),
  });
  const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
          const response = await API.post('/login', data);
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        } catch (error) {
          console.error('Erro ao fazer login:', error);
        }
      };
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors.password?.message}</p>
          </div>
          <button type="submit">Login</button>
        </form>
      );
    }
    
    export default Login;