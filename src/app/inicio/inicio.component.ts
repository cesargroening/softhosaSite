import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Location } from "@angular/common";
import { $ } from "protractor";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  [x: string]: any;
  currentSection = "";
  prueba = "xxxx";

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {}

  ngOnInit() {
    this._router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentSection =
          "/" + this._route.snapshot.paramMap.get("seccion");
        this.scrollTo(this.currentSection);
      }
    });
    console.log(this.currentSection, "<<RUTA?");

    let height = this._el.nativeElement.parentElement.parentElement
      .parentElement.clientHeight;
    //this._el.nativeElement.children[0].style.height = `${height | 0}px`;
  }

  

  onScroll(evento){
    this.prueba = "asdlkajskldjaksldj";
  }

  onSectionChange(seccion: any) {
    console.log(seccion);
    this.currentSection = "/" + seccion;
    this._router.navigate([this.currentSection]);
    this._location.go(this.currentSection);
  }

  scrollTo(seccion) {
    seccion = seccion.replace("/", "");
    let elemento = document.querySelector("#" + seccion);
    console.log(seccion, "<<scrollto");
    if (elemento) {
      console.log("SCROLL");
      elemento.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    console.log(event, "EVENT");
    let height = event.target.innerHeight;
    //this._el.nativeElement.children[0].style.height = `${height | 0}px`;
  }
}
