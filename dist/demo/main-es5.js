(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+/Dj":
    /*!******************************************************!*\
      !*** ./src/app/experiencia/experiencia.component.ts ***!
      \******************************************************/

    /*! exports provided: ExperienciaComponent */

    /***/
    function Dj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function () {
        return ExperienciaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_experiencia_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./experiencia.component.html */
      "GEQn");
      /* harmony import */


      var _experiencia_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./experiencia.component.css */
      "ZwSW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExperienciaComponent = function ExperienciaComponent() {
        _classCallCheck(this, ExperienciaComponent);

        this.images = [700, 533, 807, 124].map(function (n) {
          return "https://picsum.photos/id/".concat(n, "/900/500");
        });
      };

      ExperienciaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-experiencia",
        template: _raw_loader_experiencia_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_experiencia_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExperienciaComponent);
      /***/
    },

    /***/
    "/oDX":
    /*!****************************************!*\
      !*** ./src/app/particle/ball.model.ts ***!
      \****************************************/

    /*! exports provided: TAU, Ball */

    /***/
    function oDX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TAU", function () {
        return TAU;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ball", function () {
        return Ball;
      });

      var TAU = 2 * Math.PI;

      var Ball = /*#__PURE__*/function () {
        function Ball(startX, startY, startVelX, startVelY, canvasWidth, canvasHeight) {
          _classCallCheck(this, Ball);

          this.startX = startX;
          this.startY = startY;
          this.x = startX || Math.random() * canvasWidth;
          this.y = startY || Math.random() * canvasHeight;
          this.vel = {
            x: startVelX || Math.random() * .5,
            y: startVelY || Math.random() * .5
          };
        }

        _createClass(Ball, [{
          key: "update",
          value: function update(canvasWidth, canvasHeight) {
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
        }, {
          key: "draw",
          value: function draw(ctx, can) {
            ctx.beginPath();
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "#ffffff";
            ctx.arc(0.5 + this.x | 0, 0.5 + this.y | 0, 6, 0, TAU, false);
            ctx.fill();
          }
        }]);

        return Ball;
      }();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Ramses Bautista\source\repos\softhosa-site\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1VHI":
    /*!************************************!*\
      !*** ./src/app/hello.component.ts ***!
      \************************************/

    /*! exports provided: HelloComponent */

    /***/
    function VHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
        return HelloComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: "<h1>Hello {{name}}!</h1>",
        styles: ["h1 { font-family: Lato; }"]
      })], HelloComponent);
      /***/
    },

    /***/
    "2Ic5":
    /*!*******************************************!*\
      !*** ./src/app/about/about.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Ic5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".particulas {\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.principal {\r\n  padding-top: 80px;\r\n  background: linear-gradient(0deg, rgba(255,255,255,1) 5%, rgba(140,140,140,1) 46%, rgba(19,7,107,1) 91%);\r\n\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.contenedor-texto {\r\n  padding: 10%;\r\n}\r\n\r\n.contenedor-texto h1 {\r\n  font-size: 4em;\r\n  font-weight: bolder;\r\n  color: white;\r\n  text-shadow: 4px 5px 3px #0a0056;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdHQUF3Rzs7RUFFeEcsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQyIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpY3VsYXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSA1JSwgcmdiYSgxNDAsMTQwLDE0MCwxKSA0NiUsIHJnYmEoMTksNywxMDcsMSkgOTElKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGV4dG8ge1xyXG4gIHBhZGRpbmc6IDEwJTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGV4dG8gaDEge1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiA0cHggNXB4IDNweCAjMGEwMDU2O1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "5TFM":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function TFM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"principal\">\n\t<app-particle class=\"particulas\" ></app-particle>\n\t<div class=\"col-12 col-sm-8 contenedor-texto\">\n\t\t<h1>Logra un mayor impacto en tus Clientes</h1>\n\t</div>\n\n\t<div class=\"col-12 col-sm-6\">\n\n\t</div>\n\t<br>\n\t<br>\n\t<br>\n\t<br>\n\t<br>\n</div>";
      /***/
    },

    /***/
    "5hVl":
    /*!**********************************************!*\
      !*** ./src/app/nav-bar/nav-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function hVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "oXoT");
      /* harmony import */


      var _nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-bar.component.css */
      "v9j5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ctorParameters = function () {
        return [];
      };

      NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-nav-bar",
        template: _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavBarComponent);
      /***/
    },

    /***/
    "5sMs":
    /*!************************************************!*\
      !*** ./src/app/particle/particle.component.ts ***!
      \************************************************/

    /*! exports provided: ParticleComponent */

    /***/
    function sMs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParticleComponent", function () {
        return ParticleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./particle.component.html */
      "gRqk");
      /* harmony import */


      var _particle_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./particle.component.css */
      "Tryx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ball_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ball.model */
      "/oDX");

      var ParticleComponent = /*#__PURE__*/function () {
        function ParticleComponent() {
          _classCallCheck(this, ParticleComponent);

          this.TAU = 2 * Math.PI;
          this.width = 500;
          this.times = [];
          this.balls = [];
          this.lastTime = Date.now();
        }

        _createClass(ParticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.width = window.innerWidth;
            this.particalCanvas.nativeElement.width = this.width;
            this.particalCanvas.nativeElement.height = 500;
            this.canvasWidth = this.particalCanvas.nativeElement.width;
            this.canvasHeight = this.particalCanvas.nativeElement.height;
            this.context = this.particalCanvas.nativeElement.getContext('2d');
            this.setupCanvas();
          }
        }, {
          key: "setupCanvas",
          value: function setupCanvas() {
            for (var i = 0; i < this.canvasWidth * this.canvasHeight / (100 * 100); i++) {
              this.balls.push(new _ball_model__WEBPACK_IMPORTED_MODULE_4__["Ball"](Math.random() * this.canvasWidth, Math.random() * this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight));
            }

            this.loop();
          }
        }, {
          key: "loop",
          value: function loop() {
            requestAnimationFrame(this.loop.bind(this));
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.update();
            this.draw();
          }
        }, {
          key: "update",
          value: function update() {
            var diff = Date.now() - this.lastTime;

            for (var frame = 0; frame * 16.6667 < diff; frame++) {
              for (var index = 0; index < this.balls.length; index++) {
                this.balls[index].update(this.canvasWidth, this.canvasHeight);
              }
            }

            this.lastTime = Date.now();
          }
        }, {
          key: "draw",
          value: function draw() {
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
                  this.context.globalAlpha = 1 - dist / 150;
                  this.context.lineWidth = 0.5;
                  this.context.moveTo(0.5 + ball.x | 0, 0.5 + ball.y | 0);
                  this.context.lineTo(0.5 + ball2.x | 0, 0.5 + ball2.y | 0);
                }
              }

              this.context.stroke();
            }
          }
        }]);

        return ParticleComponent;
      }();

      ParticleComponent.ctorParameters = function () {
        return [];
      };

      ParticleComponent.propDecorators = {
        particalCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['particleCanvas', {
            "static": false
          }]
        }]
      };
      ParticleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-particle',
        template: _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_particle_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParticleComponent);
      /***/
    },

    /***/
    "7ZR9":
    /*!*****************************************!*\
      !*** ./src/app/scroll-spy.directive.ts ***!
      \*****************************************/

    /*! exports provided: ScrollSpyDirective */

    /***/
    function ZR9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function () {
        return ScrollSpyDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ScrollSpyDirective = /*#__PURE__*/function () {
        function ScrollSpyDirective(_el) {
          _classCallCheck(this, ScrollSpyDirective);

          this._el = _el;
          this.spiedTags = [];
          this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ScrollSpyDirective, [{
          key: "onScroll",
          value: function onScroll(event) {
            var _this = this;

            var currentSection;
            var children = this._el.nativeElement.children;
            var scrollTop = event.target.firstElementChild.scrollTop;
            var parentOffset = event.target.firstElementChild.scrollTop;

            var _loop = function _loop(i) {
              var element = children[i];

              if (_this.spiedTags.some(function (spiedTag) {
                return spiedTag === element.tagName;
              })) {
                if (element.offsetTop <= scrollTop) {
                  currentSection = element.id || _this.currentSection;
                }
              }
            };

            for (var i = 0; i < children.length; i++) {
              _loop(i);
            }

            if (currentSection !== this.currentSection) {
              this.currentSection = currentSection || this.currentSection;
              this.sectionChange.emit(this.currentSection);
            }
          }
        }]);

        return ScrollSpyDirective;
      }();

      ScrollSpyDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      ScrollSpyDirective.propDecorators = {
        spiedTags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ["window:scroll", ["$event"]]
        }]
      };
      ScrollSpyDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[scrollSpy]"
      })], ScrollSpyDirective);
      /***/
    },

    /***/
    "7fsw":
    /*!************************************************************!*\
      !*** ./src/app/experiencia/carousel/carousel.component.ts ***!
      \************************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function fsw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "QFlM");
      /* harmony import */


      var _carousel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./carousel.component.css */
      "hxG3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent() {
          _classCallCheck(this, CarouselComponent);
        }

        _createClass(CarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ctorParameters = function () {
        return [];
      };

      CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carousel',
        template: _raw_loader_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carousel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CarouselComponent);
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.component.html */
      "5TFM");
      /* harmony import */


      var _about_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.component.css */
      "2Ic5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ctorParameters = function () {
        return [];
      };

      AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutComponent);
      /***/
    },

    /***/
    "9ixo":
    /*!********************************************!*\
      !*** ./src/app/inicio/inicio.component.ts ***!
      \********************************************/

    /*! exports provided: InicioComponent */

    /***/
    function ixo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
        return InicioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "fx4J");
      /* harmony import */


      var _inicio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inicio.component.css */
      "Ll4m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var InicioComponent = /*#__PURE__*/function () {
        function InicioComponent(_router, _route, _location, _el, _renderer) {
          _classCallCheck(this, InicioComponent);

          this._router = _router;
          this._route = _route;
          this._location = _location;
          this._el = _el;
          this._renderer = _renderer;
          this.currentSection = "";
          this.prueba = "xxxx";
        }

        _createClass(InicioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this._router.events.subscribe(function (e) {
              if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this2.currentSection = "/" + _this2._route.snapshot.paramMap.get("seccion");

                _this2.scrollTo(_this2.currentSection);
              }
            });

            console.log(this.currentSection, "<<RUTA?");
            var height = this._el.nativeElement.parentElement.parentElement.parentElement.clientHeight; //this._el.nativeElement.children[0].style.height = `${height | 0}px`;
          }
        }, {
          key: "onScroll",
          value: function onScroll(evento) {
            this.prueba = "asdlkajskldjaksldj";
          }
        }, {
          key: "onSectionChange",
          value: function onSectionChange(seccion) {
            console.log(seccion);
            this.currentSection = "/" + seccion;

            this._router.navigate([this.currentSection]);

            this._location.go(this.currentSection);
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(seccion) {
            seccion = seccion.replace("/", "");
            var elemento = document.querySelector("#" + seccion);
            console.log(seccion, "<<scrollto");

            if (elemento) {
              console.log("SCROLL");
              elemento.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
            }
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            console.log(event, "EVENT");
            var height = event.target.innerHeight; //this._el.nativeElement.children[0].style.height = `${height | 0}px`;
          }
        }]);

        return InicioComponent;
      }();

      InicioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }];
      };

      InicioComponent.propDecorators = {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["window:resize", ["$event"]]
        }]
      };
      InicioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-inicio",
        template: _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InicioComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */";
      /***/
    },

    /***/
    "ErXn":
    /*!*************************************************!*\
      !*** ./src/app/contacto/contacto.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ErXn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".principal {\r\n  padding-top: 80px;\r\n  background-image: linear-gradient(yellow, red);\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsOENBQThDO0VBQzlDLFdBQVc7QUFDYiIsImZpbGUiOiJjb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbCB7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHllbGxvdywgcmVkKTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "GEQn":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiencia/experiencia.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GEQn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div class=\"principal\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n      \r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "Ll4m":
    /*!*********************************************!*\
      !*** ./src/app/inicio/inicio.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Ll4m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".principal {\r\n  padding-top: 80px;\r\n  background-image: linear-gradient(#000070, #00009d);\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxXQUFXO0FBQ2IiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMDA3MCwgIzAwMDA5ZCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "QFlM":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiencia/carousel/carousel.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QFlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>carousel works!</p>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_3__["VERSION"].major;
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "Tryx":
    /*!*************************************************!*\
      !*** ./src/app/particle/particle.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Tryx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "UvRC":
    /*!************************************************!*\
      !*** ./src/app/contacto/contacto.component.ts ***!
      \************************************************/

    /*! exports provided: ContactoComponent */

    /***/
    function UvRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactoComponent", function () {
        return ContactoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contacto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contacto.component.html */
      "kaPr");
      /* harmony import */


      var _contacto_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contacto.component.css */
      "ErXn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactoComponent = /*#__PURE__*/function () {
        function ContactoComponent() {
          _classCallCheck(this, ContactoComponent);
        }

        _createClass(ContactoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactoComponent;
      }();

      ContactoComponent.ctorParameters = function () {
        return [];
      };

      ContactoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacto',
        template: _raw_loader_contacto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacto_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactoComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar></app-nav-bar>\n<router-outlet (scroll)=\"scroll($event)\"></router-outlet>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hello.component */
      "1VHI");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "5hVl");
      /* harmony import */


      var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./inicio/inicio.component */
      "9ixo");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./experiencia/experiencia.component */
      "+/Dj");
      /* harmony import */


      var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contacto/contacto.component */
      "UvRC");
      /* harmony import */


      var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./scroll-spy.directive */
      "7ZR9");
      /* harmony import */


      var _particle_particle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./particle/particle.component */
      "5sMs");
      /* harmony import */


      var _experiencia_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./experiencia/carousel/carousel.component */
      "7fsw");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_10__["ExperienciaComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__["ContactoComponent"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_12__["ScrollSpyDirective"], _particle_particle_component__WEBPACK_IMPORTED_MODULE_13__["ParticleComponent"], _experiencia_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZwSW":
    /*!*******************************************************!*\
      !*** ./src/app/experiencia/experiencia.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function ZwSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".principal {\r\n  padding-top: 80px;\r\n  background: #610f0f;\r\n  box-shadow: grey 9px 10px 11px;\r\n  /* background-image: linear-gradient(#000070, #00009d); */\r\n  width: 100%;\r\n  border-radius: 19px;\r\n}\r\n\r\n.contenedor{\r\n  padding-left: 1%;\r\n  padding-right: 1%;\r\n  margin-top: -100px;\r\n  margin-bottom: 100px;\r\n  z-index: 30;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2lhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7RUFDekQsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2IiLCJmaWxlIjoiZXhwZXJpZW5jaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWwge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICM2MTBmMGY7XHJcbiAgYm94LXNoYWRvdzogZ3JleSA5cHggMTBweCAxMXB4O1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwMDcwLCAjMDAwMDlkKTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvcntcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICB6LWluZGV4OiAzMDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "fx4J":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function fx4J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>asdasd{{prueba}}</h1>\n<div id=\"parentDiv\" scrollSpy [spiedTags]=\"['DIV']\" (sectionChange)=\"onSectionChange($event)\"\n\t(scroll)=\"onScroll($event)\">\n\t\n\t<div id=\"about\">\n\t\t<app-about></app-about>\n\t</div>\n\t<div id=\"experiencia\">\n\t\t<app-experiencia></app-experiencia>\n\t</div>\n\t<div id=\"contacto\">\n\t\t<app-contacto></app-contacto>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "gRqk":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/particle/particle.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function gRqk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<canvas #particleCanvas style=\"z-index:-10;\"></canvas>";
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
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

      /***/

    },

    /***/
    "hxG3":
    /*!*************************************************************!*\
      !*** ./src/app/experiencia/carousel/carousel.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function hxG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "kaPr":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function kaPr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"principal row\">\n\t<div class=\"col-12 col-sm-6\">\n\t\t<h1>About</h1>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\n\t</div>\n\t\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xs-6 derecho\">\n\t\t</div>\n\t</div>";
      /***/
    },

    /***/
    "oXoT":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function oXoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav id=\"navbar\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t<a class=\"navbar-brand\" href=\"#\">\n\t\t<img class=\"logo\"  src='/assets/Logo.svg'>\n    </a>\n\t\t\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n      <button type=\"button\" style=\"position: absolute;\" class=\"cerrar close\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n\n\t\t<button type=\"button\" style=\"position: absolute;\" class=\"mostrar close\" aria-label=\"Close\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n\t\t</button>\n\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t<ul class=\"navbar-nav mr-auto\">\n\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/about\">Sobre\n\t\t\t\t\t\tNosotros<span class=\"sr-only\"></span></a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/experiencia\">Nuestra Experiencia</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/contacto\">Cotactanos!</a>\n\t\t\t\t</li>\n\n\n\t\t\t</ul>\n\t\t</div>\n</nav>";
      /***/
    },

    /***/
    "v9j5":
    /*!***********************************************!*\
      !*** ./src/app/nav-bar/nav-bar.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function v9j5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  .cerrar {\r\n  font-size: 104px;\r\n  opacity: 0;\r\n  top: 60px;\r\n  right: 50px;\r\n}\r\n\r\n.mostrar {\r\n  font-size: 104px;\r\n  opacity: 1;\r\n  top: 50px;\r\n  right: 50px;\r\n}\r\n\r\n.mostrar .navbar-toggler-icon {\r\n  width: 0.7em;\r\n}\r\n\r\n.navbar {\r\n  position: fixed;\r\n  width: 101%;\r\n  left: 0;\r\n  box-shadow: grey 10px 2px 8px;\r\n  z-index: 108;\r\n}\r\n\r\n.navbar-brand img ::ng-deep {\r\n  top: 5px !important;\r\n  opacity: 1 !important;\r\n  height: 50px;\r\n}\r\n\r\n#navbarSupportedContent {\r\n  margin-left: 122px !important;\r\n}\r\n\r\n.nav-link {\r\n  text-align: center !important;\r\n  font: bold 20px;\r\n  letter-spacing: 0px !important;\r\n  color: #007aff !important;\r\n  opacity: 1;\r\n  font-weight: 200;\r\n  font-size: 18px;\r\n  font-family: arial;\r\n}\r\n\r\n.btn-contactanos {\r\n  right: 0;\r\n  position: fixed;\r\n  margin-right: 80px;\r\n\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n\r\n  text-align: center;\r\n  font: normal normal bold 12px/20px Montserrat;\r\n  letter-spacing: 0px;\r\n  background: #44d62c 0% 0% no-repeat padding-box;\r\n  border-color: #44d62c;\r\n  border-radius: 16px;\r\n  opacity: 1;\r\n  width: 150px;\r\n  height: 32px;\r\n  margin-left: 32px;\r\n}\r\n\r\n.navbar-brand {\r\n  margin-left: 130px;\r\n  margin-top: 5px;\r\n}\r\n\r\n#navbarSupportedContent a {\r\n  margin-left: 31px !important;\r\n}\r\n\r\na.nav-link.active::after {\r\n  width: 100%;\r\n}\r\n\r\n.nav-link::after {\r\n  content: \"\";\r\n  width: 0%;\r\n  background: blue;\r\n  height: 4px;\r\n  top: 7px;\r\n  position: relative;\r\n  float: left;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  -webkit-animation: animacion 0.2s linear forwards;\r\n          animation: animacion 0.2s linear forwards;\r\n}\r\n\r\n@-webkit-keyframes animacion {\r\n  0% {\r\n    width: 0;\r\n    left: 50%;\r\n  }\r\n  70% {\r\n    width: 50%;\r\n    left: calc(50% - (25%));\r\n  }\r\n  100% {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes animacion {\r\n  0% {\r\n    width: 0;\r\n    left: 50%;\r\n  }\r\n  70% {\r\n    width: 50%;\r\n    left: calc(50% - (25%));\r\n  }\r\n  100% {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .invalid-feedback {\r\n    font-size: 15px;\r\n  }\r\n\r\n  body {\r\n    width: -webkit-fit-content !important;\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n  }\r\n\r\n  .navbar-brand ::ng-deep {\r\n    margin-left: 0px;\r\n    padding: 20px !important;\r\n    z-index: 108;\r\n  }\r\n\r\n  .nav-link {\r\n    letter-spacing: var(--unnamed-character-spacing-0) !important;\r\n\r\n    font: normal normal bold 50px Montserrat !important;\r\n  }\r\n\r\n  .navbar ul {\r\n    line-height: 30;\r\n    align-items: center;\r\n  }\r\n\r\n  .navbar ul:first-child {\r\n    margin-top: 400px;\r\n  }\r\n\r\n  .navbar ul:last-child {\r\n    margin-bottom: 700px;\r\n  }\r\n\r\n  .navbar a {\r\n    padding-bottom: 100px;\r\n  }\r\n\r\n  #navbarSupportedContent {\r\n    margin-left: 0 !important;\r\n    z-index: 2;\r\n    left: 0;\r\n    height: -webkit-fit-content !important;\r\n    height: -moz-fit-content !important;\r\n    height: fit-content !important;\r\n    width: -webkit-fill-available !important;\r\n    position: fixed;\r\n    top: 0;\r\n    background-color: #f8f9fa !important;\r\n  }\r\n\r\n  .navbar .btn-contactanos {\r\n    padding: 10px;\r\n    margin-bottom: 100px;\r\n    border-radius: 70px;\r\n    position: relative;\r\n    margin: 0;\r\n    width: 128px;\r\n    height: 40px !important;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .navbar-brand img {\r\n    height: 40px;\r\n  }\r\n\r\n  .navbar {\r\n    position: relative;\r\n  }\r\n\r\n  .navbar-toggler {\r\n    padding-right: 20px;\r\n    font-size: 50px;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 0.25rem;\r\n    margin-right: 30px;\r\n    z-index: 10;\r\n  }\r\n\r\n  .collapsing {\r\n    transition: none;\r\n  }\r\n\r\n  .navbar-toggler[aria-expanded=\"true\"] .mostrar {\r\n    transition: all 0.5s ease-out;\r\n    opacity: 0;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"true\"] .cerrar {\r\n    transition: all 0.5s ease-in;\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"false\"] .cerrar {\r\n    transition: all 0.5s ease-out;\r\n    opacity: 0;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"false\"] .mostrar {\r\n    transition: all 0.5s ease-in;\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n\r\n  #navbarSupportedContent:not(.show) ul {\r\n    opacity: 0.1;\r\n  }\r\n  #navbarSupportedContent:not(.show) {\r\n    transform: scaleY(0);\r\n    transition: transform 0.2s ease-out;\r\n    transform-origin: top;\r\n    margin-top: 200px;\r\n  }\r\n\r\n  #navbarSupportedContent.show {\r\n    opacity: 1;\r\n    position: absolute !important;\r\n    transform: scaleY(1);\r\n    transition: transform 0.4s ease-in;\r\n    transform-origin: top;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n/* #navbarSupportedContent{\r\n    padding-left: 45% !important;\r\n}\r\n   */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtFQUNBLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsU0FBUztFQUNYO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsT0FBTztFQUNUO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLFFBQVE7SUFDUixTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7SUFDWCxPQUFPO0VBQ1Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFDQUE2QjtJQUE3QixrQ0FBNkI7SUFBN0IsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw2REFBNkQ7O0lBRTdELG1EQUFtRDtFQUNyRDs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLE9BQU87SUFDUCxzQ0FBOEI7SUFBOUIsbUNBQThCO0lBQTlCLDhCQUE4QjtJQUM5Qix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLE1BQU07SUFDTixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFFRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0VBQ1g7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7RUFDWDtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztFQUNYO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7SUFDViw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsTUFBTTtFQUNSO0FBQ0Y7O0FBRUE7OztJQUdJIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmNlcnJhciB7XHJcbiAgZm9udC1zaXplOiAxMDRweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogNjBweDtcclxuICByaWdodDogNTBweDtcclxufVxyXG5cclxuLm1vc3RyYXIge1xyXG4gIGZvbnQtc2l6ZTogMTA0cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0b3A6IDUwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5tb3N0cmFyIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICB3aWR0aDogMC43ZW07XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAxJTtcclxuICBsZWZ0OiAwO1xyXG4gIGJveC1zaGFkb3c6IGdyZXkgMTBweCAycHggOHB4O1xyXG4gIHotaW5kZXg6IDEwODtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCBpbWcgOjpuZy1kZWVwIHtcclxuICB0b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMTIycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBmb250OiBib2xkIDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDA3YWZmICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbn1cclxuXHJcbi5idG4tY29udGFjdGFub3Mge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcblxyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDEycHgvMjBweCBNb250c2VycmF0O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzQ0ZDYyYyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDRkNjJjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCBhIHtcclxuICBtYXJnaW4tbGVmdDogMzFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2LWxpbms6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwJTtcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHRvcDogN3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XHJcbiAgYW5pbWF0aW9uOiBhbmltYWNpb24gMC4ycyBsaW5lYXIgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWFjaW9uIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgyNSUpKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQgOjpuZy1kZWVwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDg7XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXVubmFtZWQtY2hhcmFjdGVyLXNwYWNpbmctMCkgIWltcG9ydGFudDtcclxuXHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgNTBweCBNb250c2VycmF0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHVsIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHVsOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDQwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB1bDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciBhIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIC5idG4tY29udGFjdGFub3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG5cclxuICAuY29sbGFwc2luZyB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGVyW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIC5tb3N0cmFyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRvcDogNDBweDtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIC5jZXJyYXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlclthcmlhLWV4cGFuZGVkPVwiZmFsc2VcIl0gLmNlcnJhciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlclthcmlhLWV4cGFuZGVkPVwiZmFsc2VcIl0gLm1vc3RyYXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudDpub3QoLnNob3cpIHVsIHtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxuICB9XHJcbiAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQ6bm90KC5zaG93KSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudC5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NSUgIWltcG9ydGFudDtcclxufVxyXG4gICAqL1xyXG4iXX0= */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inicio/inicio.component */
      "9ixo");

      var routes = [{
        path: "",
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
        pathMatch: "full"
      }, {
        path: ":seccion",
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          onSameUrlNavigation: "reload",
          enableTracing: true // <-- debugging purposes only

        }) // other imports here
        ]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map