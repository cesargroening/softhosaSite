import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiencia",
  templateUrl: "./experiencia.component.html",
  styleUrls: ["./experiencia.component.css"]
})
export class ExperienciaComponent{
  window = {innerHeight: 0};
  images = [700, 533, 807, 124].map(
    n => `https://picsum.photos/id/${n}/900/500`
  );

}
