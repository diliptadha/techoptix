import { Strings } from "@/constant";
import "../app/globals.css";
import React, { useState } from "react";
import Header from "@/Component/header";
import { Footer } from "@/Component/footer";

const Terms = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold mb-8 text-[#32315D] border-b-2 border-[#32315D] pb-2">
          Terms and Conditions
        </h1>
        <div className="space-y-6 text-gray-700">
          {/* <Card className="shadow-md"> */}
          {/* <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            General Terms
          </h2>
          {/* </CardHeader> */}
          {/* <CardContent> */}
          <p className="mb-4">
            All goods displayed on the websites by the seller (price quoted) are
            non-binding and subject to change. The prices quoted don't contain
            delivery and postal charges but are inclusive of taxes.
          </p>
          <p className="mb-4">
            All offers and discounts mentioned in any promotional data can be
            availed only on the website Techoptix.in and for web customers only.
            Incase if you receive any damaged product, intimate us within
            48-hrs, or else exchange/replacement cannot be entertained.
          </p>
          <p className="mb-4">
            Once you order for a product, you are bound to these terms and
            conditions. On the completion of sale, the customers have to use the
            web credit assigned within 1 stipulated year for any exchange or
            return.
          </p>
          <p>
            The Customer can exchange the products to a maximum of one time
            after purchase. All goods shall remain our property until all of
            your contractual obligations towards us have been fulfilled.
          </p>
          {/* </CardContent> */}
          {/* </Card> */}

          {/* <Card className="shadow-md"> */}
          {/* <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Return and Refund Policy
          </h2>
          {/* </CardHeader> */}
          {/* <CardContent> */}
          <h3 className="text-xl font-semibold mb-2 text-[#42b7e9]">
            CANCELLATION, RETURN/EXCHANGE AND WARRANTY POLICIES
          </h3>
          <p className="mb-4">
            TECHOPTIX genuinely cares for its customers. Therefore, we always
            try to ensure customers step out of our doors happy. To ensure the
            same, we offer easy full and partial cancellation, return/exchange
            and warranty policies to our customers as enumerated underneath.
            However, please note that we have no refund policy.
          </p>
          <h4 className="text-lg font-semibold mb-2 text-[#42b7e9]">
            Cancellation Policy
          </h4>
          <p className="mb-4">
            A customer can cancel the order within six(6) hours of placing the
            order online. There is no such cancellation allowed for offline
            customers. This can be done by simply clicking on the cancellation
            button available on the order confirmation email sent to him/her.
          </p>
          <h4 className="text-lg font-semibold mb-2 text-[#42b7e9]">
            Return and/or Exchange
          </h4>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              Return and/or Exchange are applicable on Frames/Sunglasses and
              Contact Lenses only.
            </li>
            <li>
              Contact Lenses shall be eligible for exchange if returned in
              sealed condition only and within 7 days.
            </li>
            <li>
              For any issues pertaining to prescription lenses, please contact
              our customer support team first and they shall be happy to guide
              you regarding further processes.
            </li>
            <li>
              If the customer has got the ordered frame fit with a lens from
              some other company (except Zeiss Vision Centre), then we shall not
              take responsibility for any fitting damage.
            </li>
            <li>
              Return is only applicable for spectacles and not sunglasses.
            </li>
          </ul>
          {/* </CardContent> */}
          {/* </Card> */}

          {/* <Card className="shadow-md">
            <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Shipping Policy
          </h2>
          {/* </CardHeader>
            <CardContent> */}
          <p>
            Our shipping policy states that once we receive your order, it will
            take us 5–6 working days to deliver it to your door. You can avail
            of both prepaid and cash-on-delivery options. It will take 5 days
            for prepaid orders and 6 days for cash on delivery. In the case of
            cash on delivery, the payment has to be made at the time of
            delivery.
          </p>
          {/* </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Billing Terms and Conditions
          </h2>
          {/* </CardHeader>
            <CardContent> */}
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All goods displayed on the websites by the seller (price quoted)
              are non-binding and subject to change.
            </li>
            <li>
              The prices quoted don't contain delivery and postal charges but
              are inclusive of GST.
            </li>
            <li>
              No Replacement / Exchange will be entertained for Toric Lenses and
              Open Box Contact Lenses.
            </li>
            <li>
              All offers and discounts mentioned in any promotional data can be
              availed only on the website techoptix.in and for web customers
              only.
            </li>
            <li>
              Incase you receive any damaged product, intimate us within 48-hrs,
              or else exchange/replacement cannot be entertained.
            </li>
            <li>
              Once you order for a product, you are bound to these terms and
              conditions.
            </li>
            <li>
              On the completion of sale, the customer has to use the web credit
              assigned within 1 stipulated year for any exchange or return.
            </li>
            <li>
              The Customer can exchange the products to a maximum of two times
              after purchase
            </li>
            <li>
              All goods shall remain our property until all of your contractual
              obligations towards us have been fulfilled.
            </li>
            <li>
              International Shipping Charge slabs: Order value till 24,000 INR
              will be 1750, Order value less than 48000 INR will be 3500 and
              Order Value more than 48,000 INR will be 5250
            </li>
          </ul>
          {/* </CardContent>
          </Card> */}

          <p className="text-sm text-gray-500 mt-8">
            For any further assistance call 9321308640 or email cs@techoptix.in
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
