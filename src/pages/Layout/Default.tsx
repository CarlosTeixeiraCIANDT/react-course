import { Outlet } from "react-router-dom";
import { MainNav } from "../../components";

const DefaultLayout = () => {
    return (
        <>
            <MainNav />
            <Outlet />
        </>
    );
};

export { DefaultLayout };
