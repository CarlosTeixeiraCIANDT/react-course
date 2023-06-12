import { useCallback, useState } from "react";
import "./App.css";
import { Button } from "./components/UI/Button/Button";
import { Demo } from "./components/Demo/Demo";

const App = () => {
    const [show, setShow] = useState<boolean>(false);

    const toggleShow = useCallback(() => {
        setShow((prevShow) => !prevShow);
    }, []);

    return (
        <div className="app">
            <h1>Hi</h1>
            <Demo show={show}></Demo>
            <Button onClick={toggleShow}>Toggle</Button>
        </div>
    );
};

export { App };
