import React from "react";
import line from "../../assets/img/line.svg";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
  const [activeBtn, setActiveBtn] = React.useState("x");
  const handleActiveBtn = (active) => {
    setActiveBtn(active);
  };
  return (
    <div className="contact pt-[250px] pb-[100px] relative top-[-135px] mb-[-135px]">
      <div className="container">
        <div className="contact-holder w-[680px] max-w-full mx-auto">
          <div className="flex md:flex-row flex-col justify-between md:items-end items-start gap-3">
            <h2 className="text-white font-semibold text-[32px] md:text-[60px] lh-1">
              Let’s Get in Touch
            </h2>
            <a
              href="mailto:yinon@PrismBlocks.com"
              className="text-sm flex justify-end items-center gap-2"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2231 15.6582C12.987 15.8058 12.7214 15.8648 12.4852 15.8648C12.2491 15.8648 11.9835 15.8058 11.7473 15.6582L0 8.48584V18.0195C0 20.0561 1.65289 21.709 3.68949 21.709H21.3105C23.3471 21.709 25 20.0561 25 18.0195V8.48584L13.2231 15.6582Z"
                  fill="white"
                />
                <path
                  d="M21.3096 3.29102H3.68862C1.94718 3.29102 0.471379 4.53068 0.117188 6.18358L12.5139 13.7397L24.8811 6.18358C24.5269 4.53068 23.0511 3.29102 21.3096 3.29102Z"
                  fill="white"
                />
              </svg>

              <span>yinon@PrismBlocks.com</span>
            </a>
          </div>

          <div className="relative">
            <div className="handles flex flex-row md:mt-0 mt-5 md:flex-col justify-center items-center gap-10 md:absolute right-[-120px]">
              <Link
                to="https://www.linkedin.com/company/prismblocks"
                className="bg-[#181818] w-[90px] h-[90px] rounded-[10px] flex justify-center items-center"
              >
                <FaLinkedinIn className="text-[#fff] text-[30px]" />
              </Link>
              <Link
                to="https://twitter.com/Prism_Blocks"
                className="bg-[#181818] w-[90px] h-[90px] rounded-[10px] flex justify-center items-center"
              >
                <BsTwitterX className="text-[#fff] text-[30px]" />
              </Link>
              <Link
                to="https://t.me/PrismBlocks"
                className="bg-[#181818] w-[90px] h-[90px] rounded-[10px] flex justify-center items-center"
              >
                <FaTelegramPlane className="text-[#fff] text-[30px]" />
              </Link>
            </div>
            <div className="card contact-card">
              <form action="mailto:yinon@PrismBlocks.com" method="post" enctype="text/plain">
                <p className="text-white mb-2">Company/Project Name</p>
                <input
                  type="text"
                  className="contact-input w-full py-3 px-2"
                  name="company"
                  id=""
                />

                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>

                <p className="text-white mb-2">
                  How would you prefer I get in touch with you?
                </p>

                <div className="flex flex-wrap mt-3 justify-between items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleActiveBtn("x")}
                    className={`btn ${
                      activeBtn === "x"
                        ? "bg-[#fff] text-black border-[#fff]"
                        : "bg-[#1A1A1A] border-[#363636]"
                    } border px-[30px] py-[15px] rounded-full`}
                  >
                    X (twitter)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActiveBtn("telegram")}
                    className={`btn ${
                      activeBtn === "telegram"
                        ? "bg-[#fff] text-black border-[#fff]"
                        : "bg-[#1A1A1A] border-[#363636]"
                    } border px-[30px] py-[15px] rounded-full`}
                  >
                    Telegram
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActiveBtn("email")}
                    className={`btn ${
                      activeBtn === "email"
                        ? "bg-[#fff] text-black border-[#fff]"
                        : "bg-[#1A1A1A] border-[#363636]"
                    } border px-[30px] py-[15px] rounded-full`}
                  >
                    Email
                  </button>
                </div>

                <p className="text-white mb-2 mt-5">
                  What is your {activeBtn} handle?
                </p>
                <input
                  type="text"
                  className="contact-input w-full py-3 px-2"
                  name={activeBtn+"-handle"}
                  id=""
                />

                <p className="text-white mb-2 mt-5">
                  Please provide a link to your repository
                </p>
                <p className="text-white">
                  <span className="text-gray-400">
                    Please make sure to invite me{" "}
                    <span className="text-white">piyushshukla599</span>
                  </span>
                </p>
                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>
                <p className="text-white mb-2 mt-5">
                  What is the scope of the audit you'd like done? (What
                  contracts/folders are you looking to have reviewed)
                </p>
                <textarea
                  className="contact-input w-full py-3 px-2 mt-3"
                  name="scope"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>
                <p className="text-white mb-2 mt-5">
                  What type of protocol is your project?
                </p>
                <select
                  className="contact-input w-full py-3 px-2 mt-3"
                  name="protocol"
                  id=""
                >
                  <option value="">
                    What type of protocol is your project?
                  </option>
                  <option value="test">
                    test
                  </option>
                </select>
                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>
                <p className="text-white mb-2 mt-5">
                  Which chains will your project be deployed on?
                </p>
                <select
                  className="contact-input w-full py-3 px-2 mt-3"
                  name="chains"
                  id=""
                >
                  <option value="">
                    Which chains will your project be deployed on?
                  </option>
                  <option value="test">
                    test
                  </option>
                </select>
                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>

                <p className="text-white mb-2 mt-5">
                  How soon are you looking for help?
                </p>
                <br />
                <div className="grid grid-cols-2 gap-5">
                  <div className="">
                    <input type="radio" name="time" id="r1" />
                    <label
                      className="btn w-full block text-center border border-[#363636] bg-[#1A1A1A] md:px-[30px] py-[15px] rounded-full text-white"
                      htmlFor="r1"
                    >
                      0 - 1 weeks
                    </label>
                  </div>
                  <div className="">
                    <input type="radio" name="time" id="r2" />
                    <label
                      className="btn w-full block text-center border border-[#363636] bg-[#1A1A1A] md:px-[30px] py-[15px] rounded-full text-white"
                      htmlFor="r2"
                    >
                      1 - 2 weeks
                    </label>
                  </div>
                  <div className="">
                    <input type="radio" name="time" id="r3" />
                    <label
                      className="btn w-full block text-center border border-[#363636] bg-[#1A1A1A] md:px-[30px] py-[15px] rounded-full text-white"
                      htmlFor="r3"
                    >
                      2 - 4 weeks
                    </label>
                  </div>
                  <div className="">
                    <input type="radio" name="time" id="r4" />
                    <label
                      className="btn w-full block text-center border border-[#363636] bg-[#1A1A1A] md:px-[30px] py-[15px] rounded-full text-white"
                      htmlFor="r4"
                    >
                      1 - 3 months
                    </label>
                  </div>
                </div>
                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>
                <p className="text-white mb-2 mt-5">
                  What's your budget for this?
                </p>

                <div className="flex contact-input w-full px-2 mt-3">
                  <span className="inline-block px-4 text-2xl border-r py-3 border-[#363636]">
                    $
                  </span>
                  <input
                    type="text"
                    className="w-full py-3 px-4 bg-transparent border-0 outline-0"
                    name="budget"
                    id=""
                  />
                </div>
                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>
                <p className="text-white mb-2 mt-5">
                  If your project is a fork of another project, please let me
                  know what you forked from and include a link to the repository
                  if possible.
                </p>
                <textarea
                  className="contact-input w-full py-3 px-2 mt-3"
                  name="repo"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
                <div className="line my-5">
                  <img src={line} className="w-full" alt="" />
                </div>
                <p className="text-white mb-2 mt-5">
                  If you'd like to ask any questions or provide further details,
                  please enter them in this field
                </p>
                <textarea
                  className="contact-input w-full py-3 px-2 mt-3"
                  name="questions"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>

                <button
                  type="submit"
                  className="text-black mx-auto mt-5 block py-[20px] px-[35px] rounded-[10px] bg-[#fff] hover:bg-[#252525]"
                >
                  Click here to Get secured!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
