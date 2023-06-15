import { json, redirect } from "react-router-dom";
import { EventForm } from "../../components";

const NewEventPage = () => {
    return (
        <>
            <EventForm method={"post"} event={null} />
        </>
    );
};

// const submitEvent = async ({
//     request,
//     params,
// }: {
//     request: any;
//     params: any;
// }) => {
//     const data = await request.formData();

//     const eventData = {
//         title: data.get("title"),
//         image: data.get("image"),
//         date: data.get("date"),
//         description: data.get("description"),
//     };

//     const resp = await fetch("http://localhost:8080/events", {
//         method: "POST",
//         body: JSON.stringify(eventData),
//         headers: { "Content-Type": "application/json" },
//     });

//     if (resp.status === 422) {
//         return resp;
//     }

//     if (!resp.ok) {
//         throw json({ message: "Could not save event" }, { status: 500 });
//     }

//     return redirect("/events");
// };

export { NewEventPage };
