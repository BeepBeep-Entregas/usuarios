(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-rate-rate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/rate/rate.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/rate/rate.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title *ngIf=\"type == 'store'\">\r\n      Califica al Comercio\r\n    </ion-title>\r\n    \r\n    <ion-title *ngIf=\"type == 'staff'\">\r\n      Califica al Repartidor\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"giveRating(form.value)\">\r\n\r\n<ion-list>\r\n\r\n<small>{{ text.rating_heading }}</small>\r\n<br><br>\r\n\r\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 0\">\r\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 1\">\r\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 2\">\r\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 3\">\r\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 4\">\r\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 5\">\r\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star\"></ion-icon></ion-col>\r\n</ion-row>\r\n\r\n<ion-item *ngIf=\"type == 'staff'\">\r\n  <ion-label>¿El repartidor realizó el proceso de sanitización del producto?</ion-label>\r\n  <ion-select placeholder=\"Select\" ngModel name=\"sanit_process\" required>\r\n    <ion-select-option value=\"1\">SI</ion-select-option>\r\n    <ion-select-option value=\"0\">NO</ion-select-option>\r\n  </ion-select>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"type == 'staff'\">\r\n  <ion-label>¿El producto llegó en perfecto estado?</ion-label>\r\n  <ion-select placeholder=\"Select\" ngModel name=\"status_prod\" required>\r\n    <ion-select-option value=\"1\">SI</ion-select-option>\r\n    <ion-select-option value=\"0\">NO</ion-select-option>\r\n  </ion-select>\r\n</ion-item>\r\n\r\n<br><br>\r\n<ion-item>\r\n  <ion-textarea ngModel name=\"comment\" placeholder=\"{{ text.rating_msg }}\"></ion-textarea>\r\n</ion-item>\r\n\r\n\r\n</ion-list>\r\n<br>\r\n<ion-button color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\" mode=\"ios\" size=\"large\">{{ text.rating_button }}</ion-button>\r\n\r\n</form>\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/account/rate/rate.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/account/rate/rate.module.ts ***!
    \*********************************************/

  /*! exports provided: RatePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatePageModule", function () {
      return RatePageModule;
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


    var _rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rate.page */
    "./src/app/account/rate/rate.page.ts");

    const routes = [{
      path: '',
      component: _rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]
    }];
    let RatePageModule = class RatePageModule {};
    RatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]]
    })], RatePageModule);
    /***/
  },

  /***/
  "./src/app/account/rate/rate.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/account/rate/rate.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmF0ZS9yYXRlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/rate/rate.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/rate/rate.page.ts ***!
    \*******************************************/

  /*! exports provided: RatePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatePage", function () {
      return RatePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let RatePage = class RatePage {
      constructor(route, server, toastController, nav, loadingController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.star = 0;
        this.oid = this.route.snapshot.paramMap.get('id');
        this.type = this.route.snapshot.paramMap.get('type');
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {}

      setStar(val) {
        this.star = val;
      }

      giveRating(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.star == 0) {
            this.presentToast('Seleccione cualquier calificación para continuar.');
          } else {
            const loading = yield this.loadingController.create({
              message: 'Enviando Calificación',
              duration: 3000
            });
            yield loading.present();
            var allData = {
              comment: data.comment,
              user_id: localStorage.getItem('user_id'),
              star: this.star,
              oid: this.oid,
              type: this.type,
              sanit_process: data.sanit_process,
              status_prod: data.status_prod
            };
            this.server.rating(allData).subscribe(response => {
              this.presentToast('¡Gracias! Calificación enviada con éxito.');
              this.nav.navigateBack('/order');
              loading.dismiss();
            });
          }
        });
      }

      presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        });
      }

    };

    RatePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }];

    RatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/rate/rate.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate.page.scss */
      "./src/app/account/rate/rate.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], RatePage);
    /***/
  }
}]);
//# sourceMappingURL=account-rate-rate-module-es5.js.map