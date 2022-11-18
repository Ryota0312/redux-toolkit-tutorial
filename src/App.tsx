import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {decrement, increment, incrementByAmount} from "./features/counter/counterSlice";

function App() {
    const [inputNum, setInputNum] = useState(0)

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <Title>
                count: {count}
            </Title>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <input type={'text'} value={inputNum} onChange={(e) => setInputNum(Number(e.target.value))} />
            <button onClick={() => dispatch(incrementByAmount(inputNum))}>Increment By Amount</button>
        </div>
    );
}

const Title = styled.div`
  color: red;
`
export default App;
