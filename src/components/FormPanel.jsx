import "../styles/FormPanel.css";

function FormPanel() {
  return (
    <div className="formpanel">
      {/* Header */}
      <div className="header">
        <h2>
          Let’s define your <span className="gold">targets</span>
        </h2>
        <p>
          Focus on the most relevant fields to shape your ICP — all fields are
          optional
        </p>
      </div>

      {/* Compnay Profile */}
      <div className="company-section">
        <h3>Company Profile</h3>

        <div className="company-card">
          <div className="company-group">
            <label>Company Headcount</label>
            <select>
              <option>1-10...</option>
              <option>11-50</option>
            </select>
          </div>
          <div className="company-group">
            <label>Company HQ Locations</label>
            <select>
              <option>India...</option>
              <option>USA</option>
            </select>
          </div>
          <div className="company-group">
            <label>Revenue range</label>
            <select>
              <option>50L - 1Cr...</option>
              <option>1Cr - 10Cr</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prospect Profile */}
      <div className="prospect-section">
        <h3>Prospect Profile</h3>

        <div className="prospect-card">
          <div className="prospect-group">
            <label>Department</label>
            <select>
              <option>Search department...</option>
              <option>Engineering</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPanel;
