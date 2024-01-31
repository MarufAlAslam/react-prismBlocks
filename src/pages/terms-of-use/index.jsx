import React from "react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="PrivacyPolicy py-10">
      <div className="container">
        <h2 className="text-4xl text-center font-bold">Terms of Use</h2>

        <div className="line w-[100px] h-[3px] bg-white mx-auto my-3"></div>

        <div className="contents-holder mt-10">
          <div className="content">
            <p className="text-lg text-white">
              Welcome to PrismBlocks. By accessing or using our website and
              services, you agree to be bound by these terms and conditions.
            </p>

            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                1. Acceptance of Terms
              </h3>
              <p className="text-white">
                These Terms of Use govern your access to and use of the
                PrismBlocks website and any security news, articles,
                newsletters, products, services, and information (collectively,
                "Services"). By accessing or using the Services, you signify
                your agreement to these Terms.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                2. Use of the Site
              </h3>
              <p className="text-white">
                You agree to use the Site only for lawful purposes related to
                seeking cybersecurity information and services. The content on
                our website, including articles and blog posts, is provided for
                general information only. It is not intended to amount to advice
                on which you should rely.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                3. Intellectual Property Rights
              </h3>
              <p className="text-white">
                All content on the Site, including text, graphics, logos, and
                software, is the property of PrismBlocks or its content
                suppliers and protected by international copyright laws.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                4. Prohibited Use
              </h3>
              <p className="text-white">
                ou may not use the Site for any of the following purposes:
                <br />
                <br />
                Engaging in any activity that disrupts or interferes with our
                Services, including the servers and networks to which our
                Services are connected. Attempting to copy, duplicate,
                reproduce, sell, trade, or resell our resources. Using the Site
                or Services to send unauthorized advertising or spam. Harvesting
                personal data from the Site without consent.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                5. Disclaimer of Warranties
              </h3>
              <p className="text-white">
                You understand and agree that your use of the Site and any
                Services or content provided is at your own risk. Services are
                provided to you "AS IS" and "AS AVAILABLE."
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                6. Limitation of Liability
              </h3>
              <p className="text-white">
                To the maximum extent permitted by law, PrismBlocks shall not be
                liable for any direct, indirect, incidental, special,
                consequential, or exemplary damages resulting from your use of
                the Site or Services.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                7. Indemnification
              </h3>
              <p className="text-white">
                You agree to indemnify and hold harmless PrismBlocks and its
                affiliates, officers, agents, employees, or partners from any
                claim or demand, including reasonable attorney fees, made by any
                third party due to or arising out of your use of the Site or
                Services, your violation of these Terms, or your violation of
                any rights of another.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                8. Modifications to Terms
              </h3>
              <p className="text-white">
                PrismBlocks reserves the right to review and change these Terms
                at any time. Your continued use of the Site will mean that you
                accept those changes.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                9. Governing Law
              </h3>
              <p className="text-white">
                These Terms shall be governed and construed in accordance with
                the laws of the jurisdiction in which PrismBlocks operates,
                without regard to its conflict of law provisions.
              </p>
            </div>
            <div className="list pl-5 mt-8">
              <h3 className="text-2xl mb-2 font-bold text-white">
                10. Contact Information
              </h3>
              <p className="text-white">
                For any questions about these Terms, please contact us at &nbsp;
                <Link
                  className="text-orange-500"
                  to={"mailto:Yinon@prismblocks.com"}
                >
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

export default TermsOfUse;
