import { useDispatch } from 'react-redux';
import { X, ThumbsUp, ThumbsDown } from 'lucide-react';
import { deleteMovie, toggleLike, toggleDislike } from '../redux/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const totalVotes = movie.likes + movie.dislikes;
const likePercentage = totalVotes > 0 ? (movie.likes / totalVotes) * 100 : 0;

return (
  <div className="border rounded-lg p-4 m-2 w-64 shadow-md relative">
    <button
      onClick={() => dispatch(deleteMovie(movie.id))}
      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
    >
      <X size={20} />
    </button>
    <h2 className="font-bold text-xl mb-2">{movie.title}</h2>
    <p className="text-gray-600 mb-2">{movie.category}</p>

    <div className="flex items-center space-x-2 mb-2">
      <button
        onClick={() => dispatch(toggleLike(movie.id))}
        className="flex items-center text-green-500 hover:text-green-700"
      >
        <ThumbsUp size={16} />
        <span className="ml-1">{movie.likes}</span>
      </button>
      <button
        onClick={() => dispatch(toggleDislike(movie.id))}
        className="flex items-center text-red-500 hover:text-red-700"
      >
        <ThumbsDown size={16} />
        <span className="ml-1">{movie.dislikes}</span>
      </button>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: `${likePercentage}%` }}
      />
    </div>
  </div>
)};

export default MovieCard;
