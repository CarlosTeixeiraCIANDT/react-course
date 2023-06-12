import { Movie } from "../../../Model/Movie";
import styles from "./MovieItem.module.css";

const MovieItem: React.FC<{ movie: Movie }> = ({ movie }) => {
    const { title, releaseDate, openingText } = movie;
    return (
        <li className={styles.movie}>
            <h2>{title}</h2>
            <h3>{releaseDate}</h3>
            <p>{openingText}</p>
        </li>
    );
};

export { MovieItem };
