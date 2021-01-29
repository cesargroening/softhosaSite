(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/Dj":
/*!******************************************************!*\
  !*** ./src/app/experiencia/experiencia.component.ts ***!
  \******************************************************/
/*! exports provided: ExperienciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function() { return ExperienciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_experiencia_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./experiencia.component.html */ "GEQn");
/* harmony import */ var _experiencia_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experiencia.component.css */ "ZwSW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExperienciaComponent = class ExperienciaComponent {
    constructor() {
        this.images = [700, 533, 807, 124].map(n => `https://picsum.photos/id/${n}/900/500`);
    }
};
ExperienciaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-experiencia",
        template: _raw_loader_experiencia_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_experiencia_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExperienciaComponent);



/***/ }),

/***/ "/oDX":
/*!****************************************!*\
  !*** ./src/app/particle/ball.model.ts ***!
  \****************************************/
/*! exports provided: TAU, Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAU", function() { return TAU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
const TAU = 2 * Math.PI;
class Ball {
    constructor(startX, startY, startVelX, startVelY, canvasWidth, canvasHeight) {
        this.startX = startX;
        this.startY = startY;
        this.x = startX || Math.random() * canvasWidth;
        this.y = startY || Math.random() * canvasHeight;
        this.vel = {
            x: startVelX || Math.random() * .5,
            y: startVelY || Math.random() * .5
        };
    }
    update(canvasWidth, canvasHeight) {
        if (this.x > canvasWidth + 50 || this.x < -50) {
            this.vel.x = -this.vel.x;
        }
        if (this.y > canvasHeight + 50 || this.y < -50) {
            this.vel.y = -this.vel.y;
        }
        if (this.x > this.startX + 50 || this.x < this.startX - 50) {
            this.vel.x = -this.vel.x;
        }
        if (this.y > this.startY + 50 || this.y < this.startY - 50) {
            this.vel.y = -this.vel.y;
        }
        this.x += this.vel.x;
        this.y += this.vel.y;
    }
    draw(ctx, can) {
        ctx.beginPath();
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = "#ffffff";
        ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 6, 0, TAU, false);
        ctx.fill();
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ramses Bautista\source\repos\softhosa-site\src\main.ts */"zUnb");


/***/ }),

/***/ "1VHI":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HelloComponent = class HelloComponent {
};
HelloComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: ["h1 { font-family: Lato; }"]
    })
], HelloComponent);



/***/ }),

/***/ "2Ic5":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".particulas {\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.principal {\r\n  padding-top: 80px;\r\n  background: linear-gradient(0deg, rgba(255,255,255,1) 5%, rgba(140,140,140,1) 46%, rgba(19,7,107,1) 91%);\r\n\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.contenedor-texto {\r\n  padding: 10%;\r\n}\r\n\r\n.contenedor-texto h1 {\r\n  font-size: 4em;\r\n  font-weight: bolder;\r\n  color: white;\r\n  text-shadow: 4px 5px 3px #0a0056;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdHQUF3Rzs7RUFFeEcsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQyIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpY3VsYXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSA1JSwgcmdiYSgxNDAsMTQwLDE0MCwxKSA0NiUsIHJnYmEoMTksNywxMDcsMSkgOTElKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGV4dG8ge1xyXG4gIHBhZGRpbmc6IDEwJTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGV4dG8gaDEge1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiA0cHggNXB4IDNweCAjMGEwMDU2O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "5TFM":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\n\t<app-particle class=\"particulas\" ></app-particle>\n\t<div class=\"col-12 col-sm-8 contenedor-texto\">\n\t\t<h1>Logra un mayor impacto en tus Clientes</h1>\n\t</div>\n\n\t<div class=\"col-12 col-sm-6\">\n\n\t</div>\n\t<br>\n\t<br>\n\t<br>\n\t<br>\n\t<br>\n</div>");

/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "oXoT");
/* harmony import */ var _nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar.component.css */ "v9j5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavBarComponent = class NavBarComponent {
    constructor() {
        this.contenedor = {
            scrollTop: 0
        };
    }
    ngOnInit() {
        this.contenedor = $('body');
    }
};
NavBarComponent.ctorParameters = () => [];
NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-nav-bar",
        template: _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavBarComponent);



