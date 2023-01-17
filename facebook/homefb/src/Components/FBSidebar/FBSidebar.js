import './FBSidebar.css'
import { FaArrowDown, FaBell, FaChevronDown, FaFacebook , FaFacebookMessenger, FaGamepad, FaHome, FaStore, FaTv, FaUser, FaUsers } from 'react-icons/fa';
function FBSidebar(){

    return(
        <div className="fb_navigation">

<div className='item'>
                   <FaUser className='item_icon' /> Profile
              </div>
              <div className='item'>
                   <FaUsers className='item_icon' /> Group
              </div>
             
              <div className='item'>
                   <FaStore className='item_icon' /> Marketplace
              </div>
              <div className='item'>
                   <FaTv  className='item_icon' /> Watch
              </div>



        </div>
    )

}

export default FBSidebar;