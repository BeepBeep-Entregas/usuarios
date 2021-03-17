(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorys-categorys-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorys/categorys.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorys/categorys.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"SearchTitle\" style=\"font-size: 14px;\">\r\n      {{SearchTitle}}\r\n    </ion-title>\r\n    <ion-label slot=\"end\" style=\"padding-right: 15px;\" (click)=\"viewAll()\" *ngIf=\"SearchTitle != 'Categorias'\">Ver Todo</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-card *ngIf=\"loadView && SearchData.length == 0\" mode=\"ios\" style=\"padding: 20px 20px;\">\r\n    <h4>\r\n      Opps! No hay comercios con esa categoría\r\n    </h4>\r\n    <ion-button size=\"small\" mode=\"ios\" (click)=\"viewAll()\">Ver todas</ion-button>\r\n  </ion-card>\r\n  \r\n\r\n  <!--********************** Items Normales ********************************************************-->\r\n    <div *ngIf=\"SearchData.length > 0 && fk_items.length == 0\" style=\"background-color: #FFFFFF;margin-top: 15px;\">\r\n      <ion-row style=\"margin: 8px 15px;border: 0.5px solid #f0f0f0;\" *ngFor=\"let store of SearchData;let i = index\" (click)=\"itemPage(store)\">\r\n        <!-- Imagen -->\r\n        <ion-col size=\"4\" style=\"margin: 0 !important;padding: 0 !important;\">\r\n          <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\r\n            <div class=\"close_in\"  *ngIf=\"!store.open\">\r\n              <span>NO DISPONIBLE EN ESTE MOMENTO</span>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <!-- Imagen -->\r\n        <!-- Info -->\r\n        <ion-col size=\"8\" class=\"wrap_info\" style=\"font-size: 12px;border-left: 0.5px solid #f0f0f0;padding-left: 8px;\">\r\n          <b style=\"font-size: 14px;\">{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b>\r\n          <small style=\"color: gray;font-size: 10px\">\r\n            <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\r\n          </small><br>\r\n          <small style=\"color: gray;font-size: 10px\">\r\n            Entrega en {{ store.delivery_time }}\r\n          </small><br />\r\n\r\n          <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\r\n            Distancia: {{store.km}} km\r\n          </small><br *ngIf=\"store.max_distance > 0\" />\r\n\r\n          <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\r\n            Sin cobertura en tu ubicación.\r\n          </small><br *ngIf=\"store.max_distance == 0\" />\r\n\r\n          <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\r\n            Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\r\n          </small>\r\n        </ion-col>\r\n        <!-- Info -->\r\n      </ion-row>\r\n    </div>\r\n  <!--********************** Items Normales ********************************************************-->\r\n\r\n  <!-- Skeletor -->\r\n  <ion-list *ngIf=\"loadBody == false && fk_items.length > 0\" style=\"margin: 27px 8px;\">\r\n    <ion-grid>\r\n        <span >\r\n            <ion-skeleton-text animated style=\"margin-left: 5px; width: 30%;height: 16px;\"></ion-skeleton-text>\r\n        </span>\r\n        <ion-row >\r\n          <ion-col size=\"6\">\r\n            <div>\r\n                <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div>\r\n                <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div>\r\n                <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div>\r\n                <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div>\r\n                  <ion-skeleton-text animated style=\"width: 100%;height: 80px;\"></ion-skeleton-text>\r\n              </div>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-list>\r\n  <!-- /Skeletor -->\r\n  <ion-list *ngIf=\"loadBody == true && fk_items.length > 0\" style=\"margin: 25px 10px;\">\r\n    <ion-grid >\r\n      <span style=\"font-size: 14px;margin: 0 5px;\">\r\n        Listado<br />\r\n      </span>\r\n      <ion-row style=\"padding-top: 15px;\">\r\n        <ion-col size=\"6\" *ngFor=\"let kind of fk_items\" (click)=\"SearchColCategory(kind.id)\">\r\n          <div>\r\n            <div class=\"wrap-img-cats\" [style.backgroundImage]=\"'url('+ kind.Img +')'\">\r\n              <span>{{kind.Name}}</span>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"text\">\r\n  <ion-toolbar mode=\"ios\">\r\n  \r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      \r\n     <ion-tab-button routerLink=\"/home\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <ion-label>{{ text.home_footer_name }}</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button routerLink=\"/home\">\r\n        <ion-icon name=\"pin\"></ion-icon>\r\n        <ion-label>{{ text.home_nearest }}</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\r\n        <ion-icon name=\"basket\"></ion-icon>\r\n        <ion-label>{{ text.home_cart }}</ion-label>\r\n        <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n        <ion-label>{{ text.home_profile }}</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n  \r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/categorys/categorys.module.ts":
/*!***********************************************!*\
  !*** ./src/app/categorys/categorys.module.ts ***!
  \***********************************************/
/*! exports provided: CategorysPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorysPageModule", function() { return CategorysPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categorys_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorys.page */ "./src/app/categorys/categorys.page.ts");







