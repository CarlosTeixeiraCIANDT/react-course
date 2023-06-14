import { useSelector } from "react-redux";
import { Auth } from "./components/Auth/Auth";
import { Counter } from "./components/Counter/Counter";
import { Header } from "./components/Header/Header";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
    const isAuth = useSelector((state: any) => state.auth.isAuth);
    return (
        <>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
        </>
    );
}

export { App };
