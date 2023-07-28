import { Elements } from "@stripe/react-stripe-js";
import SectionTittle from "../../../component/SectionTittle/SectionTittle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";


// const payment_PK=import.meta.env.VITE_payment_Gateway_PK
// const stripePromise = loadStripe(payment_PK);
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);

const Payment = () => {
    const [cart]=useCart()
    const totalPrice=cart.reduce((sum,item)=>sum+item.price,0)
    const price=parseFloat(totalPrice.toFixed(2))
  return (
    <div>
      <SectionTittle
        subHeading="please process "
        heading="payment"
      ></SectionTittle>

      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
