import "../styles/Navbar.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function Navbar({ currentStep = 1 }) {
  const steps = [
    { number: 1, text: "Who" },
    { number: 2, text: "What/Why" },
    { number: 3, text: "Where" },
    { number: 4, text: "When" },
  ];
  return (
    <div className="nav">
      {/* Left  */}
      <div className="left">
        <div className="back-btn">
          <MdKeyboardArrowLeft className="left-icon" />
        </div>
        <div className="ul-btn">
          Untitled List <CiEdit />
        </div>
      </div>

      {/* Middle */}
      <div className="steps">
        {steps.map((step, index) => (
          <div key={step.number} className="step-container">
            <div
              className={`step ${currentStep === step.number ? "active" : ""}`}
            ></div>
            <div className="step-text">{step.text}</div>
          </div>
        ))}
      </div>

      {/* Right */}
      <div className="actions">
        <button className="btn save">Save</button>
        <button className="btn campaign">Make Campaign</button>
      </div>
    </div>
  );
}

export default Navbar;
