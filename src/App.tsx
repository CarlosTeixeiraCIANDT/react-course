import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { EventPage, eventsLoader } from "./pages/Events/Events";
import {
    EventDetailPage,
    deleteEvent,
    eventDetailLoader,
} from "./pages/Events/EventDetail";
import { NewEventPage } from "./pages/Events/NewEvent";
import { EditEventPage } from "./pages/Events/EditEvent";
import { DefaultLayout } from "./pages/Layout/Default";
import { EventsLayout } from "./pages/Layout/Events";
import { ErrorPage } from "./pages/Error/Error";
import { submitEvent } from "./components/Events/EventForm/EventForm";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "events",
                    element: <EventsLayout />,
                    children: [
                        {
                            index: true,
                            element: <EventPage />,
                            // loader: async () => {
                            //     const response = await fetch(
                            //         "http://localhost:8080/events"
                            //     );

                            //     if (!response.ok) {
                            //         // tba
                            //     } else {
                            //         const resData = await response.json();
                            //         return resData.events;
                            //     }
                            // },
                            loader: eventsLoader,
                        },
                        {
                            path: ":eventId",
                            loader: eventDetailLoader,
                            id: "event-detail",
                            children: [
                                {
                                    index: true,
                                    element: <EventDetailPage />,
                                    action: deleteEvent,
                                },
                                {
                                    path: "edit",
                                    element: <EditEventPage />,
                                    action: submitEvent,
                                },
                            ],
                        },
                        {
                            path: "new",
                            element: <NewEventPage />,
                            action: submitEvent,
                        },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
};

export { App };
