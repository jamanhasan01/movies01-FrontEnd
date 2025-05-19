import Movie from '../components/Movie';
import { useContext, useState } from 'react';
import { moviesContext } from '../provider/MoviesProvider';

const Allmovies = () => {
  const [visibleData, setvisibleData] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(''); // 'asc' for ascending, 'desc' for descending
  const { movies } = useContext(moviesContext);

  // Filter movies by title
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort movies by rating
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === 'asc') return a.rating - b.rating;
    if (sortBy === 'desc') return b.rating - a.rating;
    return 0; // No sorting
  });

  // Slice for pagination
  const seeMoreMovies = sortedMovies.slice(0, visibleData);

  const handleSeeMore = () => {
    setvisibleData(visibleData + 6);
  };

  return (
    <div className="pb-20">
      {/* Search and Sort Controls */}
      <div className="flex justify-between items-center mb-5 px-5">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="select select-bordered"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by Rating</option>
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-5">
        {seeMoreMovies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
        {visibleData < sortedMovies.length && (
          <button
            className="btn text-center col-span-full bg-mainClr"
            onClick={handleSeeMore}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Allmovies;
