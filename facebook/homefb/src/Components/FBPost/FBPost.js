import { FaImages, FaSmile, FaUserTag } from 'react-icons/fa'
import './FBPost.css'
function FBPost(){



    return (
        <div className="post">
            <div className="header">
            <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' /> 
         
                <input type={'text'} placeholder={"What's in your mind , Hamdaoui ... "} />
            </div>
<hr />
            <div className="footer">
                    <div>
                        <FaImages />
                        <h4>Photo/Video</h4>
                    </div>
                    <div>
                        <FaUserTag />
                        <h4>Tag freinds</h4>
                    </div>
                    <div>
                        <FaSmile />
                        <h4>Feeling/Activity</h4>
                    </div>
            </div>
        </div>
    )
}

export default FBPost