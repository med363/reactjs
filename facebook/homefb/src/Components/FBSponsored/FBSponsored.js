import { Fa500Px } from 'react-icons/fa'
import './FBSponsored.css'
function FBSponsored(){



    return(
        <div className="sponsored">
        <h3> Sponsored</h3>
        <div className='item'>
            <div className="logo">
                <Fa500Px style={{ fontSize:"26px" , color : "white"}} />
                </div>
                <div className="details">
                    <h3>Lebo's Pizza</h3>
                    <p> Experience the trendy pizza spot in Palo Alto being called the next big thing</p>
                    <img src="https://www.simplyrecipes.com/thmb/Tdp98CmYOGGNIRro9jMKRntI4hk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg" />

                </div>
        </div>
        </div>
    )
}

export default FBSponsored