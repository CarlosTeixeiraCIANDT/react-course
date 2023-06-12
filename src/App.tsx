import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Movie } from "./Model/Movie";
import { MovieList } from "./components/MovieList/MovieList";
import { AddMovie } from "./components/AddMovie/AddMovie";

const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const resp = await fetch("https://swapi.dev/api/films/");
            if (!resp.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await resp.json();
            const transformedMovies: Movie[] = data.results.map(
                (movieData: {
                    episode_id: number;
                    title: string;
                    opening_crawl: string;
                    release_date: string;
                }) => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date,
                    };
                }
            );
            setMovies(transformedMovies);
        } catch (error: any) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    const addMovieHandler = useCallback(async (movie: Movie) => {
        setIsLoading(true);
        setError(null);
        try {
            const resp = await fetch("url here", {
                method: "POST",
                body: JSON.stringify(movie),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!resp.ok) {
                throw new Error("Some error here");
            }
        } catch (error: any) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    let content: JSX.Element = <p>Found no movies</p>;

    if (movies.length > 0) {
        content = <MovieList movies={movies} />;
    }

    if (error) {
        content = <p>{error.message}</p>;
    }

    if (isLoading) {
        content = <p>Loading</p>;
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </>
    );
};

export { App };
