import "./App.css";
import ChatPanel from "./components/ChatPanel";
import FormPanel from "./components/FormPanel";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Navbar />
        <div className="panels">
          <ChatPanel />
          <div className="divider"></div>
          <FormPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
