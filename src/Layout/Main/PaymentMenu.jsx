import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Инициализация Stripe
const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Отправка данных на сервер для завершения оплаты
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 2 }}>
        <CardElement 
          options={{
            style: {
              base: {
                color: '#ffffff', // белый цвет для текста
                '::placeholder': {
                  color: 'gray', // белый цвет для placeholder
                },
              },
            },
          }}
        />
      </Box>
      <Button className="mt-40"type="submit" variant="contained" color="primary" disabled={!stripe}>
        Добавить
      </Button>
    </form>
  );
};

const PaymentMenu = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentMenu;

