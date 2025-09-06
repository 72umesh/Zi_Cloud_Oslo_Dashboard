import "../styles/ChatPanel.css";
import { PiStarFourFill } from "react-icons/pi";
import { MdContentCopy } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { FaSearch, FaMicrophone } from "react-icons/fa";

function ChatPanel() {
  const messages = [
    {
      id: 1,
      sender: "system",
      text: "Hello I'm Oslo. Tell me what's on your mind",
    },
    {
      id: 2,
      sender: "user",
      text: "Create leads on Tech targets",
    },
    {
      id: 3,
      sender: "system",
      text: "ICP updated to target Tech Companies. If you want to specifyroles, locations, or other critera for decision-makers, please let me know",
    },
  ];

  return (
    <div className="chatpanel">
      {/* Header */}
      <div className="chat-header">
        <PiStarFourFill className="star-icon" />
        <h2 className="title">Oslo chat</h2>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${
              message.sender === "user" ? "user" : "system"
            }`}
          >
            {message.text}

            {message.sender === "system" && (
              <div className="message-actions">
                <MdContentCopy className="icon" />
                <IoReload className="icon" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}

      <div className="chat-input">
        <FaSearch className="icon" />
        <input type="text" placeholder="Type your message..." />
        <FaMicrophone className="icon microphone" />
      </div>
    </div>
  );
}

export default ChatPanel;
