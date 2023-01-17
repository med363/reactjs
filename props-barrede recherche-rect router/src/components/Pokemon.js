import { useState } from "react";

function Pokemon(props){

    const [description, setDescription ] = useState("pokemon description") ;
    const [ color , setColor ] = useState("blue");

    const clickHandler = () => {

        // definition fonction 

        setDescription( props.data.name  + " "  + props.data.power );


    }

    return(
        <div style={{ background : color }}>


                <h1> { props.data.name } </h1>
                <p> { description } </p>

                <button onClick={ clickHandler }   >Get power</button>
                <button onClick={ () =>{ setColor("green") } }   >Change color</button>
                 <img src={ './'+props.data.image} />
                { props.data.types.map( type =>

                        <span > Type : {type} </span> 

                ) } 


        </div>
    )
}

export default Pokemon



