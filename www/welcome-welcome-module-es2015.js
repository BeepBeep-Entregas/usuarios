(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n<!-- Slide Ini -->\r\n    <ion-slides class=\"welcome\" *ngIf=\"chargePage == 'sliderIni'\">\r\n        <ion-slide *ngFor=\"let welcome of data;let i = index\">\r\n            <img src=\"{{ welcome.img }}\"/>\r\n            <div [innerHTML]=\"welcome.title\"></div>\r\n            <span slot=\"end\" class=\"slideNext\"><i>Desliza</i> <b>> ></b></span>\r\n        </ion-slide>\r\n    </ion-slides>\r\n<!-- Slide Ini -->\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"chargePage == 'sliderIni'\">\r\n    <div class=\"logcast\" style=\"padding: 25px;text-align: center;\">\r\n        <ion-label color=\"medium\"  routerLink=\"/login\">Iniciar Sesión</ion-label>\r\n    \r\n        <ion-label color=\"medium\" routerLink=\"/signup\">Registrarse</ion-label>\r\n    </div>   \r\n</ion-footer>\r\n    \r\n    ");

/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.login {\n  text-align: center;\n}\n\n.welcome .swiper-slide {\n  display: block;\n  padding: 0 13px;\n}\n\nion-slide > h2 {\n  margin-top: 2.8rem;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 100%;\n  margin: 40px 0;\n}\n\nion-slide > p {\n  margin-top: 25px;\n  color: #444;\n  font-size: 12.5px;\n}\n\n.slideNext {\n  position: relative;\n  font-size: 14px;\n  color: #444;\n  padding: 6px 0;\n  border-radius: 25px;\n  font-family: \"Open Sans\", sans-serif;\n  cursor: pointer;\n}\n\n.slideNext > b {\n  position: absolute;\n  width: 50%;\n  top: 6px;\n  -webkit-animation: swing 0.9s ease-in-out;\n          animation: swing 0.9s ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.logcast > ion-label {\n  font-size: 14px;\n  margin: 10px;\n  position: relative;\n}\n\n.logcast > ion-label:nth-child(1)::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  width: 1px;\n  height: 100%;\n  margin-left: 8px;\n  background-color: #7c7c7c;\n}\n\n@-webkit-keyframes swing {\n  10% {\n    -webkit-transform: translateX(3px);\n    transform: translateX(3px);\n  }\n  25% {\n    -webkit-transform: translateX(-1.5px);\n    transform: translateX(-1.5px);\n  }\n  50% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n    transform: translateX(0px);\n  }\n}\n\n@keyframes swing {\n  10% {\n    -webkit-transform: translateX(3px);\n    transform: translateX(3px);\n  }\n  25% {\n    -webkit-transform: translateX(-1.5px);\n    transform: translateX(-1.5px);\n  }\n  50% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n    transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcaW9uaWNcXGJlZXBiZWVwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcd2VsY29tZVxcd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNBO0VBQ0Usb0NBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0Usa0JBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNoQ0Y7O0FEb0NBO0VBQ0Usa0JBQUE7QUNqQ0Y7O0FEbUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDaENGOztBRG1DQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDaENGOztBRG1DQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDaENGOztBRG1DQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNoQ0Y7O0FEb0NBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ2pDRjs7QURvQ0E7RUFFRTtJQUVBLGtDQUFBO0lBQ0EsMEJBQUE7RUNuQ0E7RURxQ0E7SUFFQSxxQ0FBQTtJQUNBLDZCQUFBO0VDcENBO0VEc0NBO0lBRUEsa0NBQUE7SUFDQSwwQkFBQTtFQ3JDQTtFRHVDQTtJQUVBLGtDQUFBO0lBQ0EsMEJBQUE7RUN0Q0E7QUFDRjs7QUR3Q0E7RUFFRTtJQUVBLGtDQUFBO0lBQ0EsMEJBQUE7RUN4Q0E7RUQwQ0E7SUFFQSxxQ0FBQTtJQUNBLDZCQUFBO0VDekNBO0VEMkNBO0lBRUEsa0NBQUE7SUFDQSwwQkFBQTtFQzFDQTtFRDRDQTtJQUVBLGtDQUFBO0lBQ0EsMEJBQUE7RUMzQ0E7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6cm9vdCB7XHJcbi8vICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuLy8gICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG4vLyB9XHJcbi8vIC5zd2lwZXItc2xpZGUge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tc2xpZGUgPiBpbWcge1xyXG4gIFxyXG4vLyB3aWR0aDo4MCU7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBwe1xyXG4gIFxyXG4vLyAgIHBhZGRpbmc6MTBweCAxMHB4O1xyXG4vLyAgIGZvbnQtc2l6ZToxMnB4O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuLy8gfVxyXG5cclxuLy8gIC5zd2lwZXItcGFnaW5hdGlvblxyXG4vLyAge1xyXG4vLyAgXHRmb250LXNpemU6IDIwcHg7XHJcbi8vICB9XHJcblxyXG4vLyAgLnN0YXJ0XHJcbi8vICB7XHJcbi8vICBcdHdpZHRoOiA4MCU7XHJcbi8vICBcdG1hcmdpbi1sZWZ0OiAxMCU7XHJcbi8vICBcdGJvcmRlci1yYWRpdXM6IDEwcHhcclxuLy8gIH1cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZWxjb21lIC5zd2lwZXItc2xpZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMTNweDtcclxuICBcclxufVxyXG5cclxuaW9uLXNsaWRlID4gaDIge1xyXG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcclxufVxyXG5pb24tc2xpZGUgPiBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDUwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSA+IHAge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgZm9udC1zaXplOiAxMi41cHg7XHJcbn1cclxuXHJcbi5zbGlkZU5leHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2xpZGVOZXh0ID4gYiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdG9wOiA2cHg7XHJcbiAgYW5pbWF0aW9uOiBzd2luZyAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4ubG9nY2FzdCA+IGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4ubG9nY2FzdCA+IGlvbi1sYWJlbDpudGgtY2hpbGQoMSk6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2M3YztcclxufSAgIFxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nXHJcbntcclxuICAxMCVcclxuICB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICB9XHJcbiAgMjUlXHJcbiAge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XHJcbiAgfVxyXG4gIDUwJVxyXG4gIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xyXG4gIH1cclxuICAxMDAlXHJcbiAge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3dpbmdcclxue1xyXG4gIDEwJVxyXG4gIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xyXG4gIH1cclxuICAyNSVcclxuICB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcclxuICB9XHJcbiAgNTAlXHJcbiAge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XHJcbiAgfVxyXG4gIDEwMCVcclxuICB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbiIsIioge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VsY29tZSAuc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTNweDtcbn1cblxuaW9uLXNsaWRlID4gaDIge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbmlvbi1zbGlkZSA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDQwcHggMDtcbn1cblxuaW9uLXNsaWRlID4gcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDEyLjVweDtcbn1cblxuLnNsaWRlTmV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ0NDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZU5leHQgPiBiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICB0b3A6IDZweDtcbiAgYW5pbWF0aW9uOiBzd2luZyAwLjlzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmxvZ2Nhc3QgPiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nY2FzdCA+IGlvbi1sYWJlbDpudGgtY2hpbGQoMSk6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2M3Yztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nIHtcbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICB9XG4gIDI1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZyB7XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgfVxuICAyNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let WelcomePage = class WelcomePage {
    constructor(server, loadingController, nav, menu) {
        this.server = server;
        this.loadingController = loadingController;
        this.nav = nav;
        this.menu = menu;
        this.slideOptsTwo = {
            slidesPerView: 1,
            loop: true,
            autoplay: false,
            pagination: {
                el: '.swiper-pagination',
            }
        };
        this.getStart = false;
        this.menu.enable(false);
    }
    ngOnInit() {
        this.loaingData();
    }
    loaingData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
                mode: 'md'
            });
            yield loading.present();
            if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
                this.nav.navigateRoot('/home');
            }
            this.server.welcome().subscribe((response) => {
                this.data = response.data;
                this.chargePage = 'sliderIni';
                this.loadpage = 'EmailIn';
                this.IniSes = false;
                loading.dismiss();
            });
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map