import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.compoent';

import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/user.action';

import './sigin-in.styles.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        const { googleSignInStart } = this.props;
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);
