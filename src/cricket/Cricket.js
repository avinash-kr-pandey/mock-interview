import React from "react";
import Card from "./Card";
import players from "./data";
const Cricket = ()=>{
    return(
        <>
             {players.map(player=><Card player={player}/>)}
        </>
    );
}
export default Cricket;