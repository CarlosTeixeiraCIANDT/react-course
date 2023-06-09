import { useContext, useEffect, useState } from "react";
import { Home, Login, MainHeader } from "./components";
import { AuthContextProvider } from "./components/store/auth-context/auth-context";
import { MainBody } from "./components/MainBody/MainBody";

/**
 * Using props fowarding
 */
// const App: React.FC = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

//     useEffect(() => {
//         const userIfo = localStorage.getItem("isLoggedIn");

//         if (userIfo === "1") {
//             setIsLoggedIn(true);
//         }
//     }, []);

//     const loginHandler = (email: string, password: string) => {
//         localStorage.setItem("isLoggedIn", "1");
//         setIsLoggedIn(true);
//     };

//     const logoutHandler = () => {
//         localStorage.removeItem("isLoggedIn");
//         setIsLoggedIn(false);
//     };
//     return (
//         <>
//             <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//             <main>
//                 {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
//                 {isLoggedIn && <Home onLogout={logoutHandler}></Home>}
//             </main>
//         </>
//     );
// };

const App: React.FC = () => {
    return (
        <>
            <AuthContextProvider>
                <MainHeader />
                <MainBody />
            </AuthContextProvider>
        </>
    );
};

export { App };
