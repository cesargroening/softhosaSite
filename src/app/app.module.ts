import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ScrollSpyDirective } from "./scroll-spy.directive";
import { ParticleComponent } from './particle/particle.component';
import { CarouselComponent } from './experiencia/carousel/carousel.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavBarComponent,
    InicioComponent,
    AboutComponent,
    ExperienciaComponent,
    ContactoComponent,
    ScrollSpyDirective,
    ParticleComponent,
    CarouselComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
