import React, { Component } from 'react';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.compoent';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sigin-in.styles.scss';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (event) => {
        event.prevenDefault();

        this.state({ email: '', password: '' });
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

                <form action={this.handleSubmit}>
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
