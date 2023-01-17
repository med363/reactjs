import Card from "../components/Card";
import NavBar from "../components/Navbar";

function Home(){

        const card = {
            image:"tunisia2.jpg",
            title:"hello first card" ,
            cost:"100" ,
            country:"tunisia", 
            rate:"4.5"
        }
    return(
        <div>
            <NavBar />
            <h1> Home page </h1>
            <p> This is the home page </p>
            <div className="col-4">
            <Card  data={card} />
            </div>
          
        </div>
    )
}


export default Home;