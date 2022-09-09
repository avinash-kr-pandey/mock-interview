import "./cricket.css"
const Card = ({player})=>{
    return(
        <div className=".container-fluid mt-3">
            <div className="card-columns">
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={player.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">
                jersey number: {player.jerseyNumber},<br />
                score : {player.score} <br />
                wicket : {player.wicket}
                </p>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Card;