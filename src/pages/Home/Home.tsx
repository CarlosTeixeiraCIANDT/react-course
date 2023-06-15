import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/products");
    };

    return (
        <>
            <h1>Home</h1>
            <p>
                {/* Go to <a href="/products">the products page</a> */}
                Go to <Link to="/products">the products page</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate example</button>
            </p>
        </>
    );
};

export { HomePage };
