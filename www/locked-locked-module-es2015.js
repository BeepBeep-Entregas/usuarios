(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locked-locked-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locked/locked.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locked/locked.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <div style=\"margin-top: 25px;\">\r\n    <ion-card-header>\r\n      <ion-row>\r\n        <ion-col size=\"7\">\r\n          <img src=\"../../assets/locked.jpg\" alt=\"\">\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <h1 class=\"welcome_text\">\r\n            !Oops<br />\r\n            Cuenta Bloqueada\r\n          </h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <p style=\"color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;\">\r\n        Tu cuenta está bloqueada, por favor comunícate con soporte en: \r\n      </p>\r\n    </ion-card-header>\r\n      \r\n    <p align=\"center\" style=\"font-family: 'SF Pro Display';font-weight: 400;font-style: normal\"><a href=\"https://dash.beepbeepentregas.com/soporte\">Soporte Tecnico</a></p>\r\n  \r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/locked/locked.module.ts":
/*!*****************************************!*\
  !*** ./src/app/locked/locked.module.ts ***!
  \*****************************************/
/*! exports provided: LockedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedPageModule", function() { return LockedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _locked_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locked.page */ "./src/app/locked/locked.page.ts");







const routes = [
    {
        path: '',
        component: _locked_page__WEBPACK_IMPORTED_MODULE_6__["LockedPage"]
    }
];
let LockedPageModule = class LockedPageModule {
};
LockedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_locked_page__WEBPACK_IMPORTED_MODULE_6__["LockedPage"]]
    })
], LockedPageModule);



/***/ }),

/***/ "./src/app/locked/locked.page.scss":
/*!*****************************************!*\
  !*** ./src/app/locked/locked.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 700;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n  font-size: 22px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ja2VkL0M6XFxpb25pY1xcYmVlcGJlZXBcXHVzdWFyaW9zL3NyY1xcYXBwXFxsb2NrZWRcXGxvY2tlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvY2tlZC9sb2NrZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2NrZWQvbG9ja2VkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lX3RleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuIiwiLndlbGNvbWVfdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/locked/locked.page.ts":
/*!***************************************!*\
  !*** ./src/app/locked/locked.page.ts ***!
  \***************************************/
/*! exports provided: LockedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedPage", function() { return LockedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LockedPage = class LockedPage {
    constructor() { }
    ngOnInit() {
    }
};
LockedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locked',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locked.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locked/locked.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./locked.page.scss */ "./src/app/locked/locked.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LockedPage);



/***/ })

}]);
//# sourceMappingURL=locked-locked-module-es2015.js.map