import './FBRightSidebar.css'
import { FaArrowDown, FaBell, FaChevronDown, FaFacebook , FaFacebookMessenger, FaGamepad, FaHome, FaStore, FaTv, FaUser, FaUsers } from 'react-icons/fa';
import FBSponsored from '../FBSponsored/FBSponsored';
import FBBirthdays from '../FBBirthdays/FBBirthdays';
import FBContacts from '../FBContacts/FBContacts';
function FBRightSidebar(){

    return(
        <div className="fb_right_sidebar">

          <FBSponsored />
          <hr />

          <FBBirthdays />
          <hr />
       
         <FBContacts />





        </div>
    )

}

export default FBRightSidebar;