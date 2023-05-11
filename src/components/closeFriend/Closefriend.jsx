import './closefriend.css'

function Closefriend({friend}) {
  return (
    <li className='sidebarFriend'>
    <img className='sidebarFriendImg' src={friend.profilePicture} alt='' />
    <span className='sidebarFriendName'>{friend.username}</span>
</li>
  )
}

export default Closefriend