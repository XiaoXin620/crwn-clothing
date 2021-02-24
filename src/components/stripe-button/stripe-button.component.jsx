import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

class StripeCheckoutButton extends React.Component {
    onToken = (token) => {
        console.log(token);
        alert('payment Successful');
    };
    render() {
        const { price } = this.props;
        const priceForStripe = price * 100;
        const publishableKey =
            'pk_test_51IOLuNGdw91AnCKMLswFO3IeybVOCQvcuMi6iRcaat5LbLHBOOdZcJ32LVRN5j1V1X35wLvxkYUCHDUKBMAhVeOF00w33Jr5JS';
        return (
            <StripeCheckout
                label="Pay Now"
                name="CRWN Clothing Ltd."
                billingAddress
                shippingAddress
                image="https://svgshare.com/i/CUz.svg"
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={this.onToken}
                stripeKey={publishableKey}
            />
        );
    }
}

export default StripeCheckoutButton;
