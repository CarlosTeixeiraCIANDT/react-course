import { useContext } from "react";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { AuthContext } from "../store/auth-context/auth-context";

const MainBody: React.FC = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn } = authContext;
    return (
        <main>
            {!isLoggedIn && <Login />}
            {isLoggedIn && <Home />}
        </main>
    );
};

export { MainBody };
