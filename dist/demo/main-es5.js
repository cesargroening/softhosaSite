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

        this.window = {
          innerHeight: 0
        };
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
    "1XXE":
    /*!*********************************************!*\
      !*** ./src/app/footer/footer.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function XXE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
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


      __webpack_exports__["default"] = ".particulas {\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.principal {\r\n  padding-top: 80px;\r\n  background: transparent;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.contenedor-texto {\r\n  padding: 10%;\r\n}\r\n\r\n.contenedor-texto h1 {\r\n  font-size: 4em;\r\n  font-weight: bolder;\r\n  color: white;\r\n  text-shadow: 4px 5px 3px #0a0056;\r\n}\r\n\r\n.contenedor-texto{\r\n  -webkit-animation: aparecer;\r\n          animation: aparecer;\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n}\r\n\r\n@-webkit-keyframes aparecer {\r\n  from{\r\n    opacity: 0;\r\n    left: -100px\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    left: 0px;\r\n  }\r\n }\r\n\r\n@keyframes aparecer {\r\n  from{\r\n    opacity: 0;\r\n    left: -100px\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    left: 0px;\r\n  }\r\n }\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFHQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWO0VBQ0Y7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7Q0FDRDs7QUFURDtFQUNFO0lBQ0UsVUFBVTtJQUNWO0VBQ0Y7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7Q0FDRCIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpY3VsYXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGV4dG8ge1xyXG4gIHBhZGRpbmc6IDEwJTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGV4dG8gaDEge1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiA0cHggNXB4IDNweCAjMGEwMDU2O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbmVkb3ItdGV4dG97XHJcbiAgYW5pbWF0aW9uOiBhcGFyZWNlcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFwYXJlY2VyIHtcclxuICBmcm9te1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGxlZnQ6IC0xMDBweFxyXG4gIH1cclxuICB0b3tcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gfVxyXG4gXHJcbiJdfQ== */";
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


      __webpack_exports__["default"] = "<div class=\"principal\">\n\t<app-particle class=\"particulas\" ></app-particle>\n\t<div class=\"col-12 col-sm-8 contenedor-texto\">\n\t\t<h1>Logra un mayor impacto en tus Clientes</h1>\n\t</div>\n\n\t<div class=\"col-12 col-sm-6\">\n\t</div>\n</div>";
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

          this.contenedor = {
            scrollTop: 0
          };
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contenedor = $('body');
          }
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
            this.particalCanvas.nativeElement.height = 700;
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


      __webpack_exports__["default"] = ".principal {\r\n  padding-top: -80px;\r\n  margin-top: -80px;\r\n  background-image: transparent;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.principal {\r\n  height: 1200px;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-image: url('fondo-secundario.png');\r\n  /*background-position: 0px 1000px; */\r\n}\r\n\r\n\r\n.principal::after {\r\n  content: \"\";\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  opacity: 0.6;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n.etiqueta{\r\n  z-index: 2;\r\n  position: absolute;\r\n  font-size: 4em;\r\n  font-weight: bolder;\r\n  color: white;\r\n  text-shadow: 4px 5px 3px #0a0056;\r\n  margin: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7OztBQUdBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDZDQUEwRDtFQUMxRCxvQ0FBb0M7QUFDdEM7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmIiwiZmlsZSI6ImNvbnRhY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLXRvcDogLTgwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTgwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucHJpbmNpcGFsIHtcclxuICBoZWlnaHQ6IDEyMDBweDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9uZG8tc2VjdW5kYXJpby5wbmdcIik7XHJcbiAgLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMTAwMHB4OyAqL1xyXG59XHJcblxyXG4ucHJpbmNpcGFsOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICB6LWluZGV4OiAxO1xyXG59IFxyXG5cclxuLmV0aXF1ZXRhe1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiA0cHggNXB4IDNweCAjMGEwMDU2O1xyXG4gIG1hcmdpbjogMjAwcHg7XHJcbn0iXX0= */";
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


      __webpack_exports__["default"] = "<h1>{{window.innerHeight}}</h1>\r\n<div class=\"contenedor\">\r\n    <div class=\"principal\">\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t  <div class=\"carousel-item elemento-carousel active\">\r\n                <img class=\"d-block w-100\" src=\"../../assets/principal1.jpeg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Somo analíticos</h5>\r\n                    <p>Analizamos las opciones y te ofrecemos la mejor solución en TI para tu empresa</p>\r\n                </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"carousel-item elemento-carousel\">\r\n                <img class=\"d-block w-100\" src=\"./../assets/principal2.jpeg\" alt=\"Second slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Soluciones a la medida</h5>\r\n                    <p>Nuestras desarrollos son compatibles con cualquier dispositivo movil</p>\r\n                </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"carousel-item elemento-carousel\">\r\n                <img class=\"d-block w-100\" src=\"./../assets/principal3.jpeg\" alt=\"Third slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Experiencia</h5>\r\n                    <p>Hemos desarrollado desde páginas web hasta sistemas completos para el manejo de diferetens tipos de negocios</p>\r\n                </div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n\t\t\t  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t  <span class=\"sr-only\">Previous</span>\r\n\t\t\t</a>\r\n\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n\t\t\t  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t  <span class=\"sr-only\">Next</span>\r\n\t\t\t</a>\r\n\t\t  </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "HhuZ":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function HhuZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>footer works!</p>\n<p>footer works!</p>\n<p>footer works!</p>\n<p>footer works!</p>\n<p>footer works!</p>\n<p>footer works!</p>\n<p>footer works!</p>\n<p>footer works!</p>\n";
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


      __webpack_exports__["default"] = ".principal {\r\n  padding-top: 80px;\r\n  background-image: linear-gradient(#000070, #00009d);\r\n  width: 100%;\r\n}\r\n\r\n#parentDiv {\r\n  background: linear-gradient( 0deg, rgb(0 0 0) 5%, rgb(43 34 114) 46%) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnRkFBZ0Y7QUFDbEYiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMDA3MCwgIzAwMDA5ZCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNwYXJlbnREaXYge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMGRlZywgcmdiKDAgMCAwKSA1JSwgcmdiKDQzIDM0IDExNCkgNDYlKSAhaW1wb3J0YW50O1xyXG59Il19 */";
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

          this.contenedor = {
            scrollTop: function scrollTop() {}
          };
        }

        _createClass(ContactoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contenedor = $('body');
          } //contenedor.scrollTop()

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log(this.fondo, '<<<CONTENEDOR');
          }
        }]);

        return ContactoComponent;
      }();

      ContactoComponent.ctorParameters = function () {
        return [];
      };

      ContactoComponent.propDecorators = {
        fondo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fondo']
        }]
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
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_10__["ExperienciaComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__["ContactoComponent"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_12__["ScrollSpyDirective"], _particle_particle_component__WEBPACK_IMPORTED_MODULE_13__["ParticleComponent"], _experiencia_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]],
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


      __webpack_exports__["default"] = " .principal {\r\n  background: #ff0016;\r\n  width: 100%;\r\n  border-radius: 19px;\r\n  box-shadow: black 1px 1px 15px;\r\n} \r\n\r\n.contenedor{\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  margin-top: -100px;\r\n  margin-bottom: 100px;\r\n  \r\n} \r\n\r\n.carousel-inner{\r\n  padding-bottom: 0 !important;\r\n  z-index: 1 !important;\r\n} \r\n\r\n.carousel-item{\r\n  max-height: 80%;\r\n} \r\n\r\n.carousel-inner{\r\n  padding-bottom: 100px;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n  border-radius: 19px;\r\n  background-color: red;\r\n\r\n} \r\n\r\n.carousel-inner img {\r\n  margin: auto;\r\n  width: 100% !important;\r\n  opacity: 0.5;\r\n  \r\n  \r\n  /* box-shadow: gray 10px 10px 10px; */\r\n} \r\n\r\n.carousel-caption {\r\n  top: 0 !important;\r\n  height: 100% !important;\r\n  vertical-align: center !important;\r\n  padding-top: 20% !important;\r\n} \r\n\r\n.carousel-caption h5{\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n} \r\n\r\n.carousel-caption p{\r\n  font-size: 36px;\r\n} \r\n\r\n/* \r\n.elemento-carousel::before{\r\n  opacity: 0.5;\r\n  position: absolute;\r\n  z-index: 8;\r\n  content:\"\";\r\n  height: 100%;\r\n  width: 100%;\r\n  padding-top: 80px;\r\n  background: #ff0016;\r\n  width: 100%;\r\n  box-shadow: gray 10px 10px 10px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2lhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7O0FBRXRCOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCOztBQUV2Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTs7O0VBR1oscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7Ozs7Ozs7Ozs7OztHQVlHIiwiZmlsZSI6ImV4cGVyaWVuY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnByaW5jaXBhbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmMDAxNjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMTVweDtcclxufSBcclxuXHJcbi5jb250ZW5lZG9ye1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgXHJcbn1cclxuLmNhcm91c2VsLWlubmVye1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbXtcclxuICBtYXgtaGVpZ2h0OiA4MCU7XHJcbn1cclxuLmNhcm91c2VsLWlubmVye1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcbi5jYXJvdXNlbC1pbm5lciBpbWcge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBcclxuICBcclxuICAvKiBib3gtc2hhZG93OiBncmF5IDEwcHggMTBweCAxMHB4OyAqL1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIGg1e1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBwe1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG4vKiBcclxuLmVsZW1lbnRvLWNhcm91c2VsOjpiZWZvcmV7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA4O1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmMDAxNjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiBncmF5IDEwcHggMTBweCAxMHB4O1xyXG59ICovIl19 */";
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
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "HhuZ");
      /* harmony import */


      var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.css */
      "1XXE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
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


      __webpack_exports__["default"] = "\n<div id=\"parentDiv\" scrollSpy [spiedTags]=\"['DIV']\" (sectionChange)=\"onSectionChange($event)\"\n\t(scroll)=\"onScroll($event)\">\n\t\n\t<div id=\"about\">\n\t\t<app-about></app-about>\n\t</div>\n\t<div id=\"experiencia\">\n\t\t<app-experiencia></app-experiencia>\n\t</div>\n\t<div id=\"contacto\">\n\t\t<app-contacto></app-contacto>\n\t</div>\n\t<div id=\"footer\">\n\t\t<app-footer></app-footer>\n\t</div>\n</div>";
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


      __webpack_exports__["default"] = "<h1>{{this.contenedor.scrollTop()}}</h1>\n<div \n\t#fondo \n\tclass=\"principal row\" [ngStyle]=\"{'background-position': ''+\n\t\t((this.contenedor.scrollTop()-1900)/10)+'px 300px'}\">\n\t<div class=\"col-12 col-sm-6\">\n\t</div>\n\t<div class=\"col-12 col-sm-6\">\n\t\t<h1 class=\"etiqueta\">Texto mamador</h1>\n\t</div>\n\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xs-6 derecho\">\n\t</div>\n</div>";
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


      __webpack_exports__["default"] = "\n<nav id=\"navbar\" class=\"navbar navbar-expand\" [ngClass]=\"{'shrink-navbar': contenedor.scrollTop() > 300 || contenedor.scrollTop() > 300}\">\n\t<a class=\"navbar-brand\" href=\"#\">\n\t\t<img class=\"logo\"  src='/assets/Logo.svg'>\n\t</a>\n\t\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\n\t\t<button type=\"button\" style=\"position: absolute;\" class=\"cerrar close\" aria-label=\"Close\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t\t\n\t\t<button type=\"button\" style=\"position: absolute;\" class=\"mostrar close\" aria-label=\"Close\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\t\t\n\t</button>\n\t\n\t\n\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/about\">Sobre\n\t\t\t\t\tNosotros<span class=\"sr-only\"></span></a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/experiencia\">Nuestra Experiencia</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/contacto\">Cotactanos!</a>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t\t\n\t\t\t</ul>\n\t\t</div>\n\t</nav>";
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


      __webpack_exports__["default"] = "\r\n.shrink-navbar a{\r\n  -webkit-animation-name: texto-animacion;\r\n          animation-name: texto-animacion;\r\n  -webkit-animation-duration: 0.2s;\r\n          animation-duration: 0.2s;\r\n  font-size: 20px;\r\n  color: #ff0000 !important;\r\n  font-weight: bolder;\r\n  \r\n}\r\n\r\n.shrink-navbar{\r\n  opacity: 1 !important;\r\n  background: #181242e7;\r\n  box-shadow: black 1px 2px 7px;\r\n  font-size: 10px !important; \r\n  position: fixed;\r\n  width: 101%;\r\n  left: 0;\r\n  z-index: 108;\r\n  height: 80px;\r\n  -webkit-animation: navbar-animacion;\r\n          animation: navbar-animacion;\r\n  -webkit-animation-duration: 0.2s;\r\n          animation-duration: 0.2s;\r\n  \r\n\r\n}\r\n\r\n@-webkit-keyframes  navbar-animacion {\r\n  from{\r\n  }\r\n  to{\r\n    height: 80px;\r\n  }\r\n }\r\n\r\n@keyframes  navbar-animacion {\r\n  from{\r\n  }\r\n  to{\r\n    height: 80px;\r\n  }\r\n }\r\n\r\n@-webkit-keyframes  texto-animacion {\r\n from{\r\n   font-size: 24px;\r\n }\r\n to{\r\n   font-size: 20px;\r\n }\r\n}\r\n\r\n@keyframes  texto-animacion {\r\n from{\r\n   font-size: 24px;\r\n }\r\n to{\r\n   font-size: 20px;\r\n }\r\n}\r\n\r\n.cerrar {\r\n  font-size: 104px;\r\n  opacity: 0;\r\n  top: 60px;\r\n  right: 50px;\r\n}\r\n\r\n.mostrar {\r\n  font-size: 104px;\r\n  opacity: 1;\r\n  top: 50px;\r\n  right: 50px;\r\n}\r\n\r\n.mostrar .navbar-toggler-icon {\r\n  width: 0.7em;\r\n}\r\n\r\n.navbar {\r\n  position: fixed;\r\n  width: 101%;\r\n  left: 0;\r\n  transition: font-size 10s !important;\r\n  z-index: 108;\r\n  \r\n}\r\n\r\n.navbar-brand img ::ng-deep {\r\n  top: 5px !important;\r\n  opacity: 1 !important;\r\n  height: 50px;\r\n}\r\n\r\n#navbarSupportedContent {\r\n  margin-left: 122px !important;\r\n}\r\n\r\n.nav-link {\r\n  text-align: center !important;\r\n  font: bold 20px;\r\n  letter-spacing: 0px !important;\r\n  color: #ff0000 !important;\r\n  opacity: 1;\r\n  font-weight: 200;\r\n  font-size: 24px;\r\n  font-family: arial;\r\n  \r\n}\r\n\r\n.navbar-brand {\r\n  margin-left: 130px;\r\n  margin-top: 5px;\r\n}\r\n\r\n#navbarSupportedContent a {\r\n  margin-left: 31px !important;\r\n}\r\n\r\na.nav-link.active::after {\r\n  width: 100%;\r\n}\r\n\r\n.nav-link::after {\r\n  content: \"\";\r\n  width: 0%;\r\n  background: #ff0000 !important;\r\n  height: 4px;\r\n  top: 7px;\r\n  position: relative;\r\n  float: left;\r\n  \r\n}\r\n\r\n.nav-link:hover::after {\r\n  -webkit-animation: animacion 0.2s linear forwards;\r\n          animation: animacion 0.2s linear forwards;\r\n}\r\n\r\n@-webkit-keyframes animacion {\r\n  0% {\r\n    width: 0;\r\n    left: 50%;\r\n  }\r\n  70% {\r\n    width: 50%;\r\n    left: calc(50% - (25%));\r\n  }\r\n  100% {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes animacion {\r\n  0% {\r\n    width: 0;\r\n    left: 50%;\r\n  }\r\n  70% {\r\n    width: 50%;\r\n    left: calc(50% - (25%));\r\n  }\r\n  100% {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .invalid-feedback {\r\n    font-size: 15px;\r\n  }\r\n\r\n  body {\r\n    width: -webkit-fit-content !important;\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n  }\r\n\r\n  .navbar-brand ::ng-deep {\r\n    margin-left: 0px;\r\n    \r\n    z-index: 108;\r\n  }\r\n\r\n  .nav-link {\r\n    letter-spacing: var(--unnamed-character-spacing-0) !important;\r\n\r\n    font: normal normal bold 50px Montserrat !important;\r\n  }\r\n\r\n  .navbar ul {\r\n    line-height: 30;\r\n    align-items: center;\r\n  }\r\n\r\n  .navbar ul:first-child {\r\n    margin-top: 400px;\r\n  }\r\n\r\n  .navbar ul:last-child {\r\n    margin-bottom: 700px;\r\n  }\r\n\r\n  .navbar a {\r\n    padding-bottom: 100px;\r\n  }\r\n\r\n  #navbarSupportedContent {\r\n    margin-left: 0 !important;\r\n    z-index: 2;\r\n    left: 0;\r\n    height: -webkit-fit-content !important;\r\n    height: -moz-fit-content !important;\r\n    height: fit-content !important;\r\n    width: -webkit-fill-available !important;\r\n    position: fixed;\r\n    top: 0;\r\n    background-color: #f8f9fa !important;\r\n  }\r\n\r\n  .navbar .btn-contactanos {\r\n    \r\n    margin-bottom: 100px;\r\n    border-radius: 70px;\r\n    position: relative;\r\n    margin: 0;\r\n    width: 128px;\r\n    height: 40px !important;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .navbar-brand img {\r\n    height: 40px;\r\n  }\r\n\r\n  .navbar {\r\n    position: relative;\r\n  }\r\n\r\n  .navbar-toggler {\r\n    padding-right: 20px;\r\n    font-size: 50px;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 0.25rem;\r\n    margin-right: 30px;\r\n    z-index: 10;\r\n  }\r\n\r\n  .collapsing {\r\n    transition: none;\r\n  }\r\n\r\n  .navbar-toggler[aria-expanded=\"true\"] .mostrar {\r\n    transition: all 0.5s ease-out;\r\n    opacity: 0;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"true\"] .cerrar {\r\n    transition: all 0.5s ease-in;\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"false\"] .cerrar {\r\n    transition: all 0.5s ease-out;\r\n    opacity: 0;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n  .navbar-toggler[aria-expanded=\"false\"] .mostrar {\r\n    transition: all 0.5s ease-in;\r\n    opacity: 1;\r\n    font-size: 20px;\r\n    top: 40px;\r\n  }\r\n\r\n  #navbarSupportedContent:not(.show) ul {\r\n    opacity: 0.1;\r\n  }\r\n  #navbarSupportedContent:not(.show) {\r\n    transform: scaleY(0);\r\n    transition: transform 0.2s ease-out;\r\n    transform-origin: top;\r\n    margin-top: 200px;\r\n  }\r\n\r\n  #navbarSupportedContent.show {\r\n    opacity: 1;\r\n    position: absolute !important;\r\n    transform: scaleY(1);\r\n    transition: transform 0.4s ease-in;\r\n    transform-origin: top;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n/* #navbarSupportedContent{\r\n    padding-left: 45% !important;\r\n}\r\n   */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1osbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixnQ0FBd0I7VUFBeEIsd0JBQXdCOzs7QUFHMUI7O0FBSUE7RUFDRTtFQUNBO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7Q0FDRDs7QUFORDtFQUNFO0VBQ0E7RUFDQTtJQUNFLFlBQVk7RUFDZDtDQUNEOztBQUVEO0NBQ0M7R0FDRSxlQUFlO0NBQ2pCO0NBQ0E7R0FDRSxlQUFlO0NBQ2pCO0FBQ0Q7O0FBUEE7Q0FDQztHQUNFLGVBQWU7Q0FDakI7Q0FDQTtHQUNFLGVBQWU7Q0FDakI7QUFDRDs7QUFLQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLG9DQUFvQztFQUNwQyxZQUFZOztBQUVkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRTtJQUNFLFFBQVE7SUFDUixTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7SUFDWCxPQUFPO0VBQ1Q7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUNBQTZCO0lBQTdCLGtDQUE2QjtJQUE3Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxnQkFBZ0I7O0lBRWhCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDZEQUE2RDs7SUFFN0QsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsT0FBTztJQUNQLHNDQUE4QjtJQUE5QixtQ0FBOEI7SUFBOUIsOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsTUFBTTtJQUNOLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUVFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7RUFDWDtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztFQUNYO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0VBQ1g7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixNQUFNO0VBQ1I7QUFDRjs7QUFFQTs7O0lBR0kiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaHJpbmstbmF2YmFyIGF7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHRleHRvLWFuaW1hY2lvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBcclxufVxyXG5cclxuLnNocmluay1uYXZiYXJ7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICMxODEyNDJlNztcclxuICBib3gtc2hhZG93OiBibGFjayAxcHggMnB4IDdweDtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDsgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDElO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBhbmltYXRpb246IG5hdmJhci1hbmltYWNpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzICBuYXZiYXItYW5pbWFjaW9uIHtcclxuICBmcm9te1xyXG4gIH1cclxuICB0b3tcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiB9XHJcbiBcclxuQGtleWZyYW1lcyAgdGV4dG8tYW5pbWFjaW9uIHtcclxuIGZyb217XHJcbiAgIGZvbnQtc2l6ZTogMjRweDtcclxuIH1cclxuIHRve1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jZXJyYXIge1xyXG4gIGZvbnQtc2l6ZTogMTA0cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDYwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5tb3N0cmFyIHtcclxuICBmb250LXNpemU6IDEwNHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubW9zdHJhciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgd2lkdGg6IDAuN2VtO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMSU7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMTBzICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMTA4O1xyXG4gIFxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIGltZyA6Om5nLWRlZXAge1xyXG4gIHRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQ6IGJvbGQgMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCBhIHtcclxuICBtYXJnaW4tbGVmdDogMzFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2LWxpbms6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgdG9wOiA3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIFxyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVyIHtcclxuICBhbmltYXRpb246IGFuaW1hY2lvbiAwLjJzIGxpbmVhciBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYWNpb24ge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gKDI1JSkpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCA6Om5nLWRlZXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIFxyXG4gICAgei1pbmRleDogMTA4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS11bm5hbWVkLWNoYXJhY3Rlci1zcGFjaW5nLTApICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDUwcHggTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB1bCB7XHJcbiAgICBsaW5lLWhlaWdodDogMzA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB1bDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgdWw6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MDBweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgYSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciAuYnRuLWNvbnRhY3Rhbm9zIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcblxyXG4gIC5jb2xsYXBzaW5nIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRvZ2dsZXJbYXJpYS1leHBhbmRlZD1cInRydWVcIl0gLm1vc3RyYXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXJbYXJpYS1leHBhbmRlZD1cInRydWVcIl0gLmNlcnJhciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRvcDogNDBweDtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXSAuY2VycmFyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRvcDogNDBweDtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXSAubW9zdHJhciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRvcDogNDBweDtcclxuICB9XHJcblxyXG4gICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50Om5vdCguc2hvdykgdWwge1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gIH1cclxuICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudDpub3QoLnNob3cpIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcblxyXG4gICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50LnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLyogI25hdmJhclN1cHBvcnRlZENvbnRlbnR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1JSAhaW1wb3J0YW50O1xyXG59XHJcbiAgICovXHJcbiJdfQ== */";
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