import Link from "next/link";

export default function Movies({ movies }) {
    const poster = "https://image.tmdb.org/t/p/w342";

    return (
        <>
            <div className="flex flex-wrap flex-row gap-4">
                {movies?.map(movie => {
                    const releaseYear = movie.release_date?.split("-")[0];

                    return (
                        <div
                            key={movie.id}
                            className="w-[200px] text-center flex flex-col">
                            {movie.poster_path ? (
                                <Link href={`/movie/${movie.id}`}>
                                    <img
                                        src={poster + movie.poster_path}
                                        alt={movie.title ?? "Movie poster"}
                                        className="w-full hover:scale-105 transition-all"
                                    />
                                </Link>
                            ) : (
                                <div className="h-[300px]"></div>
                            )}
                            <div>
                                <h4 className="mt-2">{movie.title}</h4>
                                {releaseYear ? (
                                    <span className="text-sm text-gray-500">
                                        {releaseYear}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
