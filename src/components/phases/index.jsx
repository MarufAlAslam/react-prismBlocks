import React from "react";
import phaseImg1 from "../../assets/img/phase-img.png";
import phaseImg2 from "../../assets/img/phase2.png";
import phaseImg3 from "../../assets/img/phase3.png";
import phaseImg4 from "../../assets/img/phase4.png";
import phaseImg5 from "../../assets/img/phase5.png";
import phaseImg6 from "../../assets/img/phase6.png";
import phaseImg7 from "../../assets/img/phase7.png";
import phaseImg8 from "../../assets/img/phase8.png";
import { FaCheck } from "react-icons/fa";
const Phases = () => {
  const [activePhase, setActivePhase] = React.useState(1);

  const handlePhaseChange = (phase) => {
    setActivePhase(phase);
  };
  return (
    <div className="phases">
      <div className="phase-changer border-b border-[#616161] py-[45px]">
        <div className="container">
          <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-3">
            <button
              onClick={() => handlePhaseChange(1)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 1 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 1</span>
            </button>
            <button
              onClick={() => handlePhaseChange(2)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 2 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 2</span>
            </button>
            <button
              onClick={() => handlePhaseChange(3)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 3 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 3</span>
            </button>
            <button
              onClick={() => handlePhaseChange(4)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 4 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 4</span>
            </button>
            <button
              onClick={() => handlePhaseChange(5)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 5 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 5</span>
            </button>
            <button
              onClick={() => handlePhaseChange(6)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 6 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 6</span>
            </button>
            <button
              onClick={() => handlePhaseChange(7)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 7 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 7</span>
            </button>
            <button
              onClick={() => handlePhaseChange(8)}
              className={`btn flex justify-center items-center gap-3 phase-btn ${
                activePhase === 8 && "active"
              }`}
            >
              <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
              </div>
              <span className="text-white">Phase 8</span>
            </button>
          </div>
        </div>
      </div>

      {/* phase 1 */}
      {activePhase === 1 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg1} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  Deployment of the contracts
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  Token contract
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  Untraditional ICO contract
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  Staking pool contract
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* phase 2 */}
      {activePhase === 2 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg2} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  The listing Day--- 2024
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* phase 3 */}
      {activePhase === 3 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg3} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  Development of DataEnhancers platform---- 2024
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* phase 4 */}
      {activePhase === 4 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg4} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  Development of BugHunters platform. --- 2024/25
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* phase 5 */}
      {activePhase === 5 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg5} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  Multi-Blockchain Detection Capabilities --- (ASAP)
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* phase 6 */}
      {activePhase === 6 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg6} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  ExpertHunters - NFT collection with government and revenues.
                  BugHunters Only! --- 2025
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* phase 7 */}

      {activePhase === 7 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg7} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  B2C Security Solution to enhance Mass Adoption --- 2024/25
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* phase 8 */}
      {activePhase === 8 && (
        <div className="phase-content py-[45px]">
          <div className="container">
            <div className="flex justify-between items-center gap-[100px]">
              <img src={phaseImg8} alt="" />
              <div className="contents-item">
                <h2 className="text-[28px] mb-8 text-white block font-semibold">
                  Token AirDrop to HODLr's --- TBA
                </h2>

                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <FaCheck />
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Phases;
