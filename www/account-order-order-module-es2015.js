(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-order-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n<ion-back-button></ion-back-button>\r\n</ion-buttons>\r\n    <ion-title>\r\n      {{ text.history_title }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"data\">\r\n\r\n<ion-card class=\"welcome-card\" *ngFor=\"let order of data\" mode=\"ios\">\r\n\r\n<ion-card-header>\r\n\r\n<ion-card-subtitle>{{ order.store.name }} (#{{order.id }}) <ion-badge color=\"primary\" style=\"float:right\">{{ order.total | currency}}</ion-badge></ion-card-subtitle>\r\n\r\n<br>\r\n<ion-row>\r\n\r\n<ion-col size=\"5\"><b> {{ text.history_date }}</b></ion-col>\r\n<ion-col size=\"7\">{{ order.date }}</ion-col>\r\n\r\n</ion-row>\r\n\r\n<ion-row>\r\n\r\n<ion-col size=\"5\"><b> {{ text.history_status }}</b></ion-col>\r\n<ion-col size=\"7\">{{ order.status }}</ion-col>\r\n\r\n</ion-row>\r\n\r\n<ion-row>\r\n\r\n<ion-col size=\"6\"><b> {{ text.history_item }}</b></ion-col>\r\n<ion-col size=\"3\"><b> {{ text.history_qty }}</b></ion-col>\r\n<ion-col size=\"3\"><b> {{ text.history_price }}</b></ion-col>\r\n\r\n</ion-row>\r\n\r\n<span *ngFor=\"let item of order.items\">\r\n<ion-row>\r\n\r\n<ion-col size=\"6\">{{ item.item }} (<small>{{ item.type }}</small>)</ion-col>\r\n<ion-col size=\"3\">{{ item.qty }}</ion-col>\r\n<ion-col size=\"3\">{{ order.currency }}{{ item.price * item.qty }}</ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngFor=\"let addon of item.addon\">\r\n\r\n<ion-col size=\"6\">{{ addon.addon }}</ion-col>\r\n<ion-col size=\"3\">{{ addon.qty }}</ion-col>\r\n<ion-col size=\"3\">{{ order.currency }}{{ addon.price  }}</ion-col>\r\n\r\n</ion-row>\r\n</span>\r\n\r\n<br>\r\n<ion-button *ngIf=\"order.hasRating == 0 || order.ratStore == 0\" fill=\"outline\" size=\"small\" color=\"primary\" routerLink=\"/rate/{{ order.id }}/store\" routerDirection=\"forward\">{{ text.history_rating }}</ion-button>\r\n<ion-button *ngIf=\"order.st == 0 && order.pay == 1\" fill=\"outline\" size=\"small\" style=\"float: right\" (click)=\"cancelOrder(order.id)\">{{ text.history_cancel }}</ion-button>\r\n\r\n</ion-card-header>\r\n\r\n</ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"text\">\r\n  <ion-toolbar mode=\"ios\">\r\n  \r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      \r\n     <ion-tab-button routerLink=\"/home\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <ion-label>{{ text.home_footer_name }}</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button routerLink=\"/home\">\r\n        <ion-icon name=\"pin\"></ion-icon>\r\n        <ion-label>{{ text.home_nearest }}</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\r\n        <ion-icon name=\"basket\"></ion-icon>\r\n        <ion-label>{{ text.home_cart }}</ion-label>\r\n        <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n        <ion-label>{{ text.home_profile }}</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n  \r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/account/order/order.module.ts":
/*!***********************************************!*\
  !*** ./src/app/account/order/order.module.ts ***!
  \***********************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/account/order/order.page.ts");







const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "./src/app/account/order/order.page.scss":
/*!***********************************************!*\
  !*** ./src/app/account/order/order.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  font-size: 12px;\n  border-top: 1px solid #f7f7f7;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcmRlci9DOlxcaW9uaWNcXGJlZXBiZWVwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcYWNjb3VudFxcb3JkZXJcXG9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9vcmRlci9vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9vcmRlci9vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93XHJcbntcclxuXHRmb250LXNpemU6MTJweDtcclxuXHRib3JkZXItdG9wOjFweCBzb2xpZCAjZjdmN2Y3O1xyXG5cdHBhZGRpbmctdG9wOjVweDtcclxufSIsImlvbi1yb3cge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjdmN2Y3O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/order/order.page.ts":
/*!*********************************************!*\
  !*** ./src/app/account/order/order.page.ts ***!
  \*********************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let OrderPage = class OrderPage {
    constructor(route, server, toastController, nav, loadingController, alertController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
            this.nav.navigateRoot('/login');
            this.presentToast("Inicia sesión para acceder a tu perfil");
        }
        else {
            this.loadData();
        }
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
            });
            yield loading.present();
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            this.server.myOrder(localStorage.getItem('user_id') + "?lid=" + lid).subscribe((response) => {
                console.log(response);
                this.data = response.data;
                loading.dismiss();
            });
        });
    }
    rate() {
        this.nav.navigateForward('/login');
    }
    cancelOrder(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancelar orden!',
                message: '¿Estás seguro? ¿Quieres cancelar este pedido?',
                mode: 'ios',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'SI',
                        handler: () => {
                            this.cnc(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cnc(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
            });
            yield loading.present();
            this.server.cancelOrder(id, localStorage.getItem('user_id') + "?lid=" + localStorage.getItem('lid')).subscribe((response) => {
                this.data = response.data;
                this.presentToast("Pedido cancelado con éxito.");
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
};
OrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.page.scss */ "./src/app/account/order/order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], OrderPage);



/***/ })

}]);
//# sourceMappingURL=account-order-order-module-es2015.js.map