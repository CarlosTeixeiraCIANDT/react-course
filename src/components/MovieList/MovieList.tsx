import { Movie } from "../../Model/Movie";
import { MovieItem } from "./MovieItem/MovieItem";
import styles from "./MovieList.module.css";

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
    return (
        <ul className={styles["movies-list"]}>
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};

export { MovieList };
