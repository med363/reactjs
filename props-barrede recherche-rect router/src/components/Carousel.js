import { Carousel } from "react-bootstrap";

function CarouselB(){

    const cards = [ {
        image:"tunisia2.jpg",
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
      image:"tunisia2.jpg",
       title:"hello third card" ,
        cost:"300" ,
         country:"tunisia", 
         rate:"3.5"
  }]

    return(
        <div className="m-5 p-4">

       
        <Carousel>

            {
                cards.map(c=>  <Carousel.Item>
                    <img height={"400"}
                    className="d-block w-100"
                    src={"./"+c.image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{c.title}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            }
       
       
      </Carousel>
      </div>
    )
}

export default CarouselB;