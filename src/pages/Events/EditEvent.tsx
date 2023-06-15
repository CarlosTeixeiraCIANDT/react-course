import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { EventForm } from "../../components";

const EditEventPage = () => {
    // const data = useLoaderData() as any;
    const data = useRouteLoaderData("event-detail") as any;
    return (
        <>
            <EventForm method={"patch"} event={data.event} />
        </>
    );
};

export { EditEventPage };
