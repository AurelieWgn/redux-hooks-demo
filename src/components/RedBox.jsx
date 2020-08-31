import React, {useEffect} from 'react';
import { useDispatch  } from 'react-redux';
import { changeColor} from '../actions'


const RedBox = () => {

    const dispatch = useDispatch();
    
    return (
        <div id="redBox" onClick={()=> dispatch(changeColor("red"))}>

        </div>
    )
}

export default RedBox;