/***/ }),

/***/ "5sMs":
/*!************************************************!*\
  !*** ./src/app/particle/particle.component.ts ***!
  \************************************************/
/*! exports provided: ParticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleComponent", function() { return ParticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./particle.component.html */ "gRqk");
/* harmony import */ var _particle_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particle.component.css */ "Tryx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ball_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ball.model */ "/oDX");





let ParticleComponent = class ParticleComponent {
    constructor() {
        this.TAU = 2 * Math.PI;
        this.width = 500;
        this.times = [];
        this.balls = [];
        this.lastTime = Date.now();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.width = window.innerWidth;
        this.particalCanvas.nativeElement.width = this.width;
        this.particalCanvas.nativeElement.height = 500;
        this.canvasWidth = this.particalCanvas.nativeElement.width;
        this.canvasHeight = this.particalCanvas.nativeElement.height;
        this.context = this.particalCanvas.nativeElement.getContext('2d');
        this.setupCanvas();
    }
    setupCanvas() {
        for (var i = 0; i < this.canvasWidth * this.canvasHeight / (100 * 100); i++) {
            this.balls.push(new _ball_model__WEBPACK_IMPORTED_MODULE_4__["Ball"](Math.random() * this.canvasWidth, Math.random() * this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight));
        }
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this));
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.update();
        this.draw();
    }
    update() {
        let diff = Date.now() - this.lastTime;
        for (var frame = 0; frame * 16.6667 < diff; frame++) {
            for (var index = 0; index < this.balls.length; index++) {
                this.balls[index].update(this.canvasWidth, this.canvasHeight);
            }
        }
        this.lastTime = Date.now();
    }
    draw() {
        this.context.globalAlpha = 1;
        this.context.fillStyle = 'transparent';
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (var index = 0; index < this.balls.length; index++) {
            var ball = this.balls[index];
            ball.draw(this.context, this.particalCanvas);
            this.context.beginPath();
            for (var index2 = this.balls.length - 1; index2 > index; index2 += -1) {
                var ball2 = this.balls[index2];
                var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
                if (dist < 150) {
                    this.context.strokeStyle = "#ffffff";
                    this.context.globalAlpha = 1 - (dist / 150);
                    this.context.lineWidth = 0.5;
                    this.context.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
                    this.context.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
                }
            }
            this.context.stroke();
        }
    }
};
ParticleComponent.ctorParameters = () => [];
ParticleComponent.propDecorators = {
    particalCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['particleCanvas', { static: false },] }]
};
ParticleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-particle',
        template: _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_particle_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParticleComponent);



/***/ }),

/***/ "7ZR9":
/*!*****************************************!*\
  !*** ./src/app/scroll-spy.directive.ts ***!
  \*****************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ScrollSpyDirective = class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.firstElementChild.scrollTop;
        const parentOffset = event.target.firstElementChild.scrollTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if (element.offsetTop <= scrollTop) {
                    currentSection = element.id || this.currentSection;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection || this.currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
};
ScrollSpyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ScrollSpyDirective.propDecorators = {
    spiedTags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    sectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["window:scroll", ["$event"],] }]
};
ScrollSpyDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[scrollSpy]"
    })
], ScrollSpyDirective);



/***/ }),

/***/ "7fsw":
/*!************************************************************!*\
  !*** ./src/app/experiencia/carousel/carousel.component.ts ***!
  \************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carousel.component.html */ "QFlM");
/* harmony import */ var _carousel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.component.css */ "hxG3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent.ctorParameters = () => [];
CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carousel',
        template: _raw_loader_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carousel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CarouselComponent);



/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "5TFM");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.css */ "2Ic5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutComponent);



/***/ }),

/***/ "9ixo":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.component.html */ "fx4J");
/* harmony import */ var _inicio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.component.css */ "Ll4m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let InicioComponent = class InicioComponent {
    constructor(_router, _route, _location, _el, _renderer) {
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._el = _el;
        this._renderer = _renderer;
        this.currentSection = "";
        this.prueba = "xxxx";
    }
    ngOnInit() {
        this._router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
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
    onScroll(evento) {
        this.prueba = "asdlkajskldjaksldj";
    }
    onSectionChange(seccion) {
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
    onResize(event) {
        console.log(event, "EVENT");
        let height = event.target.innerHeight;
        //this._el.nativeElement.children[0].style.height = `${height | 0}px`;
    }
};
InicioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
InicioComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:resize", ["$event"],] }]
};
InicioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-inicio",
        template: _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */");

