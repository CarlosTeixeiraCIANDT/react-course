import { useState } from "react";
import { Home, Login, MainHeader } from "./components";

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const loginHandler = (email: string, password: string) => {
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };
    return (
        <>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
                {isLoggedIn && <Home onLogout={logoutHandler}></Home>}
            </main>
        </>
    );
};

export { App };
