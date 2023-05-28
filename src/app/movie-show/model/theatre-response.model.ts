import { Status } from "src/app/movie/model/Status";

export interface TheatreResponse {
  title: string;
  seats: number;
  status: Status;
}