/***/ }),

/***/ "ErXn":
/*!*************************************************!*\
  !*** ./src/app/contacto/contacto.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\r\n  padding-top: -80px;\r\n  margin-top: -80px;\r\n  background-image: linear-gradient(yellow, red);\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhDQUE4QztFQUM5QyxXQUFXO0FBQ2IiLCJmaWxlIjoiY29udGFjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWwge1xyXG4gIHBhZGRpbmctdG9wOiAtODBweDtcclxuICBtYXJnaW4tdG9wOiAtODBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoeWVsbG93LCByZWQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "GEQn":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiencia/experiencia.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedor\">\r\n    <div class=\"principal\">\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t  <div class=\"carousel-item elemento-carousel active\">\r\n                <img class=\"d-block w-100\" src=\"../../assets/principal1.jpeg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Somo analíticos</h5>\r\n                    <p>Analizamos las opciones y te ofrecemos la mejor solución en TI para tu empresa</p>\r\n                </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"carousel-item elemento-carousel\">\r\n                <img class=\"d-block w-100\" src=\"./../assets/principal2.jpeg\" alt=\"Second slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Soluciones a la medida</h5>\r\n                    <p>Nuestras desarrollos son compatibles con cualquier dispositivo movil</p>\r\n                </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"carousel-item elemento-carousel\">\r\n                <img class=\"d-block w-100\" src=\"./../assets/principal3.jpeg\" alt=\"Third slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Experiencia</h5>\r\n                    <p>Hemos desarrollado desde páginas web hasta sistemas completos para el manejo de diferetens tipos de negocios</p>\r\n                </div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n\t\t\t  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t  <span class=\"sr-only\">Previous</span>\r\n\t\t\t</a>\r\n\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n\t\t\t  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t  <span class=\"sr-only\">Next</span>\r\n\t\t\t</a>\r\n\t\t  </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Ll4m":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\r\n  padding-top: 80px;\r\n  background-image: linear-gradient(#000070, #00009d);\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxXQUFXO0FBQ2IiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMDA3MCwgIzAwMDA5ZCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "QFlM":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiencia/carousel/carousel.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>carousel works!</p>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_3__["VERSION"].major;
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tryx":
/*!*************************************************!*\
  !*** ./src/app/particle/particle.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "UvRC":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contacto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contacto.component.html */ "kaPr");
/* harmony import */ var _contacto_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacto.component.css */ "ErXn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContactoComponent = class ContactoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactoComponent.ctorParameters = () => [];
ContactoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacto',
        template: _raw_loader_contacto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacto_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactoComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\n<router-outlet (scroll)=\"scroll($event)\"></router-outlet>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello.component */ "1VHI");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inicio/inicio.component */ "9ixo");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experiencia/experiencia.component */ "+/Dj");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacto/contacto.component */ "UvRC");
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scroll-spy.directive */ "7ZR9");
/* harmony import */ var _particle_particle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./particle/particle.component */ "5sMs");
/* harmony import */ var _experiencia_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./experiencia/carousel/carousel.component */ "7fsw");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
            _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_10__["ExperienciaComponent"],
            _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__["ContactoComponent"],
            _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_12__["ScrollSpyDirective"],
            _particle_particle_component__WEBPACK_IMPORTED_MODULE_13__["ParticleComponent"],
            _experiencia_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZwSW":
