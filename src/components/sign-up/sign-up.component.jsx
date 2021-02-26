import React, { useState } from 'react';
import { connect } from 'react-redux';

import FromInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.compoent';

import { signUpStart } from '../../redux/user/user.action';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        signUpStart({ email, password, displayName });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-from" onSubmit={handleSubmit}>
                <FromInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FromInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FromInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FromInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
