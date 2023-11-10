export type Movie = {
  id: number;
  image: string;
  name: string;
  reviews: Array<Reviews>;
  synopsis: string;
  type: string;
  duration: number;
}

export type Reviews = {
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export type ReadMovieReturn = {
  movie: Movie;
  userReview: Reviews | undefined;
}