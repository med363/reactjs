
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './ecommerce/Navigation'
import Product from './ecommerce/Product';
import { useEffect, useState } from 'react'
import NavBar from './components/Navbar';
import Card from './components/Card';
import Drink from './components/Drink';






export default function App(){

    useEffect(
        ()=>{
           getData()
           /** autres traitement */
        },[]
    )

    /*
    drinks [
        {
            idDrink: "15346"
            strDrink: "155 Belmont"
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
        },
          {
            idDrink: "15346"
            strDrink: "155 Belmont"
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
        },
    ]
    */
    const [name , setName ] = useState("")
    const [drinks , setDrinks ] = useState([])
    const getData = () => {


            fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then( res => res.json() )
            .then( 
                (resultat) => { // succes
                    console.log(resultat)

                    setDrinks(resultat.drinks)


                },
                (error ) => { // error 
                    console.log(error)
                }
             )


    }


    const chercherCocktail = (e) =>{
        e.preventDefault();
        setName(e.target.value)
      
        console.log(name)
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+name)
        .then( res => res.json() )
        .then(  (resultat) =>
        { console.log(resultat)
            setDrinks(resultat.drinks)
        }  ,
                (error)=> console.log(error) )

    }

    return (
        <div>
            <NavBar />
            <h1> Hello  React router DOM </h1>

         
                <input type="text" placeholder='cocktail search' className='form-control' value={name}  onChange={ (e)=> chercherCocktail(e) }  />
     
   
       
            <div className='row col-12'>
            {
                drinks.map( d => <div className='col-3'>
                    <Drink data={d} />
                    </div>)
            }
            </div>
           
        </div>
    )











    // const [count,setCount] = useState(0)
    // const [somme,setSomme] = useState(0)
    // const [produits,setProduits] = useState( [

    //     {
    //         id : 1,
    //         name : "montre",
    //         image : "montre.jpg",
    //         description : "montre Samsung s 4",
    //         price : 200
    //     },
    
    //     {
    //         id : 2,
    //         name : "Iphone",
    //         image : "montre.jpg",
    //         description : "montre Samsung s 4",
    //         price : 200
    //     },
    
    //     {
    //         id : 3,
    //         name : "Pc",
    //         image : "montre.jpg",
    //         description : "montre Samsung s 4",
    //         price : 200
    //     }
    // ]) 

    // const [cart,setCart] = useState([])

    // const addToCart = ( product ) => {
        
    //     let tabCart = cart // []
    //     let exist = false // variable 
    //     tabCart.forEach(pr => {
    //         if ( pr == product ){
    //             exist = true;
    //         }
    //     })

    //     if (!exist){ // exist = false
    //         tabCart.push(product)
    //         setCart(tabCart)
            
    //        sommeCart()
    //         setCount(tabCart.length)

    //     } 
        

    //    // console.log("cart",cart)

        
    // }

    // const removeFromCart = ( product ) => {
    //     let s =  somme   - product.price
    //     let exist = false // variable 
    //     let tabCart = []
    //     cart.forEach(pr => {                // cart = [ 1 , 2 , 3 ] ,   produit = 3
    //         if ( pr != product ){
    //             tabCart.push(pr)
    //         }else{
    //             exist = true  
    //         }
           
    //     })

    //     // result [ 1 ; 2 ]
    //     if (exist){ 
    //             setCart(tabCart) 
    //             setCount(tabCart.length)
    //         // sommeCart()
    //             setSomme(s) 
    //     }

       
       
        
    //   //  console.log("cart after : " , cart)
        

    //    // console.log("cart",cart)

        
    // }
    

    // const sommeCart =  () => {

    //     let somme = 0
    //     cart.forEach( p => somme += p.price)
        
    //     setSomme(somme)
    // }

    // return (
    //     <div >
           
    //        <Navigation data={count} />

    //         <div className='row col-12'>
    //             {
    //                 produits.map(produit =>

    //                     <div className='col-4'>
    //                             <Product data={produit} added={ ()=> addToCart(produit) } remove={ ()=> removeFromCart(produit) } />
    //                     </div>

    //                      )
    //             }

    //             la somme est { somme && somme }

    //         </div>
           

    //     </div>
    // )

























    // const [ count , setCount ] = useState(0)

    // function plus(){
    //    setCount( oldValue => oldValue + 1) 
       
    //  }

    // function moins(){
    //     setCount( oldValue => oldValue - 1)
              
    //  }

    // return(
    //             <>
    //                     {
    //                         count >= 10  ?  
    //                          <div className='compteur green' >
    //                             <h3> { count } </h3>
    //                                 <button onClick={moins}> - </button>
    //                                 <button onClick={plus}> + </button>


    //                                    <p>Vous avez atteint la valeur 10</p>


    //                                 </div>
    //                               : count > 0  ? 
    //                                 <div className='compteur black' >
    //                             <h3> { count } </h3>
    //                                 <button onClick={moins}> - </button>
    //                                 <button onClick={plus}> + </button>
                                 
    //                                 </div>
    //                                 :
    //                                  <div className='compteur red' >
    //                                     <h3> { count } </h3>
    //                                 <button onClick={moins}> - </button>
    //                                 <button onClick={plus}> + </button>
    //                                <p> Nous sommes dans la plage des valeurs - </p>
    //                                 </div>
    //                     }
                    
    //                     </>
    // )

// return (
//     <Form />
// )
    // const cards = [ {
    //       image:"",
    //       title:"hello first card" ,
    //       cost:"100" ,
    //       country:"tunisia", 
    //       rate:"4.5"
    // }
    
    // , {
    //     image:"tunisia2.jpg",
    //      title:"hello second card" ,
    //       cost:"200" ,
    //        country:"tunisia", 
    //        rate:"5"
    // }

    // , {
    //     image:"",
    //      title:"hello third card" ,
    //       cost:"300" ,
    //        country:"tunisia", 
    //        rate:"3.5"
    // }]
    // return (
    //     <>
    //     <Navbar />
    //     <Hero />
    //     <Cards tab={cards} />
    //     <Cards tab={cards} />
    //     <Hero /> 
    //     </>
    // )


                  
    // const pokemons = [ {
    //     name : "abra" ,
    //     power : 100 ,
    //     types : ["A"] ,
    //     image : "Abra.webp"
    // } , {
    //     name : "arbok" ,
    //     power : 130 ,
    //     types : [ "B" ] ,
    //     image : "Arbok.webp"
    // } , {
    //     name : "beedrill" ,
    //     power : 200 ,
    //     types : [ "C" , "A" ] ,
    //     image : "Beedrill.webp"
    // } , {
    //     name : "Bulbasaur" ,
    //     power : 300 ,
    //     types : ["A"] ,
    //     image : "Bulbasaur.webp"
    // } , {
    //     name : "Butterfree" ,
    //     power : 80 ,
    //     types : ["C" , "B"] ,
    //     image : "Butterfree.webp"
    // } , {
    //     name : "Caterpie" ,
    //     power : 150 ,
    //     types : [ "B" ]  ,
    //     image : "Caterpie.webp"
    // } , {
    //     name : "Machamp" ,
    //     power : 110 ,
    //     types : [ "A" , "B" ] ,
    //     image : "Machamp.webp"
    // } ]

   
}