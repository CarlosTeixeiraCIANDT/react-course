import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { EventPage } from "./pages/Events/Events";
import { EventDetailPage } from "./pages/Events/EventDetail";
import { NewEventPage } from "./pages/Events/NewEvent";
import { EditEventPage } from "./pages/Events/EditEvent";
import { DefaultLayout } from "./pages/Layout/Default";
import { EventsLayout } from "./pages/Layout/Events";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultLayout />,
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
                        },
                        {
                            path: ":eventId",
                            element: <EventDetailPage />,
                        },
                        {
                            path: "new",
                            element: <NewEventPage />,
                        },
                        {
                            path: "eventId/edit",
                            element: <EditEventPage />,
                        },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
};

export { App };
