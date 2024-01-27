import React from "react";
import { FaSearch } from "react-icons/fa";

const NewsHero = () => {
  return (
    <div className="news-hero py-[80px]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-white font-semibold text-[32px] md:text-[60px]">
            News and Resources
          </h2>
          <p>
            Here you will get updated, fine and OG - articles,
            <br className="md:block hidden" />
            papers, studies and reports.
          </p>

          <form
            action=""
            className="mt-10 flex justify-between items-center max-w-full w-[400px] mx-auto bg-white p-2 rounded-[10px]"
          >
            <input
              type="text"
              className="border-0 w-full outline-0 py-1 px-2 text-black bg-white"
              name=""
              id=""
            />
            <button className="btn bg-black min-w-[40px] min-h-[40px] rounded-[10px] flex justify-center items-center w-[40px]">
              <FaSearch className="text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
