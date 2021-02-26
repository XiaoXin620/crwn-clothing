import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.compoent';

import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/user.action';

import './sigin-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">SIGNIN</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        SIGN IN WITH GOOGle
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
