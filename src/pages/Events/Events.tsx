import { Await, defer, json, useLoaderData } from "react-router-dom";
import { EventsList } from "../../components";
import { Suspense } from "react";

const EventPage = () => {
    const data = useLoaderData() as any;

    // if (data.isError) {
    //     return <p>data.message</p>;
    // }

    // const events = data.events;

    return (
        <>
            <Suspense fallback={<p>Loading</p>}>
                <Await resolve={data.events}>
                    {(loadedEvents) => <EventsList events={loadEvents} />}
                </Await>
            </Suspense>
        </>
    );
};

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // return { isError: true, message: "Could not fetch" };
        // throw { message: "Could not fetch" };
        // throw new Response(
        //     JSON.stringify({ message: "Could not fetch", status: 500 })
        // );
        return json({ message: "Could not fetch" }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
        // const res = new Response('any data', {status: 201})
        // return response;
    }
};

const eventsLoader = () => {
    return defer({ events: loadEvents() });
};

export { EventPage, eventsLoader };
