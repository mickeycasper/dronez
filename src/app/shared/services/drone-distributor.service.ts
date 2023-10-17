import { Injectable } from "@angular/core";
import { Trip } from "../models/trip.model";
import { Package } from "../models/package.model";
import { Drone } from "../models/drone.model";

@Injectable({
  providedIn: "root",
})
export class DroneDistributorService {
  constructor() {}

  distributePackages = (packages: Package[], drones: Drone[]): Drone[] => {
    // Sort packages by weight in ascending order
    packages.sort((a, b) => a.weight - b.weight);

    // Sort drones by weight limit in ascending order
    drones.sort((a, b) => a.weightLimit - b.weightLimit);

    // Distribute packages to drones
    for (const pkg of packages) {
      let assigned = false;

      for (const drone of drones) {
        if (drone.currentWeight + pkg.weight <= drone.weightLimit) {
          // Add the package to the current trip of the drone
          if (!drone.trips.length || drone.currentWeight === 0) {
            drone.trips.push({
              id: "Trip # " + (drone.trips.length + 1),
              packages: [],
            });
          }

          const currentTrip = drone.trips[drone.trips.length - 1];
          currentTrip.packages.push(pkg);
          drone.currentWeight += pkg.weight;
          assigned = true;

          // Check if the drone has reached its weight limit and needs to make a new trip
          if (drone.currentWeight === drone.weightLimit) {
            drone.currentWeight = 0; // Reset current weight for next trip
          }

          break; // Exit loop if package is assigned
        }
      }

      // If for any reason we got here, no drone has room in its current trip,
      // and we need to create a new trip for the most appropriate drone
      if (!assigned) {
        const droneWithLeastTrips = drones.sort(
          (a, b) => a.trips.length - b.trips.length
        )[0];
        droneWithLeastTrips.trips.push({
          id: "Trip # " + (droneWithLeastTrips.trips.length + 1),
          packages: [pkg],
        });
        droneWithLeastTrips.currentWeight = pkg.weight;
      }
    }

    return drones;
  };
}
