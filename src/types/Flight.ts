import type Segment from "./Segment";
export default interface Flight {
  departureDateTime: string;
  arrivalDateTime: string;
  layovers: number;
  segments: Segment[];
  origin: string;
  destination: string;
}
