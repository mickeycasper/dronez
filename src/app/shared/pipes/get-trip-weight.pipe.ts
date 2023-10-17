import { Pipe, PipeTransform } from "@angular/core";
import { Trip } from "../models/trip.model";

@Pipe({
  name: "getTripWeight",
})
export class GetTripWeightPipe implements PipeTransform {
  transform(trip: Trip, ...args: any[]): number {
    console.log(trip);
    return trip.packages.reduce(
      (totalWeight, pkg) => totalWeight + pkg.weight,
      0
    );
  }
}
