function CarCard(props) {
    
    return <div id="carcard">
        <img id="pic" src={props.imgsrc||null} alt="" ></img>
        <div>
            <h2>{props.name}</h2>
            <p><strong>Model</strong>: {props.model}</p>
            <p><strong>Price</strong>: {props.price}</p>
        </div>
    </div>


}
export default CarCard;