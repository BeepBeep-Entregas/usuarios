(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\r\n  <ion-toolbar color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n<ion-back-button></ion-back-button>\r\n</ion-buttons>\r\n    <ion-title>\r\n      {{ text.profile_title }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"data\">\r\n\r\n<ion-card mode=\"ios\" class=\"welcome-card\">\r\n\r\n<ion-card-header>\r\n\r\n<ion-card-title>{{ text.profile_heading }}</ion-card-title>\r\n\r\n</ion-card-header>\r\n\r\n<ion-list lines=\"none\">\r\n<ion-list-header>\r\n<ion-label>{{ text.profile_welcome }} <br /><b>{{ data.name }}</b></ion-label>\r\n</ion-list-header>\r\n\r\n<ion-item routerLink=\"/order\" routerDirection=\"forward\">\r\n<ion-icon slot=\"start\" color=\"medium\" name=\"cart\"></ion-icon>\r\n<ion-label>{{ text.profile_order_history }}</ion-label>\r\n</ion-item>\r\n\r\n<ion-item (click)=\"takeAction(1)\">\r\n<ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\r\n<ion-label>{{ text.profile_setting }}</ion-label>\r\n</ion-item>\r\n<ion-item (click)=\"logout()\">\r\n<ion-icon slot=\"start\" color=\"medium\" name=\"log-out\"></ion-icon>\r\n<ion-label>{{ text.profile_logout }}</ion-label>\r\n</ion-item>\r\n</ion-list>\r\n\r\n</ion-card>\r\n\r\n<!--Personal Information-->\r\n\r\n<ion-card mode=\"ios\" *ngIf=\"action == 1\">\r\n<form #form=\"ngForm\" (ngSubmit)=\"update(form.value)\">\r\n\r\n<ion-card-header>\r\n\r\n<ion-card-subtitle>Actualice la configuración de su cuenta</ion-card-subtitle>\r\n\r\n</ion-card-header>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Tu nombre</ion-label>\r\n  <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"data.name\" required></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Email</ion-label>\r\n  <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"data.email\" required></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Telefono</ion-label>\r\n  <ion-input type=\"tel\" name=\"phone\" [(ngModel)]=\"data.phone\" required></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Cambia la contraseña</ion-label>\r\n  <ion-input type=\"password\" name=\"password\" ngModel></ion-input>\r\n</ion-item>\r\n<br>\r\n\r\n<ion-button expand=\"block\" mode=\"ios\" type=\"submit\" [disabled]=\"!form\" style=\"width: 90%;margin-left: 5%\">Actualizar</ion-button>\r\n</form>\r\n\r\n</ion-card>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"text\">\r\n  <ion-toolbar mode=\"ios\">\r\n  \r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      \r\n     <ion-tab-button routerLink=\"/home\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <ion-label>{{ text.home_footer_name }}</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button routerLink=\"/home\">\r\n        <ion-icon name=\"pin\"></ion-icon>\r\n        <ion-label>{{ text.home_nearest }}</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\r\n        <ion-icon name=\"basket\"></ion-icon>\r\n        <ion-label>{{ text.home_cart }}</ion-label>\r\n        <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n  \r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/account/profile/profile.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/profile/profile.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/account/profile/profile.page.ts");

    const routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }];
    let ProfilePageModule = class ProfilePageModule {};
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/account/profile/profile.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/account/profile/profile.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/profile/profile.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/account/profile/profile.page.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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

    let ProfilePage = class ProfilePage {
      constructor(route, server, toastController, nav, loadingController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {}

      ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
          this.nav.navigateRoot('/login');
          this.presentToast("Please login for access your profile");
        } else {
          this.loadData();
        }
      }

      takeAction(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.action = type;
        });
      }

      loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Porfavor Espere...'
          });
          yield loading.present();
          this.server.userInfo(localStorage.getItem('user_id')).subscribe(response => {
            this.data = response.data;
            console.log(response.data);
            loading.dismiss();
          });
        });
      }

      update(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Porfavor Espere...'
          });
          yield loading.present();
          this.server.updateInfo(data, localStorage.getItem('user_id')).subscribe(response => {
            if (response.msg == "done") {
              this.action = 0;
              this.data = response.data;
              this.presentToast("Updated Successfully");
            } else {
              this.presentToast(response.error);
            }

            loading.dismiss();
          });
        });
      }

      presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 3000,
            position: 'top',
            mode: 'ios',
            color: 'dark'
          });
          toast.present();
        });
      }

      logout() {
        localStorage.setItem('user_id', null);
        this.nav.navigateForward('/login');
      }

    };

    ProfilePage.ctorParameters = () => [{
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

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfilePage.prototype, "content", void 0);
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/account/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=account-profile-profile-module-es5.js.map