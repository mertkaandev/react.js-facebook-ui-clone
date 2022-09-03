import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileFeed from "../../components/profileFeed/ProfileFeed.jsx";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/mert.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/mert.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mert Kaan</h4>
                <span className="profileInfoDesc">hmm ok</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <ProfileFeed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;