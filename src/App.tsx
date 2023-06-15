import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { ProductsPage } from "./pages/Products/Products";
import { DefaultLayout } from "./pages/Layout/Default";
import { ErrorPage } from "./pages/Error/Error";
import { ProductDetailPage } from "./pages/Products/ProductDetail/ProductDetail";

/**
 * Jsx way of adding routes
 */
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductsPage />} />
//     </Route>
// );
//
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "products/:productId",
                element: <ProductDetailPage />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export { App };
