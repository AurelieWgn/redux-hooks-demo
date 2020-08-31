import React, {useEffect} from 'react';
import { useDispatch  } from 'react-redux';
import { changeColor} from '../actions'


const PurpleBox = () => {

    const dispatch = useDispatch();

    return (
        <div id="purpleBox" onClick={()=> dispatch(changeColor("purple"))}>

        </div>
    )
}

export default PurpleBox;