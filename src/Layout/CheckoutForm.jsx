import { useElements, useStripe,CardElement } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../fetch/useAxiosSecure";
import { toast } from "react-toastify";

const CheckoutForm = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const stripe = useStripe();
    const elements = useElements();
    const [client, setClintSecret] = useState('')
    const location = useLocation();
    const  data = location.state;
    const navigate = useNavigate()
    console.log(data);
  
  
  
    useEffect(()=>{
        if(data.price)
        {
            axiosSecure.post('/create-payment-intent', {price: data.price})
            .then(res=>
                {
                    console.log(res.data.client);
                    setClintSecret(res.data.client);
                })

        }
    },[data.price, axiosSecure
    ])
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        client,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'unknown',
              email: user?.email,
            },
          },
        },
      );
      if (confirmError) {
        console.log('[error]', confirmError.message);
      } else {
        console.log('[paymentIntent]', paymentIntent);
        if(paymentIntent.status === 'succeeded')
        {
          const newData = {...data};
          console.log(newData)
          delete newData._id;

            const payment = {
                ...newData, transactionId: paymentIntent.id,
                date : new Date(),
            }

            axiosSecure.post('/payments', payment)
            .then(res=>
                {console.log(res)
            if(res.data.insertedId)
            {

              navigate('/dashboard/enrollclass')
                toast("payment success")
               

            }
        })



        }
      }
    };

   
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe} className="btn btn-outline btn-primary">
          Pay
        </button>
      </form>
    );
  };
export default CheckoutForm;  