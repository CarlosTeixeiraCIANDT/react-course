import { Outlet, useNavigation } from "react-router-dom";
import { MainNav } from "../../components";

const DefaultLayout = () => {
    // const navigation = useNavigation();
    return (
        <>
            <MainNav />
            <main>
                {/* {navigation.state === "loading" && <p>Loadgin</p>} */}
                <Outlet />
            </main>
        </>
    );
};

export { DefaultLayout };