const routes = [
    {
        path: '',
        component: _categorys_page__WEBPACK_IMPORTED_MODULE_6__["CategorysPage"]
    }
];
let CategorysPageModule = class CategorysPageModule {
};
CategorysPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_categorys_page__WEBPACK_IMPORTED_MODULE_6__["CategorysPage"]]
    })
], CategorysPageModule);



/***/ }),

/***/ "./src/app/categorys/categorys.page.scss":
/*!***********************************************!*\
  !*** ./src/app/categorys/categorys.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap_info {\n  position: relative;\n}\n.wrap_info ion-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  padding: 4px 8px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 11px;\n  border-radius: 6px;\n  z-index: 50;\n}\n.img_radius {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  border-radius: 8px;\n}\n.img_radius .close_in {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.342);\n  text-align: center;\n}\n.img_radius .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 25%;\n  margin: auto;\n  font-size: 10px;\n  font-weight: 500;\n}\n.img_radius .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n.search-input {\n  width: 100%;\n  padding-left: 15px;\n}\n.search-input > input {\n  width: 95%;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  padding-left: 20px;\n  border-radius: 30px;\n  border: 0;\n  background-color: #f0f0f0;\n}\n.search-input > input::-webkit-input-placeholder {\n  color: #000;\n}\n.search-input > input::-moz-placeholder {\n  color: #000;\n}\n.search-input > input::-ms-input-placeholder {\n  color: #000;\n}\n.search-input > input::placeholder {\n  color: #000;\n}\n.delete_item {\n  font-size: 16px;\n  color: red;\n}\n.wrap-img-cats {\n  width: 100%;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  text-align: center;\n}\n.wrap-img-cats::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.wrap-img-cats span {\n  position: absolute;\n  top: 32px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: #fff;\n  font-family: sans-serif, 700;\n  font-size: 15px;\n  font-weight: 600;\n}\n.favs-items .wrap-img-favs {\n  width: 75px;\n  height: 75px;\n  margin-left: 2.5px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0 0 10px #adadad;\n  border-radius: 5px;\n}\n.favs-items ion-label {\n  margin-left: 15px;\n  padding: 0;\n}\n.favs-items ion-label a {\n  text-decoration: none;\n}\n.favs-items ion-label a > small {\n  color: #4c4c4c;\n}\n.favs-items h2 {\n  color: #000;\n}\n.favs-items ion-label a .info {\n  margin-top: 5px;\n}\n.favs-items ion-label a .info span {\n  font-size: 11px;\n  color: #4c4c4c;\n  display: inline-block;\n}\n.favs-items ion-label a .info span.pl-10 {\n  padding-left: 10px;\n}\n.favs-items ion-label a .info span strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n.favs-items .raiting {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 2px 10px;\n  background-color: green;\n  color: #fff;\n  border-radius: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n}\n.favs-items .iconFavs {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  padding: 2px 10px;\n  color: red;\n  font-size: 16px;\n}\n.favs-items .Abierto {\n  color: #08a82a;\n}\n.favs-items .Cerrado {\n  color: red;\n}\n.SearchCat {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px;\n  background-color: #f3f3f3;\n}\n.tag_close {\n  position: absolute;\n  top: -8px;\n  left: 0;\n  width: 100%;\n}\n.img_radius {\n  margin: auto;\n  overflow: hidden;\n}\n.img_radius img {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnlzL0M6XFxpb25pY1xcYmVlcGJlZXBcXHVzdWFyaW9zL3NyY1xcYXBwXFxjYXRlZ29yeXNcXGNhdGVnb3J5cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5cy9jYXRlZ29yeXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQVMsVUFBQTtFQUNULGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFTjtBRElBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFBUSxNQUFBO0VBQ1Isa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ047QURHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUFTLE9BQUE7RUFDVCxXQUFBO0FDQUo7QURNQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFBb0IsZ0JBQUE7RUFDcEIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0ZKO0FES0E7RUFDSSxXQUFBO0FDRko7QURDQTtFQUNJLFdBQUE7QUNGSjtBRENBO0VBQ0ksV0FBQTtBQ0ZKO0FEQ0E7RUFDSSxXQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FDRko7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQU8sT0FBQTtFQUNQLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUFVLE9BQUE7RUFBUSxRQUFBO0VBQ2xCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDRko7QURLRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FES0U7RUFDRSxxQkFBQTtBQ0ZKO0FES0U7RUFDRSxjQUFBO0FDRko7QURLRTtFQUNFLFdBQUE7QUNGSjtBREtFO0VBQ0UsZUFBQTtBQ0ZKO0FES0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0FDRko7QURLRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQVksU0FBQTtFQUNaLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUNESjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQVksWUFBQTtFQUNaLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNGSjtBREtFO0VBQ0UsY0FBQTtBQ0ZKO0FES0U7RUFDRSxVQUFBO0FDRko7QURLRTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRE47QURLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUFVLE9BQUE7RUFDVixXQUFBO0FDREY7QURLQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FESUU7RUFDRSxrQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnlzL2NhdGVnb3J5cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcF9pbmZvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1cHg7cmlnaHQ6IDVweDtcclxuICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICB6LWluZGV4OiA1MDtcclxuICAgIH1cclxufVxyXG4gIFxyXG4gICAgICBcclxuICAgIFxyXG4uaW1nX3JhZGl1cyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgLmNsb3NlX2luIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDt0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO3JpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRvcDogMjUlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRhZ19jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yJTtsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4gIFxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCA+IGlucHV0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O3BhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICMwMDA7ICAgXHJcbn1cclxuXHJcbi5kZWxldGVfaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ud3JhcC1pbWctY2F0cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwLWltZy1jYXRzOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO2xlZnQ6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcclxufVxyXG5cclxuLndyYXAtaW1nLWNhdHMgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMycHg7bGVmdDogMDtyaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcblxyXG4gIC8vIEVsZW1lbnRvcyBGYXZvcml0b3NcclxuICBcclxuICAuZmF2cy1pdGVtcyAud3JhcC1pbWctZmF2cyB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAuZmF2cy1pdGVtcyBpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAuZmF2cy1pdGVtcyBpb24tbGFiZWwgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXZzLWl0ZW1zIGlvbi1sYWJlbCBhID4gc21hbGwge1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXZzLWl0ZW1zIGgyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAuZmF2cy1pdGVtcyBpb24tbGFiZWwgYSAuaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXZzLWl0ZW1zIGlvbi1sYWJlbCBhIC5pbmZvIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXZzLWl0ZW1zIGlvbi1sYWJlbCBhIC5pbmZvIHNwYW4ucGwtMTAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmF2cy1pdGVtcyBpb24tbGFiZWwgYSAuaW5mbyBzcGFuIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXZzLWl0ZW1zIC5yYWl0aW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O3RvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmZhdnMtaXRlbXMgLmljb25GYXZzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O2JvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmZhdnMtaXRlbXMgLkFiaWVydG8ge1xyXG4gICAgY29sb3I6ICMwOGE4MmE7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXZzLWl0ZW1zIC5DZXJyYWRvIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5TZWFyY2hDYXQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gIH1cclxuXHJcbiAgXHJcbi50YWdfY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC04cHg7bGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5pbWdfcmFkaXVzIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuIiwiLndyYXBfaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53cmFwX2luZm8gaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTUwNTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB6LWluZGV4OiA1MDtcbn1cblxuLmltZ19yYWRpdXMge1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmltZ19yYWRpdXMgLmNsb3NlX2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM0Mik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWdfcmFkaXVzIC5jbG9zZV9pbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0b3A6IDI1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW1nX3JhZGl1cyAudGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uc2VhcmNoLWlucHV0ID4gaW5wdXQge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cblxuLnNlYXJjaC1pbnB1dCA+IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uZGVsZXRlX2l0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi53cmFwLWltZy1jYXRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndyYXAtaW1nLWNhdHM6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi53cmFwLWltZy1jYXRzIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzJweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZhdnMtaXRlbXMgLndyYXAtaW1nLWZhdnMge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBtYXJnaW4tbGVmdDogMi41cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FkYWRhZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZmF2cy1pdGVtcyBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZhdnMtaXRlbXMgaW9uLWxhYmVsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYXZzLWl0ZW1zIGlvbi1sYWJlbCBhID4gc21hbGwge1xuICBjb2xvcjogIzRjNGM0Yztcbn1cblxuLmZhdnMtaXRlbXMgaDIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmZhdnMtaXRlbXMgaW9uLWxhYmVsIGEgLmluZm8ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5mYXZzLWl0ZW1zIGlvbi1sYWJlbCBhIC5pbmZvIHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mYXZzLWl0ZW1zIGlvbi1sYWJlbCBhIC5pbmZvIHNwYW4ucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5mYXZzLWl0ZW1zIGlvbi1sYWJlbCBhIC5pbmZvIHNwYW4gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZhdnMtaXRlbXMgLnJhaXRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mYXZzLWl0ZW1zIC5pY29uRmF2cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZhdnMtaXRlbXMgLkFiaWVydG8ge1xuICBjb2xvcjogIzA4YTgyYTtcbn1cblxuLmZhdnMtaXRlbXMgLkNlcnJhZG8ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uU2VhcmNoQ2F0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4udGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nX3JhZGl1cyB7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfcmFkaXVzIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/categorys/categorys.page.ts":
/*!*********************************************!*\
  !*** ./src/app/categorys/categorys.page.ts ***!
  \*********************************************/