/*!*******************************************************!*\
  !*** ./src/app/experiencia/experiencia.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" .principal {\r\n  background: #ff0016;\r\n  width: 100%;\r\n  border-radius: 19px;\r\n  box-shadow: black 1px 1px 15px;\r\n} \r\n\r\n.contenedor{\r\n  padding-left: 1%;\r\n  padding-right: 1%;\r\n  margin-top: -100px;\r\n  margin-bottom: 100px;\r\n  z-index: 30;\r\n} \r\n\r\n.carousel-inner{\r\n  padding-bottom: 0 !important;\r\n} \r\n\r\n.carousel-item{\r\n  max-height: 600px;\r\n} \r\n\r\n.carousel-inner{\r\n  padding-bottom: 100px;\r\n  max-height: 600px;\r\n  overflow: hidden;\r\n  border-radius: 19px;\r\n\r\n} \r\n\r\n.carousel-inner img {\r\n  margin: auto;\r\n  width: 100% !important;\r\n  opacity: 0.5;\r\n  \r\n  \r\n  /* box-shadow: gray 10px 10px 10px; */\r\n} \r\n\r\n.carousel-caption {\r\n  top: 0 !important;\r\n  height: 100% !important;\r\n  vertical-align: center !important;\r\n  padding-top: 20% !important;\r\n} \r\n\r\n.carousel-caption h5{\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n} \r\n\r\n.carousel-caption p{\r\n  font-size: 36px;\r\n} \r\n\r\n/* \r\n.elemento-carousel::before{\r\n  opacity: 0.5;\r\n  position: absolute;\r\n  z-index: 8;\r\n  content:\"\";\r\n  height: 100%;\r\n  width: 100%;\r\n  padding-top: 80px;\r\n  background: #ff0016;\r\n  width: 100%;\r\n  box-shadow: gray 10px 10px 10px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2lhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTs7O0VBR1oscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7Ozs7Ozs7Ozs7OztHQVlHIiwiZmlsZSI6ImV4cGVyaWVuY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnByaW5jaXBhbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmMDAxNjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMTVweDtcclxufSBcclxuXHJcbi5jb250ZW5lZG9ye1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIHotaW5kZXg6IDMwO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbXtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuXHJcbn1cclxuLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIFxyXG4gIFxyXG4gIC8qIGJveC1zaGFkb3c6IGdyYXkgMTBweCAxMHB4IDEwcHg7ICovXHJcbn1cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcm91c2VsLWNhcHRpb24gaDV7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcbi8qIFxyXG4uZWxlbWVudG8tY2Fyb3VzZWw6OmJlZm9yZXtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDg7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDE2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IGdyYXkgMTBweCAxMHB4IDEwcHg7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "fx4J":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"parentDiv\" scrollSpy [spiedTags]=\"['DIV']\" (sectionChange)=\"onSectionChange($event)\"\n\t(scroll)=\"onScroll($event)\">\n\t\n\t<div id=\"about\">\n\t\t<app-about></app-about>\n\t</div>\n\t<div id=\"experiencia\">\n\t\t<app-experiencia></app-experiencia>\n\t</div>\n\t<div id=\"contacto\">\n\t\t<app-contacto></app-contacto>\n\t</div>\n</div>");

/***/ }),

/***/ "gRqk":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/particle/particle.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas #particleCanvas style=\"z-index:-10;\"></canvas>");

/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "hxG3":
/*!*************************************************************!*\
  !*** ./src/app/experiencia/carousel/carousel.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "kaPr":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal row\">\n\t<div class=\"col-12 col-sm-6\">\n\t\t<h1>About</h1>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\n\t</div>\n\t\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xs-6 derecho\">\n\t\t</div>\n\t</div>");

/***/ }),

/***/ "oXoT":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav id=\"navbar\" class=\"navbar navbar-expand\" [ngClass]=\"{'shrink-navbar': contenedor.scrollTop() > 300 || contenedor.scrollTop() > 300}\">\n\t<a class=\"navbar-brand\" href=\"#\">\n\t\t<img class=\"logo\"  src='/assets/Logo.svg'>\n    </a>\n\t\t\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n      <button type=\"button\" style=\"position: absolute;\" class=\"cerrar close\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n\n\t\t<button type=\"button\" style=\"position: absolute;\" class=\"mostrar close\" aria-label=\"Close\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n\t\t</button>\n\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t<ul class=\"navbar-nav mr-auto\">\n\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/about\">Sobre\n\t\t\t\t\t\tNosotros<span class=\"sr-only\"></span></a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/experiencia\">Nuestra Experiencia</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/contacto\">Cotactanos!</a>\n\t\t\t\t</li>\n\n\n\t\t\t</ul>\n\t\t</div>\n</nav>");

