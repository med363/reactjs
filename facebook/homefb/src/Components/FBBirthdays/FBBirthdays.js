import { Fa500Px, FaGifts } from 'react-icons/fa'
import './FBBirthdays.css'
function FBBirthdays(){



    return(
        <div className="birthdays">
                <h3> Birthdays</h3>
                <div className='item'>
                        <FaGifts style={{ fontSize:"46px" , color : "orangered" , margin : "30px"}}   />
                        <p>
                            <b>Hamdaoui</b> , <b>Amine</b> and <b>2 others</b> have birthdays today.
                        </p>
                </div>
        </div>
    )
}

export default FBBirthdays