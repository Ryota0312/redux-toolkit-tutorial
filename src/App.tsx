import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {decrement, increment, incrementByAmount} from "./features/counter/counterSlice";
import {actions as userActions} from "./features/user/userSlice";

function App() {
    const [inputNum, setInputNum] = useState(0)
    const [inputName, setInputName] = useState('')

    const count = useSelector((state: RootState) => state.counter.value)
    const userName = useSelector((state: RootState) => state.user.name)
    const userAge = useSelector((state: RootState) => state.user.age)
    const dispatch = useDispatch()

    return (
        <div>
            <div>UserName: {userName}</div>
            <div>Age: {userAge}</div>
            <Count>
                count: {count}
            </Count>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <input type={'text'} value={inputNum} onChange={(e) => setInputNum(Number(e.target.value))} />
            <button onClick={() => dispatch(incrementByAmount(inputNum))}>Increment By Amount</button>
            <br />
            <input type={'text'} value={inputName} onChange={(e) => setInputName(e.target.value)} />
            <button onClick={() => dispatch(userActions.setName(inputName))}>Change Name</button>
        </div>
    );
}

const Count = styled.div`
  color: red;
`
export default App;
