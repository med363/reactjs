
import { faMobileScreenButton, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Category.css'

export default function Category(){
    return(
        <>
      
            <div className='categories'>
                <a><FontAwesomeIcon icon={faUserDoctor} />Superette</a>
                <a><FontAwesomeIcon icon={faUserDoctor} /> Sante et beaute</a>
                <a> <FontAwesomeIcon icon={faMobileScreenButton} /> Superette </a>
                <a><FontAwesomeIcon icon={faUserDoctor} /> Sante et beaute</a>
                <a><FontAwesomeIcon icon={faUserDoctor} /> Superette</a>
                <a><FontAwesomeIcon icon={faUserDoctor} /> Sante et beaute</a>
            </div>
            
        </>
    )
}