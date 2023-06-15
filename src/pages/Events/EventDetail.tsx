import {
    json,
    redirect,
    useLoaderData,
    useParams,
    useRouteLoaderData,
} from "react-router-dom";
import { EventItem } from "../../components";

const EventDetailPage = () => {
    // const data = useLoaderData() as any;
    const data = useRouteLoaderData("event-detail") as any;
    return (
        <>
            <EventItem event={data.event} />
        </>
    );
};

const eventDetailLoader = async ({
    request,
    params,
}: {
    request: any;
    params: any;
}) => {
    const id = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        return json({ message: "Could not fetch" }, { status: 500 });
    } else {
        return response;
    }
};

const deleteEvent = async ({
    params,
    request,
}: {
    params: any;
    request: any;
}) => {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events" + eventId, {
        method: request.method,
    });

    if (!response.ok) {
        return json({ message: "Could not delete" }, { status: 500 });
    }
    return redirect("/events");
};

export { EventDetailPage, eventDetailLoader, deleteEvent };
