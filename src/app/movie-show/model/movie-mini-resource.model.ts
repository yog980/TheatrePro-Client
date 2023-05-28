import { Status } from "src/app/movie/model/Status"

export interface MovieMiniResource {
  movieId: number;
  movieTitle: string;
  movieStatus: Status;
}
