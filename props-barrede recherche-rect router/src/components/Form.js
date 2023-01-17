import { useState } from 'react'
// function Form(){ } 
const Form = () => {


    const[firstname , setFirstname] = useState("ahmed")


    const calculer = (e) => {
        
        // don't refresh the page
        e.preventDefault();

        console.log( firstname.length )
    }


    return (
        <div>
        <form onSubmit={ (e) => calculer(e) }>

                <label> Firstname </label>
                <input type="text" value={firstname} onChange={ (e)=> setFirstname(e.target.value) } />
                <br />
                
                <button type="submit"> calculer </button>

        </form>

        { firstname  }
        </div>
    )

}
export default Form   ;