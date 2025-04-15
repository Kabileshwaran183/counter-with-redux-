import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement,reset,incrementByAmount } from './counterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
  return (
    <section>
    <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
    <div>
        <input type="number" value={incrementAmount} onChange = { (e) => setIncrementAmount(e.target.value) } />
        <button onClick = {() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick = {() => dispatch(resetAll())}>Reset</button>
    </div>
    </section>
    
  )
}

export default Counter