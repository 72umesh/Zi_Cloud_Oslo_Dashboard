import "../styles/SideBar.css";
import { PiStarFourFill } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { TbNotes } from "react-icons/tb";
import { FaChartPie, FaCog, FaUserFriends } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <PiStarFourFill className="starfour" />
        <img
          src="https://images.pexels.com/photos/9419399/pexels-photo-9419399.jpeg"
          alt="profile"
          className="profile-img"
        />
      </div>
      <div className="sidebar-sections">
        <MdHomeFilled className="icon active" />
        <IoIosRocket className="icon" />
        <TbNotes className="icon" />
        <FaUserFriends className="icon" />
        <FaChartPie className="icon" />
        <CiMail className="icon" />
      </div>
      <div className="sidebar-bottom">
        <FaCog className="icon" />
        <PiSignOut className="icon" />
      </div>
    </aside>
  );
}

export default SideBar;
