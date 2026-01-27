import Image from "next/image";
import bg from "@/public/assets/logo2.png";
import ebay from "@/public/assets/ebay-charity-logo-600x450-1-removebg-preview.png";
import stripe from "@/public/assets/stripe2.png";
import paypal from "@/public/assets/paypal-donate2-removebg-preview.png";
import Gpay from "@/public/assets/apple-pay.png";
import { FaCcStripe } from "react-icons/fa";

const GetInvolved = () => {
  return (
    <section className="bg-gray-100 dark:bg-black">
      <div className="container-width flex items-center flex-col gap-5 py-20">
        {/* title */}
        <h3 className="text-2xl sm:text-4xl mb-5 sm:mb-10 pb-2 border-b border-custom-orange">
          How Can You Get involved?
        </h3>

        {/* description */}
        <div className="perfectCenter flex-col gap-3 md:gap-0 sm:tracking-wider mb-5 sm:mb-10 md:leading-8 font-lato text-center">
          <p>Plenty if you set your heart to it!</p>
          <p>
            There are multiple ways to send in your charitable donations our
            way. Pick the one that suits you:
          </p>
          <p>
            <b>Come participate in our online funding programs:</b>
          </p>
        </div>

        {/* Payment systems */}
        <div className="flex items-center justify-center lg:justify-between flex-wrap gap-10 w-full">
          {/* Ebay */}
          <div className="cursor-pointer w-full sm:w-fit">
            <div className="relative w-full sm:w-64 h-24 overflow-hidden">
              <Image
                src={ebay}
                alt="ebay image"
                fill
                className="object-center object-contain"
              />
            </div>
            <h4 className="text-center font-extrabold font-lato">eBay</h4>
          </div>

          {/* stripe */}
          <div className="cursor-pointer w-full sm:w-fit">
            <div className="relative w-full sm:w-64 h-24 overflow-hidden">
              <Image
                src={stripe}
                alt="ebay image"
                fill
                className="object-center object-contain"
              />
            </div>
            <h4 className="text-center font-extrabold font-lato">Stripe</h4>
          </div>

          {/* paypal */}
          <div className="cursor-pointer w-full sm:w-fit">
            <div className="relative w-full sm:w-64 h-24 overflow-hidden">
              <Image
                src={paypal}
                alt="ebay image"
                fill
                className="object-center object-contain"
              />
            </div>
            <h4 className="text-center font-extrabold font-lato">PayPal</h4>
          </div>

          {/* Gpay */}
          <div className="cursor-pointer w-full sm:w-fit">
            <div className="relative w-full sm:w-64 h-24 overflow-hidden">
              <Image
                src={Gpay}
                alt="ebay image"
                fill
                className="object-center object-contain"
              />
            </div>
            <h4 className="text-center font-extrabold font-lato">GPay</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
