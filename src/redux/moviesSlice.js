import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies$ } from '../model/movies';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const movies = await movies$;
  return movies;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    categories: [],
    selectedCategories: [],
    pageSize: 4,
    currentPage: 1,
    loading: false,
    error: null,
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
      state.categories = [...new Set(state.movies.map(m => m.category))];
      state.currentPage = 1;
    },
    toggleLike: (state, action) => {
        const movie = state.movies.find(m => m.id === action.payload);
        if (movie) {
          if (movie.dislikes > 0) {
            movie.likes++;
            movie.dislikes--;
          } else {
            movie.likes++;
          }
        }
      },
      toggleDislike: (state, action) => {
        const movie = state.movies.find(m => m.id === action.payload);
        if (movie) {
          if (movie.likes > 0) {
            movie.dislikes++;
            movie.likes--;
          } else {
            movie.dislikes++;
          }
        }
      },
    toggleCategory: (state, action) => {
      if (state.selectedCategories.includes(action.payload)) {
        state.selectedCategories = state.selectedCategories.filter(
          category => category !== action.payload
        );
      } else {
        state.selectedCategories.push(action.payload);
      }
      state.currentPage = 1;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      state.currentPage = 1;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.categories = [...new Set(action.payload.map(m => m.category))];
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  deleteMovie,
  toggleLike,
  toggleDislike,
  toggleCategory,
  setPageSize,
  changePage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
