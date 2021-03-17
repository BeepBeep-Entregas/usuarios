(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" transparent>\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\" style=\"margin-top: 15px;\">\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <h1 class=\"welcome_text\">\r\n       {{text.login_title}}\r\n      </h1>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col><p style=\"color: rgb(82, 82, 82);font-family: 'SF Pro Display';font-weight: 400;\">Inicia Sesión para continuar</p>    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\" style=\"margin-top: 10.5px !important;\">\r\n     <span>Email</span>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n      <ion-input type=\"email\" clearInput  [(ngModel)]=\"email\" required name=\"email\" placeholder=\"example@example.com\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\" style=\"margin-top: 10.5px !important;\">\r\n     <span>Password</span>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n      <ion-input type=\"password\" clearInput [(ngModel)]=\"password\" required name=\"password\" placeholder=\"*********\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <br />\r\n  <ion-row>\r\n    <ion-col size=\"12\" >\r\n      <a routerLink=\"/forgot\" routerDirection=\"forward\" style=\"color: rgb(160, 23, 23) !important;font-family: 'SF Pro Display';font-weight: 400;float: right;\">\r\n        {{text.login_forgot_password}}\r\n      </a>\r\n    </ion-col>\r\n  </ion-row>\r\n  <br />\r\n  <div class=\"row\">\r\n    <ion-button color=\"primary\" expand=\"block\" type=\"submit\" style=\"font-family: 'SF Pro Display';font-weight: 400;position: relative;text-align: center;\">\r\n      <ion-icon name=\"log-in\" style=\"position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;\"></ion-icon> <span class=\"capitalize\" style=\"font-size: 14px;\">{{text.login_button}}</span>\r\n    </ion-button>\r\n  </div>\r\n</form>\r\n\r\n<ion-row>\r\n  <ion-col>\r\n    <div class=\"row\" style=\"border-top: 1px solid #cecece;padding-top: 12px;\">\r\n      <ion-button expand=\"block\" (click)=\"fbLogin()\" style=\"--background: #3b5998 !important;font-family: 'SF Pro Display';font-weight: 400;position: relative;\">\r\n        <ion-icon name=\"logo-facebook\" style=\"position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;\"></ion-icon> <span class=\"capitalize\" style=\"position: absolute;left: 75px;font-size: 14px;\">Entrar con Facebook</span>\r\n      </ion-button>\r\n    </div>\r\n  </ion-col>  \r\n</ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"padding: 15px;text-align: center;\" *ngIf=\"isKeyboardHide\">\r\n  <ion-label color=\"medium\"  mode=\"ios\" routerLink=\"/signup\" routerDirection=\"forward\">No tienes una cuenta? <b>Registrate</b></ion-label> \r\n</ion-footer>");

/***/ }),

/***/ "./src/app/account/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/account/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/account/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/account/login/login.page.scss":
/*!***********************************************!*\
  !*** ./src/app/account/login/login.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 900;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9DOlxcaW9uaWNcXGJlZXBiZWVwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcYWNjb3VudFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLndlbGNvbWVfdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi53ZWxjb21lX3RleHQge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/login/login.page.ts":
/*!*********************************************!*\
  !*** ./src/app/account/login/login.page.ts ***!
  \*********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");






// Facebook

let LoginPage = class LoginPage {
    constructor(route, server, toastController, keyboard, nav, loadingController, events, fb) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.fb = fb;
        this.email = "";
        this.password = "";
        this.isLoggedIn = false;
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
        this.isKeyboardHide = true;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.keyboard.onKeyboardWillShow().subscribe(() => {
            this.isKeyboardHide = false;
            // console.log('SHOWK');
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
            this.isKeyboardHide = true;
            // console.log('HIDEK');
        });
    }
    login(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor Espere...',
            });
            yield loading.present();
            this.server.login(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg);
                    // this.nav.navigateRoot('signup');  
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.nav.navigateRoot('city');
                }
                loading.dismiss();
            });
        });
    }
    loginfb(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor Espere...',
            });
            yield loading.present();
            this.server.loginfb(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg);
                    // this.nav.navigateRoot('signup');  
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.nav.navigateRoot('city');
                }
                loading.dismiss();
            });
        });
    }
    fbLogin() {
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            if (res.status == 'connected') {
                // Usuarios Logeado...
                let url = "https://graph.facebook.com/me?fields=id,email&access_token=" + res.authResponse.accessToken;
                this.server.signupWithfb(url).subscribe(data => {
                    this.loginfb({
                        email: data['email'],
                        password: data['id']
                    });
                });
            }
        }).catch(e => {
            alert("Error logging into Facebook " + e);
        });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
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
    goBck() {
        this.nav.navigateRoot('welcome');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/account/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=account-login-login-module-es2015.js.map