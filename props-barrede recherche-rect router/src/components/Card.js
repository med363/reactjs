function Card(props){
    return (
        <div>
                {
                    props.data.image != "" ? 
                    // if (props.cardDetails.image != "")   else  ""
                    <div className="card">
                        <img src={ props.data.image } /> 
                        <div className="details">
                            <img className="item" src="./star.png" />
                            <span className="item gray">{ props.data.rate }</span>
                            <span className="item red">{ props.data.country }</span>
                        </div>
                        <p>{props.data.title}</p>
                        <p>From { props.data.cost } DT / Person </p>
                    </div>

                : ""

                }

    </div>


    )
}

export default Card;