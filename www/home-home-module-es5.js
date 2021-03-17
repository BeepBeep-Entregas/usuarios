(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header  #head>\r\n  <ion-toolbar class=\"header\" color=\"white\">\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-menu-button></ion-menu-button>\r\n\r\n      <span color=\"dark\" *ngIf=\"address\" style=\"font-size:13.5px;\" routerLink=\"/address\" routerDirection=\"forward\">\r\n        <ion-icon name=\"pin\"></ion-icon>\r\n        {{address | slice:0:28}} <i *ngIf=\"address && address.length > 28\">...</i>\r\n        <ion-icon name=\"arrow-dropdown\"></ion-icon>\r\n      </span>\r\n\r\n      \r\n      <span *ngIf=\"!address\" color=\"dark\" style=\"font-size:13.5px;\">\r\n        <ion-icon name=\"pin\"></ion-icon>\r\n        Bienvenido(a)\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"searchBar\" *ngIf=\"text\">\r\n    <ion-searchbar style=\"font-size: 12px;font-family: 'SF Pro Display';--margin-bottom:0;--margin-top:0;\" (ionInput)=\"search($event)\" placeholder=\"{{ text.home_search }}\" mode=\"ios\" color=\"light\" (ionClear)=\"clearSearch()\" [(ngModel)]=\"searchQuery\"></ion-searchbar>\r\n    \r\n    <ion-grid class=\"grid_menu\">\r\n      <ion-row>\r\n        <ion-col size=\"4\" (click)=\"OptionCat_one()\">\r\n          Cercanos\r\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"4\" (click)=\"ViewCat()\">\r\n          Ver Categorias\r\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"4\" (click)=\"OptionCat_two()\">\r\n          Filtros\r\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n   \r\n  </div>\r\n</ion-header>\r\n<ion-content *ngIf=\"text\" mode=\"md\" scrollEvents=\"true\" hide-header [header]=\"head\">\r\n\r\n  <!-- Refresh -->\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\"  pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\r\n      <ion-refresher-content \r\n      pullingIcon=\"ellipsis-horizontal\"\r\n      refreshingSpinner=\"dots\">\r\n        \r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n  <!-- Refresh -->\r\n\r\n  <!-- Orders -->\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"count > 0\" routerLink=\"/cart\" routerDirection=\"forward\">\r\n      <ion-fab-button color=\"danger\" edge=\"true\">\r\n        <ion-icon name=\"cart\"></ion-icon> {{ count }}\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"order > 0\" routerLink=\"/done\" routerDirection=\"forward\">\r\n      <ion-fab-button color=\"danger\" edge=\"true\">\r\n        <ion-icon name=\"pin\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  <!-- Orders -->\r\n\r\n  <!-- Content  rgb(243, 243, 243)-->\r\n  <div class=\"welcome-card\" style=\"background-color:#FFFFFF;width: 98%;margin-left: 1%\" mode=\"ios\">\r\n    <ion-list *ngIf=\"loadBody == false && fk_items.length > 0\" style=\"margin-top: 20px;\">\r\n      <ion-grid>\r\n          <span >\r\n              <ion-skeleton-text animated style=\"margin-left: 5px; width: 30%;height: 16px;\"></ion-skeleton-text>\r\n          </span>\r\n          <ion-row >\r\n            <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <div>\r\n                    <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div>\r\n                    <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div>\r\n                    <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div>\r\n                    <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n                </div>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    </ion-list>\r\n\r\n    <ion-card-content *ngIf=\"data\" style=\"padding:0;\">\r\n\r\n      <!-- Banners -->\r\n      <ion-slides pager=\"false\" [options]=\"BannerOption\" #slideone autoplay=\"3000\" *ngIf=\"!hasSearch && !nearby\">\r\n        <ion-slide *ngFor=\"let offer of data.banner\" (click)=\"bannerLink(offer)\">\r\n          <!-- <img src=\"{{ offer.img }}\" class=\"img_banner\"> -->\r\n          <div class=\"img_banner\" [style.backgroundImage]=\"'url('+ offer.img +')'\"></div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <!-- Banners -->\r\n\r\n      <ion-card *ngIf=\"!hasSearch && !nearby && data && data.store.length == 0\" mode=\"ios\" style=\"padding: 20px 20px;\">\r\n        <h2>\r\n          Opps! Aun no hay comercios en esta zona\r\n        </h2>\r\n        <ion-button size=\"small\" mode=\"ios\" routerLink=\"/city\" routerDirection=\"back\">Cambiar Localidad</ion-button>\r\n      </ion-card>\r\n    \r\n      <ion-backdrop tappable=\"false\" *ngIf=\"filterPress\"></ion-backdrop>\r\n\r\n      <!--******************* Categorias *******************************-->\r\n        <ion-list *ngIf=\"!hasSearch && !nearby && ViewStore == false && loadBody == true && fk_items.length > 0\" style=\"margin-top: 20px;\">\r\n          <ion-grid >\r\n            <span style=\"font-size: 14px;margin: 0 5px;\">\r\n              Nuestras Categorias<br />\r\n            </span>\r\n            <ion-row style=\"padding-top: 15px;\">\r\n              <ion-col size=\"6\" *ngFor=\"let kind of fk_items\" (click)=\"ViewStores(kind.id)\">\r\n                <div>\r\n                  <div class=\"wrap-img-cats\" [style.backgroundImage]=\"'url('+ kind.Img +')'\">\r\n                    <span>{{kind.Name}}</span>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-list>\r\n      <!--******************* Categorias *******************************-->\r\n    \r\n      <!--********************** Items Normales ********************************************************-->\r\n      <div *ngIf=\"!nearby && ViewStore == true && ComerceRest.length > 0\" style=\"background-color: #FFFFFF;margin-top: 15px;\">\r\n          <h6 style=\"padding-left: 15px;padding-top: 25px; font-family: 'SF Pro Display';font-weight: 800;\">\r\n            <ion-icon name=\"restaurant\"></ion-icon> {{categoriaActive}}\r\n            <a style=\"float: right;font-size: 14px;margin-right: 8px;\" (click)=\"ViewCat()\">Ver Categorias</a>\r\n          </h6>\r\n\r\n          <ion-card style=\"padding: 2px 2px;font-size: 12px;width: 100%;margin-left: 2px\" mode=\"ios\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"4\" style=\"text-align: center;\" *ngFor=\"let store of ComerceRest;let i = index\" (click)=\"itemPage(store)\">\r\n                  <ion-avatar style=\"text-align: center;margin: auto;\">\r\n                    <img src=\"{{store.img}}\" style=\"border: 1px solid #ee5413;margin: auto;\">\r\n                  </ion-avatar>\r\n                  \r\n                  <div style=\"width: 100%;text-align: center;padding: 0 !important;margin: 0 !important;\">\r\n                    <b style=\"font-size: 14px;\">{{ store.title | slice:0:10 }}<i *ngIf=\"store.title.length > 10\">...</i></b><br />\r\n                    <b style=\"font-size: 12px;\">{{ store.type | slice:0:10 }}<i *ngIf=\"store.type.length > 10\">...</i></b>\r\n                  </div>\r\n                  \r\n                  <small style=\"color: gray;font-size: 12px\">\r\n                    Entrega en {{ store.delivery_time }}\r\n                  </small><br />\r\n\r\n                  <small style=\"color: #ee5413;\">\r\n                    Distancia: {{store.km}} km\r\n                  </small>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card>    \r\n\r\n          <!--********************** Infinite Scroll ******************************************-->\r\n            <ion-infinite-scroll *ngIf=\"!hasSearch\" threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n              <ion-infinite-scroll-content\r\n                loadingSpinner=\"bubbles\"\r\n                loadingText=\"Cargando mas datos...\">\r\n              </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n            <ion-item *ngIf=\"let_end\" style=\"text-align: center;\">\r\n              Ya no hay mas comercios que mostrar.\r\n            </ion-item>\r\n          <!--********************** Infinite Scroll ******************************************-->\r\n      </div>\r\n\r\n      <div *ngIf=\"!nearby && ViewStore == true && ComerceRest.length == 0\">\r\n        <ion-card mode=\"ios\" style=\"padding: 20px 20px;\">\r\n          <h2>\r\n            Opps! Aun no hay comercios en esta categoria\r\n          </h2>\r\n          <ion-button size=\"small\" mode=\"ios\" (click)=\"ionViewWillEnter()\">Ver todas las Categorias</ion-button>\r\n        </ion-card>\r\n      </div>\r\n      <!--********************** Items Normales ********************************************************-->\r\n\r\n      <!--********************** Search ********************************************************-->\r\n        <div *ngIf=\"hasSearch && ComerceRest.length > 0\" style=\"background-color: #FFFFFF;margin-top: 15px;\">\r\n            <ion-card style=\"padding: 2px 2px;font-size: 12px;width: 100%;margin-left: 2px\" mode=\"ios\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"4\" style=\"text-align: center;\" *ngFor=\"let store of ComerceRest;let i = index\" (click)=\"itemPage(store)\">\r\n                    <ion-avatar style=\"text-align: center;margin: auto;\">\r\n                      <img src=\"{{store.img}}\" style=\"border: 1px solid #ee5413;margin: auto;\">\r\n                    </ion-avatar>\r\n                    \r\n                    <div style=\"width: 100%;text-align: center;padding: 0 !important;margin: 0 !important;\">\r\n                      <b style=\"font-size: 14px;\">{{ store.title | slice:0:10 }}<i *ngIf=\"store.title.length > 10\">...</i></b><br />\r\n                      <b style=\"font-size: 12px;\">{{ store.type | slice:0:10 }}<i *ngIf=\"store.type.length > 10\">...</i></b>\r\n                    </div>\r\n                    \r\n                    <small style=\"color: gray;font-size: 12px\">\r\n                      Entrega en {{ store.delivery_time }}\r\n                    </small><br />\r\n\r\n                    <small style=\"color: #ee5413;\">\r\n                      Distancia: {{store.km}} km\r\n                    </small>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card>    \r\n\r\n            <!--********************** Infinite Scroll ******************************************-->\r\n              <ion-infinite-scroll *ngIf=\"!hasSearch\" threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n                <ion-infinite-scroll-content\r\n                  loadingSpinner=\"bubbles\"\r\n                  loadingText=\"Cargando mas datos...\">\r\n                </ion-infinite-scroll-content>\r\n              </ion-infinite-scroll>\r\n              <ion-item *ngIf=\"let_end\" style=\"text-align: center;\">\r\n                Ya no hay mas comercios que mostrar.\r\n              </ion-item>\r\n            <!--********************** Infinite Scroll ******************************************-->\r\n        </div>\r\n\r\n        <div *ngIf=\"hasSearch && ComerceRest.length == 0\">\r\n          <ion-card mode=\"ios\" style=\"padding: 20px 20px;\">\r\n            <h2>\r\n              Opps! Aun no hay comercios en esta categoria\r\n            </h2>\r\n            <ion-button size=\"small\" mode=\"ios\" (click)=\"ionViewWillEnter()\">Ver todas las Categorias</ion-button>\r\n          </ion-card>\r\n        </div>\r\n      <!--********************** Search ********************************************************-->\r\n      \r\n      <!--********************** Comercios Cercanos ********************************************************-->\r\n      <div *ngIf=\"nearby && data\" style=\"background-color: #FFFFFF;margin-top: 0%;\">\r\n        <h6 style=\"padding-left: 15px;padding-top: 25px; font-family: 'SF Pro Display';font-weight: 500;\">\r\n          <ion-icon name=\"restaurant\"></ion-icon> Comercios Cercanos\r\n        </h6>\r\n\r\n        <ion-row style=\"margin: 8px 15px;border: 0.5px solid #f0f0f0;\" *ngFor=\"let store of data.store;let i = index\" (click)=\"itemPage(store)\">\r\n          <!-- Imagen -->\r\n          <ion-col size=\"4\" style=\"margin: 0 !important;padding: 0 !important;\">\r\n            <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\r\n              <div class=\"close_in\"  *ngIf=\"!store.open\">\r\n                <span>NO DISPONIBLE EN ESTE MOMENTO</span>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <!-- Imagen -->\r\n          <!-- Info -->\r\n          <ion-col size=\"8\" class=\"wrap_info\" style=\"font-size: 12px;border-left: 0.5px solid #f0f0f0;padding-left: 8px;\">\r\n            <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\r\n              <b style=\"font-size: 16px;\">{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b>\r\n            </div>\r\n            <small style=\"color: gray;font-size: 10px\">\r\n              <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\r\n            </small><br>\r\n            <small style=\"color: gray;font-size: 10px\">\r\n              Entrega en {{ store.delivery_time }}\r\n            </small><br />\r\n\r\n            <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\r\n              Distancia: {{store.km}} km\r\n            </small><br *ngIf=\"store.max_distance > 0\" />\r\n\r\n            <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\r\n              Sin cobertura en tu ubicación.\r\n            </small><br *ngIf=\"store.max_distance == 0\" />\r\n\r\n            <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\r\n              Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\r\n            </small>\r\n          </ion-col>\r\n          <!-- Info -->\r\n        </ion-row>\r\n      </div>\r\n      <!--********************** Comercios Cercanos ********************************************************-->\r\n    </ion-card-content>\r\n  </div>\r\n  <!-- Content -->\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"text && isKeyboardHide\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\">\r\n        \r\n      <ion-tab-button (click)=\"ViewCat()\">\r\n          <ion-icon name=\"home\"></ion-icon>\r\n          <ion-label>{{ text.home_footer_name }}</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"nearBy()\">\r\n          <ion-icon name=\"pin\"></ion-icon>\r\n          <ion-label>{{ text.home_nearest }}</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n          <ion-label>{{ text.home_cart }}</ion-label>\r\n          <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\r\n          <ion-icon name=\"person\"></ion-icon>\r\n          <ion-label>{{ text.home_profile }}</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/directives/hide-header.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directives/hide-header.directive.ts ***!
    \*****************************************************/

  /*! exports provided: HideHeaderDirective */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function () {
      return HideHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let HideHeaderDirective = class HideHeaderDirective {
      constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
      }

      ngOnInit() {
        this.domCtrl.write(() => {
          this.renderer.setStyle(this.header.el, 'webkitTransition', 'margin-top 180ms');
        });
      }

      onContentScroll($event) {
        if ($event.detail.currentY > 56) {
          if ($event.detail.scrollTop > 56) {
            this.renderer.setStyle(this.header.el, 'margin-top', '-56px');
          } else {
            this.renderer.setStyle(this.header.el, 'margin-top', '0px');
          }
        } else {
          this.renderer.setStyle(this.header.el, 'margin-top', '0px');
        }
      }

    };

    HideHeaderDirective.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HideHeaderDirective.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('srcBar'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HideHeaderDirective.prototype, "srcBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HideHeaderDirective.prototype, "onContentScroll", null);
    HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[hide-header]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])], HideHeaderDirective);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../directives/hide-header.directive */
    "./src/app/directives/hide-header.directive.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_7__["HideHeaderDirective"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-backdrop {\n  opacity: 0.3;\n}\n\nion-toolbar {\n  --opacity: 0;\n}\n\n.action-sheet-group {\n  background: #911919;\n}\n\n.img_banner {\n  width: 100%;\n  height: 115px;\n  border-radius: 3px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center 0;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .action-sheet-group {\n  background: #911919;\n}\n\n.searchBar {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.grid_menu {\n  margin: 0px !important;\n  padding-top: 0;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 14.5px;\n  font-family: \"SF Pro Display\";\n}\n\n.grid_menu ion-row ion-col {\n  position: relative;\n}\n\n.grid_menu ion-row ion-col:before {\n  position: absolute;\n  content: \"\";\n  right: 0;\n  top: 20%;\n  width: 1px;\n  height: 60%;\n  background-color: #ececec;\n}\n\n.grid_menu ion-row ion-col ion-icon {\n  position: absolute;\n  top: 30%;\n}\n\n.grid_menu ion-row ion-col:last-child::before {\n  display: none;\n}\n\n.AllElements {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.AllElements .regular-items {\n  text-align: left;\n  position: relative;\n  display: inline-block;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.AllElements a {\n  text-decoration: none;\n}\n\n.AllElements a h3 {\n  color: #000;\n  font-weight: 700;\n  font-size: 18px;\n  padding-left: 10px;\n}\n\n.AllElements a small {\n  color: #626262;\n  font-size: 13px;\n  padding-left: 10px;\n}\n\n.AllElements .wrap-img-items {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 0;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.AllElements .wrap-img-items:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 160px;\n  background: #010101;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(10%, #010101), color-stop(98%, rgba(255, 255, 255, 0)));\n  background: linear-gradient(0deg, #010101 10%, rgba(255, 255, 255, 0) 98%);\n  z-index: 1;\n}\n\n.AllElements .wrap-img-items .text {\n  position: absolute;\n  bottom: 0;\n  padding: 10px 0;\n  z-index: 50;\n}\n\n.AllElements .wrap-img-items .text h3 {\n  color: #fff;\n  max-width: 250px;\n}\n\n.AllElements .wrap-img-items .text small {\n  color: #fff;\n}\n\n.AllElements .Abierto {\n  color: #08a82a;\n}\n\n.AllElements .Cerrado {\n  color: red;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col {\n  text-align: center;\n  font-size: 12px;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.AllElements .raiting {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 12px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.wrap_info {\n  position: relative;\n}\n\n.wrap_info ion-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  padding: 4px 8px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 11px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.recentItems a {\n  text-decoration: none;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.recentItems a h2 {\n  color: #000;\n  font-weight: 700;\n}\n\n.recentItems a small {\n  color: #626262;\n}\n\n.recentItems a h3 {\n  color: #626262;\n}\n\n.recentItems .Abierto {\n  color: #08a82a;\n}\n\n.recentItems .Cerrado {\n  color: red;\n}\n\n.recentItems h3 {\n  font-family: \"Open Sans\", sans-serif;\n  color: #000 !important;\n}\n\n.recentItems .wrap-img-recents {\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\n\n.recentItems ion-label .info span {\n  width: 100%;\n  font-size: 11px;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.recentItems ion-label .info span .pl-10 {\n  padding-left: 10px;\n}\n\n.recentItems ion-label .info span strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.recentItems .raiting {\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  z-index: 100;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  border-radius: 8px;\n}\n\n.img_radius {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  border-radius: 8px;\n}\n\n.img_radius .close_in {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.342);\n  text-align: center;\n}\n\n.img_radius .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 25%;\n  margin: auto;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.img_radius .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.img_trend {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 8px;\n}\n\n.img_trend .close_in {\n  position: absolute;\n  width: 100%;\n  height: 150px;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.342);\n  text-align: center;\n}\n\n.img_trend .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 60px;\n  margin: auto;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.img_trend .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.lastdisches {\n  box-shadow: 14px 13px 14px -8px rgba(0, 0, 0, 0.28);\n}\n\n.kind_food .swiper-container {\n  box-shadow: 0 !important;\n  background-color: #fff;\n  border: 0 !important;\n  padding: 15px 0;\n  width: 100%;\n  height: 100%;\n}\n\n.kind_food .wrap-img-kindfood {\n  width: 120px;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(43, 40, 38, 0.4);\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf h6 {\n  color: #f6f6f6;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 8px auto;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.tag_close {\n  position: absolute;\n  top: -8px;\n  left: 0;\n  width: 100%;\n}\n\n/* Categorias */\n\n.wrap-img-cats {\n  width: 100%;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  text-align: center;\n}\n\n.wrap-img-cats::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.wrap-img-cats span {\n  position: absolute;\n  top: 32px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: #fff;\n  font-family: sans-serif, 700;\n  font-size: 15px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcaW9uaWNcXGJlZXBiZWVwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBLHVFQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FER0k7RUFDRSxrQkFBQTtBQ0ROOztBREdNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRFI7O0FESU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNGUjs7QURPUTtFQUNFLGFBQUE7QUNMVjs7QURjQTtFQUNFLGtCQUFBO0VBU0Esb0JBQUE7QUNuQkY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSx3QkFBQTtVQUFBLHVCQUFBO0FDVkY7O0FEY0U7RUFDRSxxQkFBQTtBQ1pKOztBRGNJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWk47O0FEZUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDYk47O0FEaUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGlCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFBTyxPQUFBO0VBQ1AsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhIQUFBO0VBQUEsMEVBQUE7RUFDQSxVQUFBO0FDZE47O0FEaUJJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNmTjs7QURpQk07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNmUjs7QURrQk07RUFDRSxXQUFBO0FDaEJSOztBRHFCRTtFQUNFLGNBQUE7QUNuQko7O0FEc0JFO0VBQ0UsVUFBQTtBQ3BCSjs7QUQyQlU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDekJaOztBRDJCWTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUN6QmQ7O0FEaUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQWEsV0FBQTtFQUNiLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUM5Qko7O0FEbUNBO0VBQ0Usa0JBQUE7QUNoQ0Y7O0FEa0NFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQVMsVUFBQTtFQUNULGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUMvQko7O0FEc0NNO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtBQ25DUjs7QURxQ1E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNuQ1Y7O0FEc0NRO0VBQ0UsY0FBQTtBQ3BDVjs7QUR1Q1E7RUFDRSxjQUFBO0FDckNWOztBRHlDTTtFQUNFLGNBQUE7QUN2Q1I7O0FEMENNO0VBQ0UsVUFBQTtBQ3hDUjs7QUQyQ007RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FDekNSOztBRDRDTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUMxQ1I7O0FEK0NVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUM3Q1o7O0FEK0NZO0VBQ0Usa0JBQUE7QUM3Q2Q7O0FEZ0RZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQzlDZDs7QURvRE07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFBVSxRQUFBO0VBQ1YsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNqRFI7O0FEdURBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNwREY7O0FEc0RFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFBUSxNQUFBO0VBQ1Isa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FDbkRKOztBRHFESTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEROOztBRHNERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUFTLE9BQUE7RUFDVCxXQUFBO0FDbkRKOztBRHVEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDcERGOztBRHNERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQVEsTUFBQTtFQUNSLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ25ESjs7QURxREk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xETjs7QURzREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBUyxPQUFBO0VBQ1QsV0FBQTtBQ25ESjs7QUR3REE7RUFHRSxtREFBQTtBQ3JERjs7QUQyREU7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN4REo7O0FEMkRFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3pESjs7QUQwREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCx1Q0FBQTtFQUNBLG1CQUFBO0FDdkROOztBRHdETTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNyRFI7O0FEMkRBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQVUsT0FBQTtFQUNWLFdBQUE7QUN2REY7O0FENERBLGVBQUE7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDM0RGOztBRDhEQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQzFERjs7QUQ2REE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFBVSxPQUFBO0VBQVEsUUFBQTtFQUNsQixZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDeERGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrZHJvcCB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59IFxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmFjdGlvbi1zaGVldC1ncm91cCB7XHJcbiAgYmFja2dyb3VuZDogIzkxMTkxOTtcclxufVxyXG5cclxuLmltZ19iYW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMDtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcclxuICBiYWNrZ3JvdW5kOiAjOTExOTE5O1xyXG59XHJcblxyXG4uc2VhcmNoQmFyIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn0gIFxyXG5cclxuLmdyaWRfbWVudSB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNC41cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcblxyXG4gIGlvbi1yb3cge1xyXG5cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSXRlbXMgUmVndWxhcmVzXHJcblxyXG4uQWxsRWxlbWVudHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbi5yZWd1bGFyLWl0ZW1zIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndyYXAtaW1nLWl0ZW1zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB0b3A6IDA7bGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxLDEsMSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEsMSwxLDEpIDEwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA5OCUpO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgei1pbmRleDogNTA7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuQWJpZXJ0byB7XHJcbiAgICBjb2xvcjogIzA4YTgyYTtcclxuICB9XHJcblxyXG4gIC5DZXJyYWRvIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAjaW5mby1jYXJkIHtcclxuICAgIC5pbmZvIHtcclxuICAgICAgaW9uLWdyaWQgIHtcclxuICAgICAgICBpb24tcm93ICB7XHJcbiAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzRjNGM0YztcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJhaXRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O3JpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGOTUwNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgei1pbmRleDogNTA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLndyYXBfaW5mbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpb24tYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7cmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjk1MDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5yZWNlbnRJdGVtcyAge1xyXG4gICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgY29sb3I6IHJnYig5OCwgOTgsIDk4KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5BYmllcnRvIHtcclxuICAgICAgICBjb2xvcjogIzA4YTgyYTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5DZXJyYWRvIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLndyYXAtaW1nLXJlY2VudHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuICAgICAgICAgICAgLnBsLTEwIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnJhaXRpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1cHg7dG9wOiA1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbiAgICBcclxuLmltZ19yYWRpdXMge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gIC5jbG9zZV9pbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7dG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM0Mik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtyaWdodDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0b3A6IDI1JTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50YWdfY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMiU7bGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmltZ190cmVuZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gIC5jbG9zZV9pbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBsZWZ0OiAwO3RvcDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRhZ19jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yJTtsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmxhc3RkaXNjaGVzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDE0cHggMTNweCAxNHB4IC04cHggcmdiYSgwLDAsMCwwLjI4KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDE0cHggMTNweCAxNHB4IC04cHggcmdiYSgwLDAsMCwwLjI4KTtcclxuICBib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC4yOCk7XHJcbn1cclxuXHJcbi8vIFRpcG9zIGRlIGNvbWlkYVxyXG4ua2luZF9mb29kIHtcclxuXHJcbiAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAud3JhcC1pbWcta2luZGZvb2Qge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLndyYXAtYm94LWtmIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0b3A6IDA7bGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0Myw0MCwzOCwwLjQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBoNiB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtyaWdodDogMDtcclxuICAgICAgICBtYXJnaW46OHB4IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRhZ19jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThweDtsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcbi8qIENhdGVnb3JpYXMgKi9cclxuXHJcblxyXG4ud3JhcC1pbWctY2F0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwLWltZy1jYXRzOjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7bGVmdDogMDtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcclxufVxyXG5cclxuLndyYXAtaW1nLWNhdHMgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzJweDtsZWZ0OiAwO3JpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiIsImlvbi1iYWNrZHJvcCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLW9wYWNpdHk6IDA7XG59XG5cbi5hY3Rpb24tc2hlZXQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiAjOTExOTE5O1xufVxuXG4uaW1nX2Jhbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAwO1xufVxuXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xuLm15LWN1c3RvbS1jbGFzcyAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcbiAgYmFja2dyb3VuZDogIzkxMTkxOTtcbn1cblxuLnNlYXJjaEJhciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkX21lbnUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNC41cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG59XG4uZ3JpZF9tZW51IGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ncmlkX21lbnUgaW9uLXJvdyBpb24tY29sOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjAlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cbi5ncmlkX21lbnUgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbn1cbi5ncmlkX21lbnUgaW9uLXJvdyBpb24tY29sOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5BbGxFbGVtZW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uQWxsRWxlbWVudHMgLnJlZ3VsYXItaXRlbXMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uQWxsRWxlbWVudHMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5BbGxFbGVtZW50cyBhIGgzIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLkFsbEVsZW1lbnRzIGEgc21hbGwge1xuICBjb2xvcjogIzYyNjI2MjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uQWxsRWxlbWVudHMgLndyYXAtaW1nLWl0ZW1zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uQWxsRWxlbWVudHMgLndyYXAtaW1nLWl0ZW1zOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYmFja2dyb3VuZDogIzAxMDEwMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMTAxMDEgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk4JSk7XG4gIHotaW5kZXg6IDE7XG59XG4uQWxsRWxlbWVudHMgLndyYXAtaW1nLWl0ZW1zIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgei1pbmRleDogNTA7XG59XG4uQWxsRWxlbWVudHMgLndyYXAtaW1nLWl0ZW1zIC50ZXh0IGgzIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG4uQWxsRWxlbWVudHMgLndyYXAtaW1nLWl0ZW1zIC50ZXh0IHNtYWxsIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uQWxsRWxlbWVudHMgLkFiaWVydG8ge1xuICBjb2xvcjogIzA4YTgyYTtcbn1cbi5BbGxFbGVtZW50cyAuQ2VycmFkbyB7XG4gIGNvbG9yOiByZWQ7XG59XG4uQWxsRWxlbWVudHMgI2luZm8tY2FyZCAuaW5mbyBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5BbGxFbGVtZW50cyAjaW5mby1jYXJkIC5pbmZvIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBzdHJvbmcge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLkFsbEVsZW1lbnRzIC5yYWl0aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NTA1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4ud3JhcF9pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndyYXBfaW5mbyBpb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NTA1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4ucmVjZW50SXRlbXMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG4ucmVjZW50SXRlbXMgYSBoMiB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnJlY2VudEl0ZW1zIGEgc21hbGwge1xuICBjb2xvcjogIzYyNjI2Mjtcbn1cbi5yZWNlbnRJdGVtcyBhIGgzIHtcbiAgY29sb3I6ICM2MjYyNjI7XG59XG4ucmVjZW50SXRlbXMgLkFiaWVydG8ge1xuICBjb2xvcjogIzA4YTgyYTtcbn1cbi5yZWNlbnRJdGVtcyAuQ2VycmFkbyB7XG4gIGNvbG9yOiByZWQ7XG59XG4ucmVjZW50SXRlbXMgaDMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi5yZWNlbnRJdGVtcyAud3JhcC1pbWctcmVjZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJlY2VudEl0ZW1zIGlvbi1sYWJlbCAuaW5mbyBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yZWNlbnRJdGVtcyBpb24tbGFiZWwgLmluZm8gc3BhbiAucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ucmVjZW50SXRlbXMgaW9uLWxhYmVsIC5pbmZvIHNwYW4gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZWNlbnRJdGVtcyAucmFpdGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDVweDtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NTA1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaW1nX3JhZGl1cyB7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uaW1nX3JhZGl1cyAuY2xvc2VfaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZ19yYWRpdXMgLmNsb3NlX2luIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogMjUlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pbWdfcmFkaXVzIC50YWdfY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltZ190cmVuZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmltZ190cmVuZCAuY2xvc2VfaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM0Mik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWdfdHJlbmQgLmNsb3NlX2luIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW1nX3RyZW5kIC50YWdfY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhc3RkaXNjaGVzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMTRweCAxM3B4IDE0cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG59XG5cbi5raW5kX2Zvb2QgLnN3aXBlci1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ua2luZF9mb29kIC53cmFwLWltZy1raW5kZm9vZCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5raW5kX2Zvb2QgLndyYXAtaW1nLWtpbmRmb29kIC53cmFwLWJveC1rZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MCwgMzgsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ua2luZF9mb29kIC53cmFwLWltZy1raW5kZm9vZCAud3JhcC1ib3gta2YgaDYge1xuICBjb2xvcjogI2Y2ZjZmNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRhZ19jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogQ2F0ZWdvcmlhcyAqL1xuLndyYXAtaW1nLWNhdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud3JhcC1pbWctY2F0czo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLndyYXAtaW1nLWNhdHMgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");

    let HomePage = class HomePage {
      constructor(server, nav, events, keyboard, loadingController, menu, toastController, renderer, domCtrl, actionSheetController, _document) {
        this.server = server;
        this.nav = nav;
        this.events = events;
        this.keyboard = keyboard;
        this.loadingController = loadingController;
        this.menu = menu;
        this.toastController = toastController;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.actionSheetController = actionSheetController;
        this._document = _document;
        this.BannerOptionFirst = {
          initialSlide: 0,
          slidesPerView: 3,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          spaceBetween: 7
        };
        this.BannerOption = {
          loop: false,
          centeredSlides: true,
          autoplay: true,
          speed: 500,
          spaceBetween: 7
        };
        this.SearchOption = {
          initialSlide: 0,
          slidesPerView: 3.5,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          speed: 500,
          spaceBetween: -20
        };
        this.TrendOption = {
          initialSlide: 0,
          slidesPerView: 1.2,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          speed: 800,
          spaceBetween: -9
        };
        this.MiddleBannerOption = {
          initialSlide: 0,
          slidesPerView: 1,
          loop: false,
          centeredSlides: true,
          autoplay: true,
          speed: 800,
          spaceBetween: 4
        };
        this.fakeData = [1, 2, 3, 4, 5, 6, 7];
        this.showLoading = false;
        this.hasSearch = false;
        this.loadRecentItems = false;
        this.RecentsItems = {
          initialSlide: 0,
          slidesPerView: 1.2,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          speed: 800,
          spaceBetween: -9
        };
        this.RecentsStore = [];
        this.LastVisitStore = [];
        this.loadRegularitems = false;
        this.LastPlatillos = {
          initialSlide: 0,
          slidesPerView: 1.2,
          freeMode: true,
          loop: false,
          centeredSlides: false,
          autoplay: true,
          speed: 800,
          spaceBetween: 9
        };
        this.lastDishes = [];
        this.loadSliderKf = false; // Inicialiamos el slider de KindofFood

        this.kind_food = {
          slidesPerView: 'auto',
          spaceBetween: 10,
          freeMode: true
        };
        this.fk_items = [];
        this.isKeyboardHide = true;
        this.ComerceRest = [];
        this.showToolbar = false;
        this.InTrendingStore = [];
        this.ComerceRestClose = [];
        this.allDataComerce = [];
        this.max_stores = 0;
        this.length_store = 0;
        this.Tot_stores = 0;
        this.let_init = 0;
        this.let_end = false;
        this.loadBody = false;
        this.ViewStore = false;
      }

      ionViewWillEnter() {
        this.headr = document.getElementsByClassName('header')[0];
        this.address = localStorage.getItem("address");
        this.menu.enable(true);
        this.keyboard.onKeyboardWillShow().subscribe(() => {
          this.isKeyboardHide = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
          this.isKeyboardHide = true;
        });

        if (!localStorage.getItem('user_id')) {
          this.nav.navigateRoot('/welcome');
        } else {
          if (localStorage.getItem('user_id') == 'null') {
            this.nav.navigateRoot('/welcome');
          }
        }

        if (localStorage.getItem('app_text')) {
          this.text = JSON.parse(localStorage.getItem('app_text'));
        }

        if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
          this.nav.navigateForward('address');
        }

        this.city_name = localStorage.getItem('city_name');
        this.city_id = localStorage.getItem('city_id');
        this.server.cartCount(localStorage.getItem('cart_no') + "?user_id=" + localStorage.getItem('user_id')).subscribe(response => {
          this.count = response.data;
          this.order = response.order;
        });
        this.verifyUser();
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
      }

      ngOnInit() {
        this.searchQuery = null;
        this.hasSearch = false;
      }

      clearSearch() {
        this.searchQuery = null;
        this.hasSearch = false;
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
      }

      nearBy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.delay(500);
          const loading = yield this.loadingController.create({
            message: 'Cargando...'
          });
          yield loading.present();
          this.nearby = true;
          this.data.store.sort((a, b) => {
            loading.dismiss();
            return parseFloat(a.km) - parseFloat(b.km);
          });
        });
      }

      loadData(city_id, viewAll = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({});
          yield loading.present();
          this.let_init = 0;
          this.nearby = false;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0; // Obtenemos las coordenadas

          this.server.getGeolocation();
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.data = response.data;

            if (localStorage.getItem('viewCatActive') || localStorage.getItem('viewCatActive') != null) {
              let cate = localStorage.getItem('viewCatActive');
              loading.dismiss();
            } else {
              this.text = response.data.text;
              this.Tot_stores = response.data.Tot_stores;
              this.events.publish('text', this.text);
              this.events.publish('admin', response.data.admin);
              localStorage.setItem('app_text', JSON.stringify(response.data.text));
              localStorage.setItem('admin', JSON.stringify(response.data.admin));
              this.loadRecentItems = true;
              this.loadRegularitems = true;
              this.loadSliderKf = true; // Obtenemos los comercios de donde se ha pedido comida

              this.getLastCommPed(); // Obtenemos todas la categorias

              this.getTypeStore(response.data.Categorys); // Ordenamos por los locales mas recientes

              this.GetRecentStore(response.data.store); // Obtenemos los comercios en tendencia

              this.GetTrendingStore(response.data.trending);
              this.Content.scrollToPoint(0, 0, 300);
              this.domCtrl.write(() => {
                this.renderer.setStyle(this.headr, 'transition', 'margin-top 300ms');
              }); // Generamos el numero random para los banners

              let min = 5;

              if (response.data.store < 5 && response.data.store > 3) {
                min = 2;
              } else if (response.data.store > 5) {
                min = 5;
              } else {
                min = 1;
              }

              let random = Math.floor(Math.random() * (response.data.store.length - min)) + min;
              this.bannerBottomRand = random;
              this.loadBody = true;
              this.ViewStore = false;
              loading.dismiss();
            }
          });
        });
      }

      loadMoreData(event) {
        setTimeout(() => {
          this.let_init += 5;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          var city_id = localStorage.getItem('city_id') + "?ss=ss";
          this.server.getMoreStores(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng + "&init=" + this.let_init).subscribe(response => {
            for (let r = 0; r < response.data.store.length; r++) {
              const element = response.data.store[r];
              this.ComerceRest.push(element);
            }

            event.target.complete();
          });

          if (this.ComerceRest.length >= this.Tot_stores) {
            event.target.disabled = true;
            this.let_end = true;
          }
        }, 500);
      }

      verifyUser() {
        this.server.userInfo(localStorage.getItem('user_id')).subscribe(response => {
          if (response.data) {
            if (response.data.phone == 'null') {
              this.nav.navigateBack('/chkphone');
            } else if (response.data.status == 1) {
              this.nav.navigateBack('/locked');
            } else if (response.data.password == response.data.pswfacebook) {
              this.presentToast("Te recomendamos cambiar tu contraseña", "danger");
            }
          } else {
            localStorage.removeItem('user_id');
            this.nav.navigateBack('/welcome');
          }
        });
      }

      GetRecentStore(data) {
        this.RecentsStore = [];
        let last = data.length;

        if (data.length >= 3) {
          last = 3;
        }

        for (let i = 0; i < last; i++) {
          const element = data[i];
          this.RecentsStore.push(element);
        }

        this.RecentsStore.sort((a, b) => {
          return parseFloat(b.id) - parseFloat(a.id);
        });
      }

      getLastCommPed() {
        this.LastVisitStore = [];

        if (localStorage.getItem('LastStore')) {
          let LastComm = JSON.parse(localStorage.getItem('LastStore'));

          for (let i = 0; i < LastComm.length; i++) {
            const element = LastComm[i];

            for (let x = 0; x < this.data.store.length; x++) {
              const store = this.data.store[x];

              if (element.store_id == store.id) {
                if (i <= 3) {
                  this.LastVisitStore.push(store);
                }
              }
            }
          }

          this.LastVisitStore.sort((a, b) => {
            return parseFloat(a.id) - parseFloat(b.id);
          });
        }
      }

      GetTrendingStore(data) {
        this.InTrendingStore = [];

        for (let t = 0; t < data.length; t++) {
          const element = data[t];

          if (element.open == true) {
            this.InTrendingStore.push(element);
          }
        }

        this.InTrendingStore.reverse();
      }

      getLastDishes(Stores) {
        let Items = [];
        let dishes = [];
        Stores.forEach(element => {
          Items.push(element.items);
        });
      }

      getTypeStore(List_type) {
        this.fk_items = []; // Limpiamos

        List_type.forEach(element => {
          if (element.status == 0) {
            this.fk_items.push({
              'id': element.id,
              'Name': element.name,
              'Img': element.img
            });
          }
        });
        this.fk_items.reverse();
      }

      trashLasComm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          localStorage.removeItem('LastStore');
          this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        });
      }

      search(ev) {
        var val = ev.target.value;

        if (val && val.length > 0) {
          this.data = null;
          this.hasSearch = val;
          let search = localStorage.getItem('city_id') + "?q=" + val;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(search + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.data = response.data;
            this.text = response.data.text;
            this.events.publish('text', this.text);
            this.events.publish('admin', response.data.admin);
            localStorage.setItem('app_text', JSON.stringify(response.data.text));
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
            this.loadRecentItems = true;
            this.loadRegularitems = true;
            this.loadSliderKf = true; // Obtenemos los comercios de donde se ha pedido comida

            this.getLastCommPed(); // Obtenemos todas la categorias

            this.getTypeStore(response.data.Categorys); // Ordenamos por los locales mas recientes

            this.data.store.sort((a, b) => {
              return parseFloat(b.id) - parseFloat(a.id);
            });
            this.ComerceRest = [];

            for (let r = 0; r < response.data.store.length; r++) {
              const element = response.data.store[r];
              this.ComerceRest.push(element);
            }

            this.GetRecentStore(response.data.store);
          });
        } else {
          this.ngOnInit();
          this.hasSearch = false;
        }
      }

      dataFilter(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.filterPress = type;
          yield this.delay(500);
          const loading = yield this.loadingController.create({
            message: 'Cargando...'
          });
          yield loading.present();

          if (type == 1) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.discount_value) - parseFloat(a.discount_value);
            });
          } else if (type == 2) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(a.delivery_charges_value.costs_ship) - parseFloat(b.delivery_charges_value.costs_ship);
            });
          } else if (type == 3) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.trending) - parseFloat(a.trending);
            });
          } else if (type == 4) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.id) - parseFloat(a.id);
            });
          } else if (type == 5) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.rating) - parseFloat(a.rating);
            });
          } else if (type == 6) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();
              return parseFloat(b.delivery_time) - parseFloat(a.delivery_time);
            });
          } else if (type == 7) {
            this.ComerceRest.sort((a, b) => {
              this.filterPress = 0;
              loading.dismiss();

              if (a.open) {
                return a;
              }
            });
          }
        });
      }

      delay(ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return new Promise(resolve => setTimeout(resolve, ms));
        });
      }

      bannerLink(offer) {
        if (offer.link) {
          let city_id = localStorage.getItem('city_id') + "?banner=" + offer.id;
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.itemPage(response.data.store[0]);
          });
        }
      }

      doRefresh(event) {
        setTimeout(() => {
          this.loadData(localStorage.getItem('city_id') + "?ss=ss");
          event.target.complete();
        }, 2000);
      }

      itemPage(storeData) {
        localStorage.setItem('menu_item', JSON.stringify(storeData));
        this.nav.navigateForward('/item'); // if(storeData.open)
        // {
        //   if (storeData.max_distance == 1) {
        //     localStorage.setItem('menu_item', JSON.stringify(storeData));
        //     this.nav.navigateForward('/item');
        //   }
        //   else 
        //   {
        //     this.presentToast("Este comercio no esta en tu ubicación actual.",'danger');
        //   }
        // }
        // else 
        // {
        //   this.presentToast("El comercio esta cerrado.",'danger');
        // }
      }

      ViewCat() {
        localStorage.removeItem('viewCatActive');
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
      }

      ViewStores(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({});
          yield loading.present();
          localStorage.setItem('viewCatActive', data);
          let city_id = localStorage.getItem('city_id') + "?ss=ss";
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.SearchCat(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng + "&cat=" + data).subscribe(response => {
            this.ViewStore = true;
            this.loadBody = true;
            this.ComerceRest = [];
            this.ComerceRestClose = [];
            this.categoriaActive = response.cat;

            for (let r = 0; r < response.data.length; r++) {
              const element = response.data[r];
              this.ComerceRest.push(element);
            }

            loading.dismiss();
          });
        });
      }

      presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 3000,
            position: 'top',
            mode: 'ios',
            color: color
          });
          toast.present();
        });
      }

      OptionCat_one() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: "Re-Ordenar",
            cssClass: 'my-custom-class',
            buttons: [{
              text: 'Cercanos',
              icon: 'pin',
              handler: () => {
                this.nearBy();
              }
            }, {
              text: 'Entrega Rapida',
              icon: 'alarm',
              handler: () => {
                this.nearby = false;
                this.dataFilter(6);
              }
            }, {
              text: 'Costos de envio más bajos',
              icon: 'cash',
              handler: () => {
                this.nearby = false;
                this.dataFilter(2);
              }
            }]
          });
          yield actionSheet.present();
        });
      }

      OptionCat_two() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: "Filtros",
            cssClass: 'my-custom-class',
            buttons: [{
              text: 'Más Recientes',
              handler: () => {
                this.nearby = false;
                this.dataFilter(4);
              }
            }, {
              text: 'Ofertas',
              handler: () => {
                this.nearby = false;
                this.dataFilter(1);
              }
            }, {
              text: 'Trending',
              handler: () => {
                this.nearby = false;
                this.dataFilter(3);
              }
            }, {
              text: 'Rating',
              handler: () => {
                this.nearby = false;
                this.dataFilter(5);
              }
            }]
          });
          yield actionSheet.present();
        });
      }

    };

    HomePage.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]
    }, {
      type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["DomController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])], HomePage.prototype, "Content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"])], HomePage.prototype, "toolbar", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["DomController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], Object])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map