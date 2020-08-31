import React from 'react';
import { useSelector } from 'react-redux';


const Recap = () => {

    const number = useSelector(state => state.numberReducer);
    const color = useSelector(state => state.colorReducer.color);

    return (
        <div id="recap">
            <h1>RECAP</h1>
            <p>Le compteur est actuellement à : {number}</p>
            <p>La couleur actuelle du nombre est : {color}</p>
        </div>
    )
}

export default Recap;