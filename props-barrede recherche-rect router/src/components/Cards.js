
import Card from "../components/Card";

function Cards(props){

    return (
        <div style={{display:"flex"}}>
        {
            props.tab.map( card =>  <Card  data={card} /> )
                    
        }
               
    </div>
    )
}
export default Cards;