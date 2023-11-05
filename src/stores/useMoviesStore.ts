import { create } from "zustand";
import { api } from "../services/api";
import { Movie } from "../interfaces/MoviesInterfaces";

interface MovieStoreInterface {
  moviesList: Movie[];
  readAllMovies: () => void;
  readMovieById: () => void;
  createReview: () => void;
  editReview: () => void;
  deleteReview: () => void;
}

export const useMovieStore = create<MovieStoreInterface>((set) => ({
  moviesList: [],
  readAllMovies: async () => {
    try {
      const movies = await api.get('/movies?_embed=reviews');
      
      set({ moviesList: movies.data });
    } catch (error) {
      console.log(error);
    }
  },
  readMovieById: () => {

  },
  createReview: () => {
    
  },
  editReview: () => {

  },
  deleteReview: () => {

  }
}));