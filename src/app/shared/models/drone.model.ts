import { Trip } from "./trip.model";
export interface Drone {
  id: number;
  name: string;
  weightLimit: number;
  currentWeight: number;
  trips: Trip[];
}
