import type Flight from "./Flight";
export default interface Option {
  outwardFlight: Flight;
  returnFlight: Flight;
  price: number;
  id: string;
}
