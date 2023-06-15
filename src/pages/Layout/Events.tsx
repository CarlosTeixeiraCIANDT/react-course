import { Outlet } from "react-router-dom";
import { EventsNav } from "../../components";

const EventsLayout = () => {
    return (
        <>
            <EventsNav />
            <Outlet />
        </>
    );
};

export { EventsLayout };
