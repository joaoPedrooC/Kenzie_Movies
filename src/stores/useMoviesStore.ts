import { create } from "zustand";
import { api } from "../services/api";
import { Movie, Reviews } from "../interfaces/MoviesInterfaces";

interface MovieStoreInterface {
  moviesList: Movie[];
  singleMovie: Movie | null;
  userReview: Reviews | undefined;
  readAllMovies: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  readMovieById: (movieId: number, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  createReview: () => void;
  editReview: () => void;
  deleteReview: () => void;
}

export const useMovieStore = create<MovieStoreInterface>((set) => ({
  moviesList: [],
  singleMovie: null,
  userReview: undefined,
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
  readMovieById: async (movieId, setLoading) => {
    try {
      const { data } = await api.get(`/movies/${movieId}?_embed=reviews`);
  
      const userId = Number(localStorage.getItem('@KenzieMovieUserId'));
      const userReview: Reviews | undefined = data.reviews.find((review: Reviews) => review.userId === userId);

      set({ singleMovie: data, userReview: userReview });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },
  createReview: () => {
    
  },
  editReview: () => {

  },
  deleteReview: () => {

  }
}));