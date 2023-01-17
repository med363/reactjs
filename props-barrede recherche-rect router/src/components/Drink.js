import { useEffect, useState } from "react"

function Drink(props) {

    useEffect( () => { 
        getCocktailDetails()
    } , [] )


    const [details, setDetails] = useState({})
    const getCocktailDetails = () => {

        console.log(props.data.idDrink)

        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + props.data.idDrink)
            .then(res => res.json())
            .then(
                (resultat) => { // succes
                    console.log(resultat)
                    setDetails(resultat.drinks[0])

                },
                (error) => { // error 
                    console.log(error)
                }
            )

    }


    return (
        <div>
            {


                <div className="card">
                    <h1> {props.data.strDrink} </h1>
                    <img src={props.data.strDrinkThumb} />
                    <button className="btn btn-primary mt-2" onClick={getCocktailDetails}> Get Drink details </button>


                </div>





            }


            {details && <div>
                <h1>
                    {details.strCategory}
                </h1>
                <p>{details.strInstructionsIT}</p>
            </div>
            }


        </div>


    )
}

export default Drink;