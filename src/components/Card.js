import './Card.css';

function Card(props) {
    let badgeText;
    console.log("props is",props);
    console.log("props.item is",props.item);
    if(props.item.openSpots===0){
        badgeText = "SOLD OUT";
    }else if(props.item.location ==="Online"){
        badgeText= "ONLINE";
    }
    return(
    <div className="card">
        { badgeText &&<div className="card--badge">{badgeText}</div>}
        <img src={props.item.coverImg} className="card-image"/>
        <div className="rating">
            <img src="Star.png" className="star"/>
            <p>{props.item.stats.rating}<span className="gray">({props.item.stats.reviewCount}) • {props.item.location}</span></p>
        </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span>/person</p>
    </div>
    )
}
export default Card;
