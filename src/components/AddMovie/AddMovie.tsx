import { useRef } from "react";
import { Movie } from "../../Model/Movie";

import styles from "./AddMovie.module.css";

const AddMovie: React.FC<{ onAddMovie: (movie: Movie) => void }> = ({
    onAddMovie,
}) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const openingTextRef = useRef<HTMLTextAreaElement>(null);
    const releaseDateRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // could add validation here...

        const movie: Movie = {
            id: Math.random(),
            title: titleRef.current!.value,
            openingText: openingTextRef.current!.value,
            releaseDate: releaseDateRef.current!.value,
        };

        onAddMovie(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea
                    rows={5}
                    id="opening-text"
                    ref={openingTextRef}
                ></textarea>
            </div>
            <div className={styles.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} />
            </div>
            <button>Add Movie</button>
        </form>
    );
};

export { AddMovie };