/*! exports provided: CategorysPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorysPage", function() { return CategorysPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");





let CategorysPage = class CategorysPage {
    constructor(route, nav, server, loadingController) {
        this.route = route;
        this.nav = nav;
        this.server = server;
        this.loadingController = loadingController;
        this.SearchTitle = "Categorías";
        this.SearchData = [];
        this.loadBody = false;
        this.fk_items = [];
        this.loadView = false;
        this.loadData(localStorage.getItem('city_id') + "?ss=ss", '');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem('app_text')) {
            this.text = JSON.parse(localStorage.getItem('app_text'));
        }
    }
    viewAll() {
        this.SearchData = [];
        this.SearchTitle = 'Categorias';
        this.loadData(localStorage.getItem('city_id') + "?ss=ss", '');
    }
    loadData(city_id, cat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({});
            yield loading.present();
            this.data = null;
            this.SearchData = [];
            this.fk_items = []; // Vaciamos
            this.loadBody = false;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            if (cat != '') {
                this.server.SearchCat(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng + "&cat=" + cat).subscribe((response) => {
                    if (response.data.length == 0) {
                        this.SearchTitle = '';
                        this.loadBody = true;
                        this.loadView = true;
                    }
                    else {
                        this.loadView = false;
                        this.SearchTitle = response.cat;
                        this.SearchData = response.data;
                    }
                    loading.dismiss();
                });
            }
            else {
                this.loadView = false;
                this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                    this.getTypeStore(response.data.Categorys);
                    loading.dismiss();
                });
            }
        });
    }
    getTypeStore(List_type) {
        this.fk_items = []; // Limpiamos
        List_type.forEach(element => {
            if (element.status == 0) {
                this.fk_items.push({ 'id': element.id, 'Name': element.name, 'Img': element.img });
            }
        });
        this.loadBody = true;
    }
    SearchColCategory(Cat) {
        this.loadData(localStorage.getItem('city_id') + "?ss=ss", Cat);
    }
    itemPage(storeData) {
        if (storeData.open) {
            if (storeData.max_distance == 1) {
                localStorage.setItem('menu_item', JSON.stringify(storeData));
                this.nav.navigateForward('/item');
            }
        }
    }
};
CategorysPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
CategorysPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorys',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categorys.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorys/categorys.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categorys.page.scss */ "./src/app/categorys/categorys.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], CategorysPage);



/***/ })

}]);
//# sourceMappingURL=categorys-categorys-module-es2015.js.map