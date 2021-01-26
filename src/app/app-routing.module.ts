import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes = [
  {
    path: "",
    component: InicioComponent,
    pathMatch: "full"
  },
  {
    path: ":seccion",
    component: InicioComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      enableTracing: true // <-- debugging purposes only
    })
    // other imports here
  ]
})
export class AppRoutingModule {}
