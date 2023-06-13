import "./App.css";
import BackwardCounter from "./components/Counters/BackwardsCounter";
import { ForwardCounter } from "./components/Counters/ForwardCounter";

const App: React.FC = () => {
    return (
        <>
            <ForwardCounter />
            <BackwardCounter />
        </>
    );
};

export { App };
