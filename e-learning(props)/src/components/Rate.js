import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rate = (props) => {
    const ratings=[1,2,3,4,5]
console.log(props);
  return (
    <div>{
        ratings.map(indice=>indice>=props.r ?
          <FontAwesomeIcon icon="fa-solid fa-star" />          :
          
            
          <FontAwesomeIcon icon="fa-regular fa-star" />
                    ) }</div>
  )
}

export default Rate