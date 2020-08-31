import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addOne, delOne } from '../actions'


const CalculBox = () => {
    
    const dispatch = useDispatch();
    
    return (
        <div id="calculBox">
            <button onClick={() => dispatch(addOne(1))} >+ 1</button>
            <button onClick={() => dispatch(delOne(1))}  >- 1</button>
        </div>
    )
}

export default CalculBox;