import { Status } from "./Status";

export interface MovieResponse {
  id: number,
  title: string,
  description: string,
  status: Status,
  image: String,
  releaseDate: String,
  duration: String,
  isTrending: boolean,
  bannerImage: string
}
