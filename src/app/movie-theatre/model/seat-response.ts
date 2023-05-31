import { Status } from "src/app/movie/model/Status";

export interface SeatResponse {
  seatId: number,
  isBooked: boolean,
  isDisabled: boolean,
  status: Status,
  movieShowId: number
}
