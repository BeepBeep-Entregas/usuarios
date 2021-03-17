(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"white\">\r\n  <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title style=\"font-size:18px;\">Menú</ion-title>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  mode=\"ios\" >\r\n\r\n\r\n<div mode=\"ios\">\r\n  <ion-slides pager=\"true\" autoplay=\"3000\">\r\n\r\n    <ion-slide *ngFor=\"let pics of data.images\">\r\n      <img src=\"{{ pics.img }}\" style=\"height: 200px;\">\r\n    </ion-slide>\r\n</ion-slides>\r\n\r\n  <ion-card-header>\r\n    <ion-card-title>{{ data.title }} <ion-badge color=\"primary\" style=\"float: right\">{{ data.rating }}<br></ion-badge></ion-card-title>\r\n    <ion-card-subtitle>{{ data.type }}</ion-card-subtitle>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-list lines=\"none\">\r\n      <ion-item text-wrap>\r\n        <ion-label>{{ data.address }}</ion-label>\r\n        <ion-icon name=\"pin\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item text-wrap>\r\n        <ion-label><a href=\"tel:{{ data.phone }}\">{{ data.phone }}</a></ion-label>\r\n        <ion-icon name=\"call\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Costo por persona : {{ data.currency }}{{ data.person_cost }}</ion-label>\r\n        <ion-icon name=\"cash\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Giro : {{ data.type }}</ion-label>\r\n        <ion-icon name=\"time\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      </ion-item>\r\n      <!-- \r\n      <ion-item>\r\n        <ion-label>{{ text.info_person }} : {{ data.currency }}{{ data.person_cost }}</ion-label>\r\n        <ion-icon name=\"cash\" slot=\"start\" color=\"danger\"></ion-icon>\r\n      </ion-item> -->\r\n\r\n      <ion-item>\r\n        <ion-label>{{ text.info_d_time }} : {{ data.delivery_time }}</ion-label>\r\n        <ion-icon name=\"cube\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n  </ion-card-content>\r\n\r\n</div>\r\n\r\n<span *ngIf=\"data.ratings.length > 0\">\r\n\r\n<h3 style=\"padding: 0px 18px\">{{ text.info_rating_title }}</h3>\r\n\r\n<ion-card mode=\"ios\" *ngFor=\"let rate of data.ratings\">\r\n\r\n<ion-card-header>\r\n<ion-card-subtitle>{{ rate.user }} <small style=\"float: right\">{{ rate.date }}</small>\r\n\r\n<ion-row *ngIf=\"rate.star == 1\">\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"rate.star == 2\">\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"rate.star == 3\">\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"rate.star == 4\">\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"rate.star == 5\">\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n</ion-card-subtitle>\r\n</ion-card-header>\r\n\r\n<ion-card-content>\r\n\r\n{{ rate.comment }}\r\n\r\n</ion-card-content>\r\n</ion-card>\r\n\r\n</span>\r\n\r\n<div class=\"viewPic\" *ngIf=\"ViewPic == true\">\r\n  <ion-label (click)=\"closevp()\">\r\n      close\r\n  </ion-label>\r\n\r\n  <img src=\"{{Pic}}\">\r\n\r\n</div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/info/info.module.ts":
  /*!*************************************!*\
    !*** ./src/app/info/info.module.ts ***!
    \*************************************/

  /*! exports provided: InfoPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPageModule", function () {
      return InfoPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./info.page */
    "./src/app/info/info.page.ts");

    const routes = [{
      path: '',
      component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
    }];
    let InfoPageModule = class InfoPageModule {};
    InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })], InfoPageModule);
    /***/
  },

  /***/
  "./src/app/info/info.page.scss":
  /*!*************************************!*\
    !*** ./src/app/info/info.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item ion-label {\n  font-size: 14px !important;\n}\n\n.viewPic {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n}\n\n.viewPic ion-label {\n  margin: 10px;\n  padding: 8px 12px;\n  border: 1px solid #fff;\n  float: right;\n  color: #fff;\n}\n\n.viewPic img {\n  position: absolute;\n  top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9DOlxcaW9uaWNcXGJlZXBiZWVwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcaW5mb1xcaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQywwQkFBQTtBQ0FEOztBRElBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFBTyxPQUFBO0VBQ1AsV0FBQTtFQUFZLGFBQUE7RUFDWixvQ0FBQTtFQUNBLGFBQUE7QUNDRDs7QURFQztFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIGlvbi1sYWJlbFxyXG57XHJcblx0Zm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi52aWV3UGljIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO2xlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcblxyXG5cclxuXHRpb24tbGFiZWwge1xyXG5cdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0cGFkZGluZzogOHB4IDEycHg7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcblx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdGltZyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDc1cHg7XHJcblx0XHRcclxuXHR9XHJcbn0iLCJpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnZpZXdQaWMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi52aWV3UGljIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNmZmY7XG59XG4udmlld1BpYyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/info/info.page.ts":
  /*!***********************************!*\
    !*** ./src/app/info/info.page.ts ***!
    \***********************************/

  /*! exports provided: InfoPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPage", function () {
      return InfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let InfoPage = class InfoPage {
      constructor() {
        this.ViewPic = false;
        this.data = JSON.parse(localStorage.getItem('menu_item'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {}

      Viewpic(Pic) {
        this.Pic = Pic;
        this.ViewPic = true;
      }

      closevp() {
        this.ViewPic = false;
      }

    };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info.page.scss */
      "./src/app/info/info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InfoPage);
    /***/
  }
}]);
//# sourceMappingURL=info-info-module-es5.js.map