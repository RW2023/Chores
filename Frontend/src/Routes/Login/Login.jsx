import React, { useState } from 'react';
import api from '../api';
import { useHistory } from 'react-router-dom';
const history = useHistory();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/auth/login', { email, password });
            const { token } = response.data;

            // Store the token in local storage
            localStorage.setItem('authToken', token);

            // Redirect to home or dashboard
            history.push('/dashboard');
            console.log('Login successful');

        } catch (err) {
            setError(err.response.data.error);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <span>{error}</span>}
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
