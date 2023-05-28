import { Status } from "src/app/movie/model/Status";
import { MovieShowShifts } from "./MovieShowShifts.model";
import { MovieMiniResource } from "./movie-mini-resource.model";
import { TheatreResponse } from "./theatre-response.model";

export interface MovieShowResponse {
  id: number;
  shift: MovieShowShifts;
  startTime: string;
  startDate: string;
  discountPercentage: number;
  movie: MovieMiniResource;
  theatre: TheatreResponse;
  status: Status;
}
