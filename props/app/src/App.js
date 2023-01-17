import Card from './components/Card'
import Cards from './components/Cards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


export default function App(){

    const cards = [ {
          image:"",
          title:"hello first card" ,
          cost:"100" ,
          country:"tunisia", 
          rate:"4.5"
    }
    
    , {
        image:"tunisia2.jpg",
         title:"hello second card" ,
          cost:"200" ,
           country:"tunisia", 
           rate:"5"
    }

    , {
        image:"",
         title:"hello third card" ,
          cost:"300" ,
           country:"tunisia", 
           rate:"3.5"
    }]
    return (
        <>
        <Navbar />
        <Hero />
        <Cards tab={cards} />
        <Cards tab={cards} />
        <Hero /> 
        </>
    )
}