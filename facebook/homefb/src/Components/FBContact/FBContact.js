
import './FBContact.css'
function FBContact(props){



    return(
        <div className="contact">
          <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' /> 
          {
            props.status == 'active' && <div className='active'></div>
          }
          <h4> HAmdaoui Wassim</h4>
        </div>
    )
}

export default FBContact