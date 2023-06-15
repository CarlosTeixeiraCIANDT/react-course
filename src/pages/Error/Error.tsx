import { useRouteError } from "react-router-dom";
import { PageContent } from "../../components/PageContent/PageContent";
import { MainNav } from "../../components";

const ErrorPage = () => {
    const error = useRouteError() as any;
    let title = "An Error occoured";
    let message = "error";
    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = "Not Found";
        message = "Could not find page";
    }
    return (
        <>
            <MainNav />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
};

export { ErrorPage };
