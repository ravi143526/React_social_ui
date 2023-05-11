import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topBar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="assests/post/3.jpeg" alt=''/>
            <img className='profileUserImg' src="assests/person/7.jpeg" alt=''/>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Fedrick Johnson</h4> 
                <span className='profileInfoDesc'>Hello my Friends</span> 
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
      <Rightbar/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Profile