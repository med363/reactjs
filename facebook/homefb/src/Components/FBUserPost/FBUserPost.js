import { useEffect, useState } from 'react';
import { FaComment, FaImages, FaShare, FaSmile, FaThumbsUp, FaUserTag } from 'react-icons/fa'
import FBComment from '../FBComment/FBComment'
import FBCommentInput from '../FBCommentInput/FBCommentInput'


import './FBUserPost.css'
function FBUserPost(){

    const [order, setOrder ] = useState("all")
    const [ all , setAll ] = useState(false);
    const [comments , setComments ] = useState( [  
                        {id : 1 , name : 'User' , content : '1 ...' , date : "2022-11-03T12:16"} ,
                        {id : 2 , name : 'User' , content : '2 ...' , date : "2022-11-03T12:13"} ,
                        {id : 3 , name : 'User' , content : '0 ...' , date : "2022-11-03T11:06"} ,
     ])

     const orderBy = () => {
let commentaires = comments
        if (order == "all" || order == "new" ){
          commentaires =   commentaires.sort(function(a, b) {
                var keyA = new Date(a.date),
                  keyB = new Date(b.date);
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
              });
              // [ "AB" , "A" , "C"  ]
              // sort function (  )
              console.log(commentaires)
              
              
        }else {
            commentaires =   commentaires.sort(function(a, b) {
                var keyA = new Date(a.date),
                  keyB = new Date(b.date);
                // Compare the 2 dates
                if (keyA > keyB) return -1;
                if (keyA < keyB) return 1;
                return 0;
              });
              // [ "AB" , "A" , "C"  ]
              // sort function (  )
              console.log(commentaires)
        }
        setComments(commentaires)



     }

     const handleChange = (e) => {
        //console.log("hello",e.target.value)
        setOrder(e.target.value)

     }
     useEffect(()=>{
            orderBy()
     } , [order] )



    return (
        <div className="postUser">
            <div className="header">
            <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' /> 
         
                <h3> Hamdaoui Wassim</h3>
            </div>
            <div className='body'>
                <p>
                    hello my first postUser
                </p>
                <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            </div>
            <div className="footer">
                    <div>
                        <FaThumbsUp />
                        <h4>J'aime</h4>
                    </div>
                    <div>
                        <FaComment />
                        <h4>Commenter</h4>
                    </div>
                    <div>
                        <FaShare />
                        <h4>Partager</h4>
                    </div>
            </div>
            <div className='comments'>
                <select onChange={handleChange}  >
                    <option value={"all"} > Tout les commentaires </option>
                    <option value={"recent"}> Les plus recents </option>
                    <option value={"new"}> Les nouveaux commentaires </option>
                </select>


                {
                        !all && order == "all" ? comments.map(c=> <FBComment data={c} /> ) :  
                        !all && order == "recent" ? comments.map(c=> <FBComment data={c} /> ) :
                        !all && order == "new"  ? <>
                        <FBComment data={comments[0]} />
                        <FBComment data={comments[1]} /> 
                        {
                            comments.length > 2 && <a className='show_more' onClick={ () => { setAll(true) } } > Voir plus des commentaires </a>
                        }
                        
                        </> :  comments.map(c=> <FBComment data={c} /> ) 
                      

                }


                
                
              
               <FBCommentInput />
            </div>
        </div>
    )
}

export default FBUserPost