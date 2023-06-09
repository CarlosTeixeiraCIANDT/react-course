import React, { useEffect, useState } from "react";

const AuthContext = React.createContext<{
    isLoggedIn: boolean;
    loginHandler: (email: string, password: string) => void;
    logoutHandler: () => void;
}>({
    isLoggedIn: false,
    loginHandler: (email: string, password: string) => {},
    logoutHandler: () => {},
});

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = (
    props
) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const userIfo = localStorage.getItem("isLoggedIn");

        if (userIfo === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email: string, password: string) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    const contextValue = {
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
