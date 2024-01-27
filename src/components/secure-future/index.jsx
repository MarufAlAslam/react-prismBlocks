import React from "react";
import SecuredBtn from "../secured-btn";

const SecureFuture = () => {
  return (
    <div className="secure relative py-[145px]">
      <div className="container">
        <div className="lg:w-1/2">
          <h2 className="text-[32px] mb-[30px] md:text-[42px] font-semibold">
            Secure Your Future with Our Advanced Blockchain Protection
          </h2>

          <SecuredBtn />
        </div>

        <div className="mt-[45px] md:absolute right-0 bottom-0 md:pl-[50px] md:py-[60px] md:pr-[150px] p-[20px] bg-black w-full md:w-[40%] ml-auto md:p-5 text-white">
          Ready to elevate your blockchain security? Join us on the forefront of
          innovation and ensure a safer digital future. Explore our AI-powered
          solutions and experience the next level of protection. Get started
          today for a secure tomorrow!
        </div>
      </div>
    </div>
  );
};

export default SecureFuture;
