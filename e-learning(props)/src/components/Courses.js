import React from 'react'
import "./Courses.css"
import Rate from './Rate';
//import Rate from './Rate';
function Courses(props){
    return(

      <div className='col-3'>
      <div className="card h-100" >
      <img src={props.courseDetails.image1} className="img1 card-img-top" alt="..."/>
      <div className="card-body">
      <img src="img2.jpg" className=" img card-img-top" alt="..."/>
<Rate r={props.courseDetails.rate}/>
        <h5 className="card-title">{props.courseDetails.description}</h5>
        <h5 className="card-title">{props.courseDetails.price}</h5>
      </div>
    </div>
    </div>
    
    )
}
export default Courses;