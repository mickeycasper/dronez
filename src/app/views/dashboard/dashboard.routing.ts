import { Routes } from "@angular/router";

import { DronezComponent } from "./dronez/dronez.component";

export const DashboardRoutes: Routes = [
  {
    path: "dronez",
    component: DronezComponent,
    data: { title: "Dronez", breadcrumb: "Dronez" },
  },
];
