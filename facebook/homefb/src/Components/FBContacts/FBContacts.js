import { Fa500Px, FaGifts } from 'react-icons/fa'
import FBContact from '../FBContact/FBContact'
import './FBContacts.css'
function FBContacts(){



    return(
        <div className="contacts">
            <div className='header'>
            <h3> Contacts</h3>
                <span>...</span>
            </div>

            <div>

                <FBContact status={'active'} />
                
                <FBContact />
                
                <FBContact />
                
                <FBContact />
                
                <FBContact status={'active'} />
                
                <FBContact />
                
                <FBContact status={'active'}  />

            </div>
                
                
        </div>
    )
}

export default FBContacts