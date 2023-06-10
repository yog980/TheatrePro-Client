import { Status } from "src/app/movie/model/Status";

export interface SeatResponse {
  seatId: number,
  booked: boolean,
  disabled: boolean,
  status: Status,
  movieShowId: number
}
