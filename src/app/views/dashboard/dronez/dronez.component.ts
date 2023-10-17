import { Component, OnInit, AfterViewInit } from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import { Package } from "app/shared/models/package.model";
import { Drone } from "app/shared/models/drone.model";
import { DroneDistributorService } from "app/shared/services/drone-distributor.service";

@Component({
  selector: "app-dronez",
  templateUrl: "./dronez.component.html",
  styleUrls: ["./dronez.component.scss"],
  animations: matxAnimations,
})
export class DronezComponent implements OnInit, AfterViewInit {
  JSON: any; //to give templates access to JSON object

  packages: Package[] = [];
  drones: Drone[] = [];

  displayedDroneColumns = ["id", "name", "weightLimit", "trips"];

  constructor(
    private themeService: ThemeService,
    private droneService: DroneDistributorService
  ) {
    this.JSON = JSON;
  }

  ngAfterViewInit() {}
  ngOnInit() {
    this.drones.push(
      { id: 1, name: "george", weightLimit: 10, currentWeight: 0, trips: [] },
      { id: 2, name: "fred", weightLimit: 12, currentWeight: 0, trips: [] }
    );
    this.packages.push(
      { id: 1, location: "tulsa", weight: 5 },
      { id: 2, location: "bixby", weight: 8 },
      { id: 3, location: "claremore", weight: 3 },
      { id: 4, location: "catoosa", weight: 7 },
      { id: 5, location: "jenks", weight: 9 },
      { id: 6, location: "broken arrow", weight: 4 }
    );

    const resultDrones = this.droneService.distributePackages(
      this.packages,
      this.drones
    );
    /*
    resultDrones.forEach((drone) => {
      console.log(`Drone ${drone.id}: Total weight - ${drone.currentWeight}`);
      drone.trips.forEach((trip, index) => {
        console.log(
          `  Trip ${index + 1}: Packages - ${trip.packages
            .map((pkg) => pkg.id)
            .join(", ")}`
        );
      });
      console.log("\n");
    });
  */
  }
}
