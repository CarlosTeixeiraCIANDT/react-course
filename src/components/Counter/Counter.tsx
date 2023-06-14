import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: any) => state.counter.counter);
    const visible = useSelector((state: any) => state.counter.visible);

    const incrementHandler = () => {
        // dispatch({ type: "INCREMENT" });
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        // dispatch({ type: "DECREMENT" });
        dispatch(counterActions.decrement());
    };
    const increaseHandler = () => {
        // dispatch({ type: "INCREASE", value: 5 });
        dispatch(counterActions.increase(10));
    };

    const toggleCounterHandler = () => {
        // dispatch({ type: "TOGGLE" });
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {visible && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export { Counter };
