import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy py-10">
      <div className="container">
        <h2 className="text-4xl text-center font-bold">Privacy Policy</h2>
        <p className="text-xl text-center mt-2 text-gray-200">
          Effective Date: 1/2/24
        </p>

        <div className="line w-[100px] h-[3px] bg-white mx-auto my-3"></div>

        <div className="contents-holder mt-10">
          <div className="content">
            <p className="text-lg text-white">
              At PrismBlocks, we are committed to safeguarding the privacy of
              our website visitors and service users. This policy applies where
              we are acting as a data controller with respect to the personal
              data of our website visitors and service users; in other words,
              where we determine the purposes and means of the processing of
              that personal data.
            </p>

            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                1. Data Collection
              </h3>
              <p className="text-white">
                We collect and process the following data:
                <br />
                <br />
                Email Address: When you subscribe to our newsletter or request
                information about our services, we collect your email address.
                We use this to provide you with the content, services, and
                information that you have requested and to communicate with you
                about cybersecurity and blockchain security updates.
                <br />
                <br />
                IP Address: We collect your IP address automatically when you
                visit our site. This helps us diagnose problems with our server,
                manage our website, track usage statistics, and improve our
                service to better match your needs.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                2. Use of Personal Data
              </h3>
              <p className="text-white">
                We will use your personal information solely for the purposes of
                providing you with our services, including:
                <br />
                <br />
                Sending you newsletters and alerts that you have specifically
                requested. Ensuring the security of our website and services.
                Maintaining back-ups of our databases and communicating with
                you.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                3. Data Retention
              </h3>
              <p className="text-white">
                We will retain your personal information only for as long as is
                necessary for the purposes set out in this policy. We will
                retain and delete your personal information in accordance with
                our internal data retention policies and any applicable legal
                obligations.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                4. Your Rights
              </h3>
              <p className="text-white">
                You have the right to:
                <br />
                <br />
                Access your personal data. <br />
                Ensure the accuracy of your personal data. <br />
                Have incomplete or inaccurate data corrected. <br />
                Receive your data in a portable format. <br />
                Object to the processing of your personal data. <br />
                Request the deletion of personal data.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                5. Third-Party Access to Your Data
              </h3>
              <p className="text-white">
                We do not share your personal information with any third
                parties, except as necessary to provide our services or as
                required by law.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                6. Security of Personal Data
              </h3>
              <p className="text-white">
                We take the security of your personal data seriously and
                implement appropriate technical and organizational measures to
                prevent unauthorized access, disclosure, modification, or
                unauthorized destruction of your data.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                7. Amendments
              </h3>
              <p className="text-white">
                We may update this policy from time to time by publishing a new
                version on our website. You should check this page occasionally
                to ensure you are happy with any changes to this policy.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                8. Our Details
              </h3>
              <p className="text-white">
                This website is owned and operated by PrismBlocks. If you have
                any questions about our Privacy Policy, please contact us via &nbsp;
                <Link className="text-orange-500" to={"mailto:Yinon@prismblocks.com"}>
                  Yinon@prismblocks.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
