import React from "react";
import arrow from "../../assets/img/arrow.png";
import t1 from "../../assets/img/t1.png";
import t2 from "../../assets/img/t2.png";
import t3 from "../../assets/img/t3.png";
import t4 from "../../assets/img/t4.png";
import t5 from "../../assets/img/t5.png";
// import t6 from "../../assets/img/t6.png";
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
      name: "Iqbal Sarker",
      designation: "PhD. Iqbal Sarker: Top Researcher in AI, ML, and Blockchain Technologies",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Phd. Iqbal Sarker, a distinguished figure in the realm of cybersecurity and AI, brings over a decade of research experience, including teachings and supervisions. Holding a Ph.D. from Swinburne University, Australia, and a Postdoctoral fellowship in Cybersecurity CRC & ECU, Australia, PhD. Sarker has established himself as a leader in his field.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            His prolific academic output includes over 100 research articles in prestigious conferences and journals, and he is a celebrated Springer book author. His work primarily focuses on AI/ML-based framework designs, underlined by his significant research impact and excellence, evidenced by an impressive H-index of 35+, i10-index of 70+, and over 7,000 citations.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ranked in the world's top 2% of research scientists by Elsevier & Stanford University, USA, PhD. Sarker's contributions have been recognized internationally, including receiving an IEEE Award in Data Science and Advanced Analytics.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            His global academia-industry collaborations are extensive, with notable positions such as Visiting Scholar at CSIRO Data61 & CRC, Australia. PhD. Sarker also contributes as a journal editor and a Springer/IEEE Conference PC member across various countries.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            With top skills in research, critical analysis, algorithm design, and scientific writing, PhD. Sarker's areas of interest encompass Cybersecurity, AI/XAI and Machine Learning, and Data Science. His work in digital twin and smart city applications, critical infrastructure, and human-AI teaming is particularly notable. His focus is on creating secure and intelligent systems that yield economic, commercial, or social benefits, aligning closely with the advancements and applications in blockchain technology.
          </p>
        </>
      ),
    },
    {
      id: 3,
      img: t3,
      name: "Akin Ipek",
      designation: "Data Scientist and ML/AI architecture with Expertise in Cybersecurity and Blockchain",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Akin Ipek, a proficient Data Analytics Consultant, has carved a niche in integrating machine learning with MlOps and software development within cloud infrastructure. His expertise extends over five years in Python development, where he excels in OOP, Design Patterns, Functional Programming, and Multiprocessing. His proficiency in the machine learning sphere is underpinned by his experience with tools like TensorFlow, Keras, PyTorch, PySpark, Ray, and MlLib.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Akin's skills also encompass digital product design, evident in his solid understanding of UI/UX design principles, typography, color theory, and proficiency in tools like Figma. He is adept in development processes involving React/Native/Next JS/TS, Tailwind, GraphQL, REST API, and database management with NoSQL/SQL. His expertise in productionalization, particularly in CI/CD, is complemented by his experience with cloud platforms such as AWS, Azure, and Firebase.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Significantly, Akin has led development projects in cutting-edge areas. He has been at the forefront as the lead developer in Edge Device ML Software development within the Computer Vision field. His accomplishments in the realm of blockchain are notable, having developed decentralized applications (DApps) on Ethereum and Polygon Networks, showcasing his expertise in Solidity development.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Akin's diverse skill set, encompassing machine learning, software development, UI/UX design, and blockchain technology, positions him uniquely in the intersection of cybersecurity and blockchain, where he contributes to innovative and secure data solutions.
          </p>
        </>
      ),
    },
    {
      id: 4,
      img: t4,
      name: "Piyush Shukla",
      designation: "Honored White-hat Hacker Specializing in Blockchain Security",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Piyush Shukla is a dedicated Cyber Security Enthusiast and a White-hat Hacker, specializing in the realm of blockchain security. His expertise encompasses a comprehensive range of cybersecurity practices, focusing on smart contract security and wallet safety. Piyush's proficiency in auditing and ensuring the security of blockchain technologies sets him apart in this rapidly evolving field.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            His experience includes identifying and resolving vulnerabilities in blockchain infrastructures, a critical aspect considering the burgeoning importance of decentralized technologies. Piyush is adept at using advanced tools like Foundry, Hardhat, and Slither, which are essential for smart contract analysis and security assessments.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In addition to his blockchain-focused skills, Piyush's broader cybersecurity capabilities are demonstrated through his successful penetration testing and vulnerability assessments, covering web and mobile applications and API security. His ability to frequently identify Exploits in platforms like Google, Apple, and Microsoft underscores his expertise and ethical approach to hacking.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Piyush's track record includes a diverse array of security exploits identified and resolved, such as account takeovers, injection vulnerabilities, privilege escalations, Local File Inclusion (LFI), and Cross-Site Scripting (XSS). His knowledge of the OWASP Top 50 vulnerabilities further cements his status as a comprehensive security expert.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            As a Whitehat Hacker, Piyush Shukla's commitment to ethical practices in enhancing blockchain security is invaluable in an era where digital security is paramount. His role in safeguarding over 10 companies demonstrates his significant impact on the cybersecurity landscape, especially in protecting and strengthening blockchain infrastructures.
          </p>

        </>
      ),
    },
    {
      id: 5,
      img: t5,
      name: "Ashmeet Singh",
      designation: "Senior Blockchain Developer and Cybersecurity Specialist",
      description: (
        <>
          <p className="my-10 text-white text-[16px] md:text-xl">
            Ashmeet Singh, a Blockchain Developer oriented to cybersecurity, has an impressive background marked by internships at large, prestigious companies. His expertise is deeply rooted in machine learning, MlOps, and software development within cloud infrastructures.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Ashmeet's extensive Python development experience, spanning over five years, includes working with advanced machine learning tools such as TensorFlow, Keras, PyTorch, PySpark, Ray, and MlLib. This technical prowess is further enhanced by his blockchain development skills, particularly evident in his projects involving Ethereum, Polygon networks, and Solidity.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            In his project portfolio, Ashmeet developed a Coin Market Cap Clone and led an NFT Marketplace project, showcasing his capabilities in blockchain technologies like Polygon, Hardhat, Ethers.js, and IPFS. His role as Head of Blockchain at Qoodo.io and Blockchain Developer at LOGISTIC INFOTECH PVT LTD underlines his proficiency in areas such as code review, TypeScript, JavaScript frameworks, and cryptocurrency.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            Notably, Ashmeet completed internships at renowned organizations like Intel Corporation, where he served as an Intel Student Ambassador, and at Goldman Sachs and Microsoft through their Engineering Virtual Programs. He also contributed to cybersecurity initiatives through an internship with Gurugram Police.
          </p>
          <p className="mb-10 tetx-white text-[16px] md:text-xl">
            His participation in development and mentoring roles, combined with his internships at top-tier companies, demonstrates Ashmeet Singh's well-rounded expertise in blockchain and cybersecurity, making him a valuable asset in these dynamic fields.
          </p>
        </>
      ),
    },
    // {
    //   id: 6,
    //   img: t6,
    //   name: "Ian McCann",
    //   designation: "Data Scientist Specializing in AI, ML, and Blockchain",
    //   description: (
    //     <>
    //       <p className="my-10 text-white text-[16px] md:text-xl">
    //         Ian McCann, a seasoned Data Scientist, has a rich background in
    //         Mathematics, Physics, and Programming. His academic path includes a
    //         Masters in Computational Science and a Bachelors in Physics and
    //         Applied Mathematics, leading to an intensive Data Science Immersive
    //         program at Galvanize.
    //       </p>
    //       <p className="mb-10 tetx-white text-[16px] md:text-xl">
    //         In his professional career, Ian made significant strides at
    //         Conversica over five years, focusing on ML and AI. He was
    //         instrumental in developing deep learning frameworks and automating
    //         data processes, integrating LLMs and the GPT-3 API for advanced
    //         applications.
    //       </p>
    //       <p className="mb-10 tetx-white text-[16px] md:text-xl">
    //         Ian's entrepreneurial spirit shone in the web3 space, where he not
    //         only created PostThread, a decentralized social media platform, but
    //         also founded Unstable Labs, developing a text-to-image NFT generator
    //         with Stable Diffusion. His innovative efforts were further
    //         recognized when he won first place in a Polkadot hackathon,
    //         highlighting his prowess in Blockchain technology.
    //       </p>
    //       <p className="mb-10 tetx-white text-[16px] md:text-xl">
    //         Ian's passion for AI, ML, and Blockchain drives his continuous
    //         contributions to the technological revolution, making him a notable
    //         figure in these fields.
    //       </p>
    //     </>
    //   ),
    // },
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
                <img src={item.img} className={`team-img rounded-full ${item.id - 1 === activeMember ? "" : "bnw"}`} alt="" />
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
