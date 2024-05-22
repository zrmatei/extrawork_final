import React from "react";

function Parteners(){
    return(
        <div className="contain-p">
            <h1 className="part">Some of our parteners</h1>
            <div className="photos">
                <img src="src\assets\p1.png" alt="p1" draggable='false'/>
                <img src="src\assets\p2.png" alt="p2" draggable='false'/>
                <img src="src\assets\p3.png" alt="p3" draggable='false'/>
                <img src="src\assets\p4.png" alt="p4" draggable='false'/>
            </div>
            <hr className="sep"/>
        </div>
    )
}

export default Parteners;