import './FBComment.css'
function FBComment({data}){

    return (
        <div className="coment">
        <div className="coment_image">
        <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' /> 
        </div>
     
        <div className="coment_text">
            <p>
            {    data.content }
            </p>
        </div>

    </div>
    )

}


export default FBComment;