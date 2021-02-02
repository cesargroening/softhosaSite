import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, AfterViewInit {
  
  @ViewChild('fondo') fondo: ElementRef;

  contenedor = {
    scrollTop: function(){}
  };
  constructor() { }
  ngOnInit() {
    this.contenedor = $('body');
  }
//contenedor.scrollTop()
  ngAfterViewInit(){
    console.log(this.fondo, '<<<CONTENEDOR');
  }

}