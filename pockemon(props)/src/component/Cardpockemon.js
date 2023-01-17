import React from 'react';

function Cardpockemon(props) {
  return (
    <div className='container '>
    <div className='row justify-content-md-center'>
    <div class="card col-md-auto">
    <img src={props.details.avatar} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"> Name: {props.details.name}</h5>
      <p className="card-text">Power: {props.details.power}</p>
      <p className="card-text"> {props.details.type.map(e=><p>Type:{e}</p>)}</p>
      <p className='card-text'>Talent: {props.details.talent}</p>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Cardpockemon;