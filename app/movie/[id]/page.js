import Persons from "@/components/Persons";
import { Badge } from "@/components/ui/badge";

const token = process.env.TMDB_TOKEN;

async function fetchMovie(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return await res.json();
}

export default async function Movie({ params }) {
    const { id } = await params;
    const movie = await fetchMovie(id);
    const cover = "https://image.tmdb.org/t/p/w1280";
    const releaseYear = movie.release_date?.split("-")[0];

    return (
        <>
            <h2 className="font-bold">
                {movie.title}
                {releaseYear ? <span className="ml-1">({releaseYear})</span> : null}
            </h2>
            <div className="mb-4 mt-2">
                {movie.genres?.map(genre => {
                    return (
                        <Badge
                            key={genre.id}
                            variant="outline"
                            className="mr-2">
                            {genre.name}
                        </Badge>
                    );
                })}
            </div>
            {movie.backdrop_path ? (
                <img
                    src={cover + movie.backdrop_path}
                    alt={movie.title ?? "Movie backdrop"}
                />
            ) : null}
            <p className="mt-3">{movie.overview}</p>
            <div className="mt-5">
                <h3 className="font-bold border-b mb-4 pb-2">Starring</h3>
                <Persons movie={movie} />
            </div>
        </>
    );
}
