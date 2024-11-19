import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, toggleCategory, setPageSize, changePage} from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ListPage } from '../constant/const';

const MoviePage = () => {
  const { movies, categories, selectedCategories, pageSize, currentPage, loading, error } = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = useMemo(() => {
    return movies.filter(
      movie =>
        selectedCategories.length === 0 || selectedCategories.includes(movie.category)
    );
  }, [movies, selectedCategories]);

  const paginatedMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredMovies.slice(startIndex, startIndex + pageSize);
  }, [filteredMovies, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredMovies.length / pageSize);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error loading movies: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      {/* Categories Button */}
      <div className="mb-4 flex space-x-2">
        {Array.from(categories).map(category => (
          <button
            key={category}
            onClick={() => dispatch(toggleCategory(category))}
            className={`px-4 py-2 rounded ${
              selectedCategories
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Page Size */}
      <div className="flex mb-4 items-center space-x-2">
        <span>Page Size:</span>
        {ListPage.map(size => (
          <button
            key={size}
            onClick={() => dispatch(setPageSize(size))}
            className={`px-2 py-1 rounded ${
              pageSize === size
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* List of Movies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => dispatch(changePage(currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          <ChevronLeft />
        </button>
        <span className="px-4 py-2">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => dispatch(changePage(currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
