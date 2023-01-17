import './FBNav.css'
import { FaArrowDown, FaBell, FaChevronDown, FaFacebook , FaFacebookMessenger, FaGamepad, FaHome, FaStore, FaTv, FaUsers } from 'react-icons/fa';
function FBNav(){

    return(
        <div className="fb_nav">

                <div className='right_box'>
                <FaFacebook style={{ fontSize : "40px" , color : "#1877f2"}} title="Facebook" />
                <form>
                    <input type={'text'} className="fb_input_search" placeholder='Search ...'/>
                </form>
                </div>
                <div className='center_box'>
                    <div className='item_box'>
                            <FaHome  className="nav_item" title='Home'/>
                    </div>
                    <div className='item_box'>
                    <FaStore  className="nav_item" />
                    </div>
                    <div className='item_box'>
                    <FaTv  className="nav_item" />
                    </div>
                    <div className='item_box'>
                    <FaUsers  className="nav_item" />
                    </div>
                    <div className='item_box'>
                    <FaGamepad  className="nav_item" />
                    </div>
        
      
             
           
                </div>
                <div className='left_box'>
                    <FaFacebookMessenger  className="nav_item" />
                    <FaBell  className="nav_item" />
                    <div>
                        <img src='logo192.png' width={'20'} />
                        <span>Foulen ben foulen</span>
                        <FaChevronDown />
                    </div>
                </div>



        </div>
    )

}

export default FBNav;