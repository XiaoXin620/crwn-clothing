import React from 'react';
import { connect } from 'react-redux';

import FromInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.compoent';

import { signUpStart } from '../../redux/user/user.action';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        signUpStart({ email, password, displayName });
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-from" onSubmit={this.handleSubmit}>
                    <FromInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FromInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FromInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FromInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
