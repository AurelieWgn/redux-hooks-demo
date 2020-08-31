import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlueBox from "./BlueBox";
import RedBox from "./RedBox";
import PurpleBox from "./PurpleBox";
import CalculBox from "./CalculBox.jsx";
import {setColor} from '../actions'

const Home = () =>{

    const dispatch = useDispatch();
    const number = useSelector(state => state.numberReducer);
    const color = useSelector(state => state.colorReducer.color);
    const initialColor = "Black";
    const divStyle = {
        color: color,
        fontSize : "30px",
        fontWeight: "bold"
    };
    
    useEffect(() => {
        dispatch(setColor(initialColor))
    }, []);
    
    return (
        <>
            <div id="ResultBox">
                <p style={divStyle} >{number}</p>
                <CalculBox />
            </div>
            <div id="colorBox">
                <BlueBox />
                <RedBox />
                <PurpleBox />
            </div>
        </>
    )
}

export default Home;