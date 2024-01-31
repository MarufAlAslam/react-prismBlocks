import React from "react";
import arrow from "../../assets/img/arrow.png";
import t1 from "../../assets/img/t1.png";
import t2 from "../../assets/img/t2.png";
import t3 from "../../assets/img/t3.png";
import t4 from "../../assets/img/t4.png";
import t5 from "../../assets/img/t5.png";
import t6 from "../../assets/img/t6.png";
import frame from "../../assets/img/frame.png";
// import dp from "../../assets/img/dp.png";
import pp from "../../assets/img/pp.png";

const TeamHero = () => {
  const data = [
    {
      id: 1,
      img: t1,
      name: "Ian McCann",
      designation: "Data Scientist Specializing in AI, ML, and Blockchain",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Ian McCann, a seasoned Data Scientist, has a rich background in
            Mathematics, Physics, and Programming. His academic path includes a
            Masters in Computational Science and a Bachelors in Physics and
            Applied Mathematics, leading to an intensive Data Science Immersive
            program at Galvanize.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In his professional career, Ian made significant strides at
            Conversica over five years, focusing on ML and AI. He was
            instrumental in developing deep learning frameworks and automating
            data processes, integrating LLMs and the GPT-3 API for advanced
            applications.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's entrepreneurial spirit shone in the web3 space, where he not
            only created PostThread, a decentralized social media platform, but
            also founded Unstable Labs, developing a text-to-image NFT generator
            with Stable Diffusion. His innovative efforts were further
            recognized when he won first place in a Polkadot hackathon,
            highlighting his prowess in Blockchain technology.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's passion for AI, ML, and Blockchain drives his continuous
            contributions to the technological revolution, making him a notable
            figure in these fields.
          </p>
        </>
      ),
    },
    {
      id: 2,
      img: t2,
      name: "Ian McCann",
      designation: "Data Scientist Specializing in AI, ML, and Blockchain",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Ian McCann, a seasoned Data Scientist, has a rich background in
            Mathematics, Physics, and Programming. His academic path includes a
            Masters in Computational Science and a Bachelors in Physics and
            Applied Mathematics, leading to an intensive Data Science Immersive
            program at Galvanize.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In his professional career, Ian made significant strides at
            Conversica over five years, focusing on ML and AI. He was
            instrumental in developing deep learning frameworks and automating
            data processes, integrating LLMs and the GPT-3 API for advanced
            applications.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's entrepreneurial spirit shone in the web3 space, where he not
            only created PostThread, a decentralized social media platform, but
            also founded Unstable Labs, developing a text-to-image NFT generator
            with Stable Diffusion. His innovative efforts were further
            recognized when he won first place in a Polkadot hackathon,
            highlighting his prowess in Blockchain technology.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's passion for AI, ML, and Blockchain drives his continuous
            contributions to the technological revolution, making him a notable
            figure in these fields.
          </p>
        </>
      ),
    },
    {
      id: 3,
      img: t3,
      name: "Ian McCann",
      designation: "Data Scientist Specializing in AI, ML, and Blockchain",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Ian McCann, a seasoned Data Scientist, has a rich background in
            Mathematics, Physics, and Programming. His academic path includes a
            Masters in Computational Science and a Bachelors in Physics and
            Applied Mathematics, leading to an intensive Data Science Immersive
            program at Galvanize.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In his professional career, Ian made significant strides at
            Conversica over five years, focusing on ML and AI. He was
            instrumental in developing deep learning frameworks and automating
            data processes, integrating LLMs and the GPT-3 API for advanced
            applications.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's entrepreneurial spirit shone in the web3 space, where he not
            only created PostThread, a decentralized social media platform, but
            also founded Unstable Labs, developing a text-to-image NFT generator
            with Stable Diffusion. His innovative efforts were further
            recognized when he won first place in a Polkadot hackathon,
            highlighting his prowess in Blockchain technology.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's passion for AI, ML, and Blockchain drives his continuous
            contributions to the technological revolution, making him a notable
            figure in these fields.
          </p>
        </>
      ),
    },
    {
      id: 4,
      img: t4,
      name: "Ian McCann",
      designation: "Data Scientist Specializing in AI, ML, and Blockchain",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Ian McCann, a seasoned Data Scientist, has a rich background in
            Mathematics, Physics, and Programming. His academic path includes a
            Masters in Computational Science and a Bachelors in Physics and
            Applied Mathematics, leading to an intensive Data Science Immersive
            program at Galvanize.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In his professional career, Ian made significant strides at
            Conversica over five years, focusing on ML and AI. He was
            instrumental in developing deep learning frameworks and automating
            data processes, integrating LLMs and the GPT-3 API for advanced
            applications.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's entrepreneurial spirit shone in the web3 space, where he not
            only created PostThread, a decentralized social media platform, but
            also founded Unstable Labs, developing a text-to-image NFT generator
            with Stable Diffusion. His innovative efforts were further
            recognized when he won first place in a Polkadot hackathon,
            highlighting his prowess in Blockchain technology.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's passion for AI, ML, and Blockchain drives his continuous
            contributions to the technological revolution, making him a notable
            figure in these fields.
          </p>
        </>
      ),
    },
    {
      id: 5,
      img: t5,
      name: "Ian McCann",
      designation: "Data Scientist Specializing in AI, ML, and Blockchain",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Ian McCann, a seasoned Data Scientist, has a rich background in
            Mathematics, Physics, and Programming. His academic path includes a
            Masters in Computational Science and a Bachelors in Physics and
            Applied Mathematics, leading to an intensive Data Science Immersive
            program at Galvanize.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In his professional career, Ian made significant strides at
            Conversica over five years, focusing on ML and AI. He was
            instrumental in developing deep learning frameworks and automating
            data processes, integrating LLMs and the GPT-3 API for advanced
            applications.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's entrepreneurial spirit shone in the web3 space, where he not
            only created PostThread, a decentralized social media platform, but
            also founded Unstable Labs, developing a text-to-image NFT generator
            with Stable Diffusion. His innovative efforts were further
            recognized when he won first place in a Polkadot hackathon,
            highlighting his prowess in Blockchain technology.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's passion for AI, ML, and Blockchain drives his continuous
            contributions to the technological revolution, making him a notable
            figure in these fields.
          </p>
        </>
      ),
    },
    {
      id: 6,
      img: t6,
      name: "Ian McCann",
      designation: "Data Scientist Specializing in AI, ML, and Blockchain",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Ian McCann, a seasoned Data Scientist, has a rich background in
            Mathematics, Physics, and Programming. His academic path includes a
            Masters in Computational Science and a Bachelors in Physics and
            Applied Mathematics, leading to an intensive Data Science Immersive
            program at Galvanize.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In his professional career, Ian made significant strides at
            Conversica over five years, focusing on ML and AI. He was
            instrumental in developing deep learning frameworks and automating
            data processes, integrating LLMs and the GPT-3 API for advanced
            applications.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's entrepreneurial spirit shone in the web3 space, where he not
            only created PostThread, a decentralized social media platform, but
            also founded Unstable Labs, developing a text-to-image NFT generator
            with Stable Diffusion. His innovative efforts were further
            recognized when he won first place in a Polkadot hackathon,
            highlighting his prowess in Blockchain technology.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ian's passion for AI, ML, and Blockchain drives his continuous
            contributions to the technological revolution, making him a notable
            figure in these fields.
          </p>
        </>
      ),
    },
  ];

  const [activeMember, setActiveMember] = React.useState(0);
  const changeActive = (index) => {
    setActiveMember(index);
  };
  return (
    <div className="team-hero py-[75px]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-white text-[60px] font-semibold">Our Team</h2>
          <p className="mb-[50px]">
            Each and every person in this amazing team is dedicated to a safer
            blockchain future. <br />
            Our dream? Non-vulnerable space
          </p>

          <img src={arrow} className="block mx-auto mb-[50px]" alt="" />

          <div className="flex justify-center items-center gap-4 md:gap-10">
            {data.map((item, index) => (
              <div
                className="item cursor-pointer"
                onClick={() => changeActive(index)}
                key={item.id}
              >
                <img src={item.img} className={`team-img rounded-full ${item.id-1 === activeMember ? "" : "bnw"}`} alt="" />
              </div>
            ))}
          </div>

          <div className="dp relative">
            <img src={frame} className="block mx-auto" alt="" />
            <img
              src={data[activeMember].img}
              className="absolute rounded-full w-[150px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              alt=""
            />
          </div>

          <div className="details relative top-[-50px]">
            <h3 className="text-xl font-semibold">{data[activeMember].name}</h3>
            <p className="text-white w-[300px] mx-auto">
              {data[activeMember].designation}
            </p>
            <img src={pp} className="block mx-auto" alt="" />

            {data[activeMember].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
