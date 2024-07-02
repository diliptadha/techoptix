import { Strings } from "@/constant";
import "../app/globals.css";
import React, { useState } from "react";
import Header from "@/Component/header";
import { Footer } from "@/Component/footer";

const Privacy = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearch={setSearch} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-[#32315D] border-b-2 border-[#32315D] pb-2">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-gray-700">
          <p className="mb-4">
            Our privacy policy aims at protecting the privacy of any person who
            visits and accesses our website. The privacy policy is for you, to
            let you know how we protect the privacy of each visitor like you.
          </p>

          {/* <Card className="shadow-md">
          <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Personal Information
          </h2>
          {/* </CardHeader>
          <CardContent> */}
          <p className="mb-4">
            Our website does not collect any personal information about our
            visitors unless the visitor voluntarily shares the same with us by
            filling in the details in the contact form given on our website.
            Personal information in this scenario refers to the visitor's
            identity which is apparent and can be ascertained or determined
            easily. Personal information may comprise of name, e-mail address,
            residence or office address, phone numbers, and other contact
            details.
          </p>
          <p className="mb-4">
            When you voluntarily provide us with such personal information
            through the contact form provided on our website, we take it ahead
            to fulfill your request or answer your query. We may contact you on
            your contact details like email address or phone numbers to update
            you on our products, special offers and the like unless you request
            us not to do so.
          </p>
          <p>
            Your personal information is not disclosed to any third party unless
            it is absolutely necessary to take your request ahead.
          </p>
          {/* </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Automatic Collection of Data and its Usage
          </h2>
          {/* </CardHeader>
          <CardContent> */}
          <p className="mb-4">
            Our website server automatically tracks and collects certain
            browsing details of any person who visits our website to monitor and
            evaluate our website performance in order to improve the experience
            for our users in the future. Such data will only be used by
            TECHOPTIX and may include:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              The Internet Protocol address or the domain name of the internet
              service provider from which our website is being accessed.
            </li>
            <li>Date and time when our website has been accessed.</li>
            <li>Duration of the usage.</li>
            <li>
              The version and type of the operating system and web browser of
              the system from which our website is being accessed.
            </li>
            <li>
              The record of selection of pages or sections of the website
              visited.
            </li>
            <li>The documents downloaded from the website.</li>
            <li>
              The Internet address of the website visited just prior to our
              website.
            </li>
          </ul>
          <p>
            The website server data as mentioned before may be accessed by a
            third party who has been appointed by us for the maintenance and
            administration of the website. However, in doing so, we do not
            disclose any personal information or the identity of a visitor to
            such a third party. Any third party appointed by us has to comply
            with the above-mentioned data protection standards.
          </p>
          {/* </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Collection of Information by Third-Party Sites
          </h2>
          {/* </CardHeader>
          <CardContent> */}
          <p>
            Our website may contain advertisements or links to other websites.
            We do not exercise any control over the privacy policy of such
            external websites. Any visitor who clicks such external links or
            advertisements must be aware of the privacy policy of the other
            website as that can be entirely different from that of ours. We are
            not liable for the privacy policy of any such external websites
            whose links appear on our website.
          </p>
          {/* </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">Cookies</h2>
          {/* </CardHeader>
          <CardContent> */}
          <p className="mb-4">
            We use cookies on our website. A cookie is a piece of data stored on
            a visitor's system's hard drive that helps to improve access to
            websites that the visitor has already visited. Cookies help to
            identify browsing information. However, the usage of such cookies
            does not disclose any information on our website.
          </p>
          <p className="mb-4">
            If you visit our website, information may be saved on your system
            with the help of these cookies which enables us to identify your
            machine automatically during your next visit to our website. This
            helps us to enhance your browsing experience.
          </p>
          <p>
            If you wish to not get these cookies placed on your system by our
            website then set up the internet browser in a manner so that it
            either deletes or blocks the cookies or helps you to identify such
            websites that use cookies.
          </p>
          {/* </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Change in Our Privacy Policy
          </h2>
          {/* </CardHeader>
          <CardContent> */}
          <p>
            Our Privacy Policy may get modified or change from time to time. You
            are requested to go through our privacy policy each time before
            browsing the website.
          </p>
          {/* </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader> */}
          <h2 className="text-2xl font-semibold text-[#32315D]">
            Confirmation
          </h2>
          {/* </CardHeader>
          <CardContent> */}
          <p>
            Any visitor on our website must confirm that they have read and
            understood our privacy policy entirely and have visited our website
            after being satisfied with the same. Browsing our website is an ipso
            facto acceptance of our terms and conditions.
          </p>
          {/* </CardContent>
        </Card> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
