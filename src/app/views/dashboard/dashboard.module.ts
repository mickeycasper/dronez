import { SharedMaterialModule } from "app/shared/shared-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";
import { DashboardRoutes } from "./dashboard.routing";
import { DronezComponent } from "./dronez/dronez.component";

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    SharedPipesModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [DronezComponent],
  exports: [],
})
export class DashboardModule {}
