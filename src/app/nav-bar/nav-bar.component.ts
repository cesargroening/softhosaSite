import { Component, OnInit } from "@angular/core";
declare let $: any;

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  contenedor = {
    scrollTop: 0
  };
  constructor() {
    
  }

  ngOnInit() {
    this.contenedor = $('body');
  }
}