/***/ }),

/***/ "v9j5":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.shrink-navbar a{\r\n  -webkit-animation-name: texto-animacion;\r\n          animation-name: texto-animacion;\r\n  -webkit-animation-duration: 0.2s;\r\n          animation-duration: 0.2s;\r\n  font-size: 14px;\r\n  \r\n}\r\n\r\n.shrink-navbar{\r\n  opacity: 0.8 !important;\r\n  background-color: white;\r\n  background: white;\r\n  opacity: 0.6 !important;\r\n  box-shadow: black 1px 2px 7px;\r\n  height: 50px !important;\r\n  font-size: 10px !important; \r\n  position: fixed;\r\n  width: 101%;\r\n  left: 0;\r\n  z-index: 108;\r\n  height: 50px;\r\n  -webkit-animation: navbar-animacion;\r\n          animation: navbar-animacion;\r\n  -webkit-animation-duration: 0.2s;\r\n          animation-duration: 0.2s;\r\n  \r\n\r\n}\r\n\r\n@-webkit-keyframes  navbar-animacion {\r\n  from{\r\n  }\r\n  to{\r\n    height: 50px;\r\n  }\r\n }\r\n\r\n@keyframes  navbar-animacion {\r\n  from{\r\n  }\r\n  to{\r\n    height: 50px;\r\n  }\r\n }\r\n\r\n@-webkit-keyframes  texto-animacion {\r\n from{\r\n   font-size: 24px;\r\n }\r\n to{\r\n   font-size: 14px;\r\n }\r\n}\r\n\r\n@keyframes  texto-animacion {\r\n from{\r\n   font-size: 24px;\r\n }\r\n to{\r\n   font-size: 14px;\r\n }\r\n}\r\n\r\n.cerrar {\r\n  font-size: 104px;\r\n  opacity: 0;\r\n  top: 60px;\r\n  right: 50px;\r\n}\r\n\r\n.mostrar {\r\n  font-size: 104px;\r\n  opacity: 1;\r\n  top: 50px;\r\n  right: 50px;\r\n}\r\n\r\n.mostrar .navbar-toggler-icon {\r\n  width: 0.7em;\r\n}\r\n\r\n.navbar {\r\n  position: fixed;\r\n  width: 101%;\r\n  left: 0;\r\n  transition: font-size 10s !important;\r\n  z-index: 108;\r\n  \r\n}\r\n\r\n.navbar-brand img ::ng-deep {\r\n  top: 5px !important;\r\n  opacity: 1 !important;\r\n  height: 50px;\r\n}\r\n\r\n#navbarSupportedContent {\r\n  margin-left: 122px !important;\r\n}\r\n\r\n.nav-link {\r\n  text-align: center !important;\r\n  font: bold 20px;\r\n  letter-spacing: 0px !important;\r\n  color: #ff0000 !important;\r\n  opacity: 1;\r\n  font-weight: 200;\r\n  font-size: 24px;\r\n  font-family: arial;\r\n  \r\n}\r\n\r\n.btn-contactanos {\r\n  right: 0;\r\n  position: fixed;\r\n  margin-right: 80px;\r\n\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n\r\n  text-align: center;\r\n  font: normal normal bold 12px/20px Montserrat;\r\n  letter-spacing: 0px;\r\n  background: #44d62c 0% 0% no-repeat padding-box;\r\n  border-color: #44d62c;\r\n  border-radius: 16px;\r\n  opacity: 1;\r\n  width: 150px;\r\n  height: 32px;\r\n  margin-left: 32px;\r\n}\r\n\r\n.navbar-brand {\r\n  margin-left: 130px;\r\n  margin-top: 5px;\r\n}\r\n\r\n#navbarSupportedContent a {\r\n  margin-left: 31px !important;\r\n}\r\n\r\na.nav-link.active::after {\r\n  width: 100%;\r\n}\r\n\r\n.nav-link::after {\r\n  content: \"\";\r\n  width: 0%;\r\n  background: #ff0000 !important;\r\n  height: 4px;\r\n  top: 7px;\r\n  position: relative;\r\n  float: left;\r\n  \r\n}\r\n\r\n.nav-link:hover::after {\r\n  -webkit-animation: animacion 0.2s linear forwards;\r\n          animation: animacion 0.2s linear forwards;\r\n}\r\n\r\n@-webkit-keyframes animacion {\r\n  0% {\r\n    width: 0;\r\n    left: 50%;\r\n  }\r\n  70% {\r\n    width: 50%;\r\n    left: calc(50% - (25%));\r\n  }\r\n  100% {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes animacion {\r\n  0% {\r\n    width: 0;\r\n    left: 50%;\r\n  }\r\n  70% {\r\n    width: 50%;\r\n    left: calc(50% - (25%));\r\n  }\r\n  100% {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .invalid-feedback {\r\n    font-size: 15px;\r\n  }\r\n\r\n  body {\r\n    width: -webkit-fit-content !important;\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n  }\r\n\r\n  .navbar-brand ::ng-deep {\r\n    margin-left: 0px;\r\n    padding: 20px !important;\r\n    z-index: 108;\r\n  }\r\n\r\n  .nav-link {\r\n    letter-spacing: var(--unnamed-character-spacing-0) !important;\r\n\r\n    font: normal normal bold 50px Montserrat !important;\r\n  }\r\n\r\n  .navbar ul {\r\n    line-height: 30;\r\n    align-items: center;\r\n  }\r\n\r\n  .navbar ul:first-child {\r\n    margin-top: 400px;\r\n  }\r\n\r\n  .navbar ul:last-child {\r\n    margin-bottom: 700px;\r\n  }\r\n\r\n  .navbar a {\r\n    padding-bottom: 100px;\r\n  }\r\n\r\n  #navbarSupportedContent {\r\n    margin-left: 0 !important;\r\n    z-index: 2;\r\n    left: 0;\r\n    height: -webkit-fit-content !important;\r\n    height: -moz-fit-content !important;\r\n    height: fit-content !important;\r\n    width: -webkit-fill-available !important;\r\n    position: fixed;\r\n    top: 0;\r\n    background-color: #f8f9fa !important;\r\n  }\r\n\r\n  .navbar .btn-contactanos {\r\n    padding: 10px;\r\n    margin-bottom: 100px;\r\n    border-radius: 70px;\r\n    position: relative;\r\n    margin: 0;\r\n    width: 128px;\r\n    height: 40px !important;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .navbar-brand img {\r\n    height: 40px;\r\n  }\r\n\r\n  .navbar {\r\n    position: relative;\r\n  }\r\n\r\n  .navbar-toggler {\r\n    padding-right: 20px;\r\n    font-size: 50px;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 0.25rem;\r\n    margin-right: 30px;\r\n    z-index: 10;\r\n  }\r\n\r\n  .collapsing {\r\n    transition: none;\r\n  }\r\n\r\n  .navbar-toggler[aria-expanded=\"true\"] .mostrar {\r\n    transition: all 0.5s ease-out;\r\n    opacity: 0;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"true\"] .cerrar {\r\n    transition: all 0.5s ease-in;\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"false\"] .cerrar {\r\n    transition: all 0.5s ease-out;\r\n    opacity: 0;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"false\"] .mostrar {\r\n    transition: all 0.5s ease-in;\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n\r\n  #navbarSupportedContent:not(.show) ul {\r\n    opacity: 0.1;\r\n  }\r\n  #navbarSupportedContent:not(.show) {\r\n    transform: scaleY(0);\r\n    transition: transform 0.2s ease-out;\r\n    transform-origin: top;\r\n    margin-top: 200px;\r\n  }\r\n\r\n  #navbarSupportedContent.show {\r\n    opacity: 1;\r\n    position: absolute !important;\r\n    transform: scaleY(1);\r\n    transition: transform 0.4s ease-in;\r\n    transform-origin: top;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n/* #navbarSupportedContent{\r\n    padding-left: 45% !important;\r\n}\r\n   */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFdBQVc7RUFDWCxPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7RUFDWixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGdDQUF3QjtVQUF4Qix3QkFBd0I7OztBQUcxQjs7QUFJQTtFQUNFO0VBQ0E7RUFDQTtJQUNFLFlBQVk7RUFDZDtDQUNEOztBQU5EO0VBQ0U7RUFDQTtFQUNBO0lBQ0UsWUFBWTtFQUNkO0NBQ0Q7O0FBRUQ7Q0FDQztHQUNFLGVBQWU7Q0FDakI7Q0FDQTtHQUNFLGVBQWU7Q0FDakI7QUFDRDs7QUFQQTtDQUNDO0dBQ0UsZUFBZTtDQUNqQjtDQUNBO0dBQ0UsZUFBZTtDQUNqQjtBQUNEOztBQUtBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxPQUFPO0VBQ1Asb0NBQW9DO0VBQ3BDLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLGVBQWU7RUFDZixrQkFBa0I7O0VBRWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRTtJQUNFLFFBQVE7SUFDUixTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7SUFDWCxPQUFPO0VBQ1Q7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUNBQTZCO0lBQTdCLGtDQUE2QjtJQUE3Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDZEQUE2RDs7SUFFN0QsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsT0FBTztJQUNQLHNDQUE4QjtJQUE5QixtQ0FBOEI7SUFBOUIsOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsTUFBTTtJQUNOLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUVFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7RUFDWDtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztFQUNYO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0VBQ1g7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixNQUFNO0VBQ1I7QUFDRjs7QUFFQTs7O0lBR0kiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaHJpbmstbmF2YmFyIGF7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHRleHRvLWFuaW1hY2lvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIFxyXG59XHJcblxyXG4uc2hyaW5rLW5hdmJhcntcclxuICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBibGFjayAxcHggMnB4IDdweDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDsgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDElO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBhbmltYXRpb246IG5hdmJhci1hbmltYWNpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzICBuYXZiYXItYW5pbWFjaW9uIHtcclxuICBmcm9te1xyXG4gIH1cclxuICB0b3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiB9XHJcbiBcclxuQGtleWZyYW1lcyAgdGV4dG8tYW5pbWFjaW9uIHtcclxuIGZyb217XHJcbiAgIGZvbnQtc2l6ZTogMjRweDtcclxuIH1cclxuIHRve1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jZXJyYXIge1xyXG4gIGZvbnQtc2l6ZTogMTA0cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDYwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5tb3N0cmFyIHtcclxuICBmb250LXNpemU6IDEwNHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubW9zdHJhciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgd2lkdGg6IDAuN2VtO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMSU7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMTBzICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMTA4O1xyXG4gIFxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIGltZyA6Om5nLWRlZXAge1xyXG4gIHRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQ6IGJvbGQgMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICBcclxufVxyXG5cclxuLmJ0bi1jb250YWN0YW5vcyB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi1yaWdodDogODBweDtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8yMHB4IE1vbnRzZXJyYXQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjNDRkNjJjIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXItY29sb3I6ICM0NGQ2MmM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IGEge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXYtbGluazo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZjAwMDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDRweDtcclxuICB0b3A6IDdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgXHJcbn1cclxuXHJcbi5uYXYtbGluazpob3Zlcjo6YWZ0ZXIge1xyXG4gIGFuaW1hdGlvbjogYW5pbWFjaW9uIDAuMnMgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hY2lvbiB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAoMjUlKSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5kIDo6bmctZGVlcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTA4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS11bm5hbWVkLWNoYXJhY3Rlci1zcGFjaW5nLTApICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDUwcHggTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB1bCB7XHJcbiAgICBsaW5lLWhlaWdodDogMzA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB1bDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgdWw6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MDBweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgYSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciAuYnRuLWNvbnRhY3Rhbm9zIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuXHJcbiAgLmNvbGxhcHNpbmcge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlclthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAubW9zdHJhciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlclthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAuY2VycmFyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXJbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdIC5jZXJyYXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXJbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdIC5tb3N0cmFyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQ6bm90KC5zaG93KSB1bCB7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG4gICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50Om5vdCguc2hvdykge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQuc2hvdyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAjbmF2YmFyU3VwcG9ydGVkQ29udGVudHtcclxuICAgIHBhZGRpbmctbGVmdDogNDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgKi9cclxuIl19 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ "9ixo");




const routes = [
    {
        path: "",
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
        pathMatch: "full"
    },
    {
        path: ":seccion",
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: "reload",
                enableTracing: true // <-- debugging purposes only
            })
            // other imports here
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map