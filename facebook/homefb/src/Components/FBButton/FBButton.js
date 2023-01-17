import { Link } from 'react-router-dom';
import './style.css'
function FBButton({ bgColor , width , title , link ,type }){
        return(
            <>
            {
                link ?  <Link style={{ color : "transparent" }} to={link}>
                <button className={"Fb_"+bgColor+" "+width}> { title }</button>
                </Link> :  <button className={"Fb_"+bgColor+" "+width} type={type}> { title }</button>
            }
            
            </>
        )
}

export default FBButton;