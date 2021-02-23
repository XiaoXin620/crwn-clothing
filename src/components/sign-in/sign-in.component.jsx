import React, { Component } from 'react';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.compoent';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sigin-in.styles.scss';

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.error(error);
        }

    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">SIGNIN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            SIGN IN WITH GOOGle
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
