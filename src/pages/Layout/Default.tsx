import { Outlet } from "react-router-dom";
import { MainNav } from "../../components";

const DefaultLayout = () => {
    return (
        <>
            <MainNav></MainNav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export { DefaultLayout };
