import { useState } from 'react';
import axios from 'axios';

const signUpForm = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
        const response = await axios.post('/api/users/signup', {
          email,
          password
        });

        console.log(response.data);
    } catch (err) {
        console.log(err.response.data);
    }
};


    return (
        <form onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-control" />
                </div>
                <button  className="btn btn-primary">Sign Up</button>
        </form>
    );
}

export default signUpForm;