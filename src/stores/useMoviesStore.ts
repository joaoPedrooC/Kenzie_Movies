import { create } from "zustand";
import { api } from "../services/api";
import { Movie } from "../interfaces/MoviesInterfaces";

interface MovieStoreInterface {
  moviesList: Movie[];
  readAllMovies: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  readMovieById: () => void;
  createReview: () => void;
  editReview: () => void;
  deleteReview: () => void;
}

export const useMovieStore = create<MovieStoreInterface>((set) => ({
  moviesList: [],
  readAllMovies: async ( setLoading ) => {
    try {
      setLoading(true);
      const movies = await api.get('/movies?_embed=reviews');
      
      set({ moviesList: movies.data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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