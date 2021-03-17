(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    &nbsp;<ion-icon slot=\"start\" name=\"arrow-back\" routerLink=\"/cart\" routerDirection=\"back\"></ion-icon> \r\n  </ion-buttons>\r\n    <ion-title>\r\n      \r\n      Pagar</ion-title>\r\n      \r\n  <ion-buttons slot=\"end\" *ngIf=\"data\">{{ total_amount | currency }} &nbsp;</ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"data\">\r\n\r\n<ion-card mode=\"ios\">\r\n\r\n<ion-card-header>\r\n\r\n<ion-card-title>Seleccionar tipo de orden</ion-card-title>\r\n\r\n</ion-card-header>\r\n\r\n<ion-card-content>\r\n\r\n<ion-list>\r\n\r\n\r\n<ion-item *ngIf=\"delivery_type == 0\">\r\n    <ion-label>Este comercio no tiene servicio a domicilio</ion-label>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"delivery_type == 1\">\r\n<ion-label>Entrega a domicilio</ion-label>\r\n<ion-radio slot=\"start\" value=\"1\" (ionSelect)=\"setType(1)\" [checked]=\"otype == 1\"></ion-radio>\r\n</ion-item>\r\n\r\n<!-- <ion-item>\r\n<ion-label>Recoger en tienda (No se cobrará envío)</ion-label>\r\n<ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"setType(2)\" [checked]=\"otype == 2\"></ion-radio>\r\n</ion-item> -->\r\n\r\n</ion-list>\r\n\r\n</ion-card-content>\r\n\r\n</ion-card>\r\n\r\n<ion-card mode=\"ios\">\r\n\r\n  <ion-card-header>\r\n\r\n  <ion-card-title>\r\n    Metodo de pago\r\n  </ion-card-title>\r\n\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n  <ion-item style=\"font-size: 13px\">\r\n    <ion-label><img src=\"https://image.flaticon.com/icons/svg/760/760503.svg\" style=\"width:30px\"> Pagar en efectivo</ion-label>\r\n    <ion-radio slot=\"start\" value=\"1\" (ionSelect)=\"setPayment(1)\" [checked]=\"payment == 1\"></ion-radio>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item style=\"font-size: 13px\" *ngIf=\"paypal_id\">\r\n  <ion-label><img src=\"assets/paypal.png\" style=\"width: 90px\"> <span style=\"margin-top: -40px\">Pay Via Paypal</span></ion-label>\r\n  <ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"setPayment(2)\" [checked]=\"payment == 2\"></ion-radio>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item style=\"font-size: 13px\" *ngIf=\"stripe_id\">\r\n    <ion-label><img src=\"assets/stripe.png\" style=\"width: 150px\"> <span style=\"margin-top: -40px\">Pay Via Stripe</span></ion-label>\r\n    <ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"setPayment(3)\" [checked]=\"payment == 3\"></ion-radio>\r\n  </ion-item>\r\n  \r\n\r\n  <div *ngIf=\"stripeView\">\r\n\r\n    <p>Proporcione los siguientes detalles</p>\r\n    \r\n    <ion-row>\r\n    \r\n    <ion-col size=\"12\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Card Number</ion-label>\r\n      <ion-input type=\"tel\" [(ngModel)]=\"card_no\" name=\"card_no\"></ion-input>\r\n    </ion-item>\r\n    </ion-col>\r\n    \r\n    <ion-col size=\"6\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Exp Month</ion-label>\r\n      <ion-input type=\"tel\" [(ngModel)]=\"exp_month\" name=\"exp_month\"></ion-input>\r\n    </ion-item>\r\n    </ion-col>\r\n    \r\n    <ion-col size=\"6\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Exp Year</ion-label>\r\n      <ion-input type=\"tel\" [(ngModel)]=\"exp_year\" name=\"exp_year\"></ion-input>\r\n    </ion-item>\r\n    </ion-col>\r\n    \r\n    <ion-col size=\"12\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">CVV</ion-label>\r\n      <ion-input type=\"tel\" [(ngModel)]=\"cvv\" name=\"cvv\"></ion-input>\r\n    </ion-item>\r\n    </ion-col>\r\n    \r\n    </ion-row>\r\n    \r\n  </div>\r\n  </ion-card-content>\r\n\r\n</ion-card>\r\n\r\n\r\n<div class=\"ion-padding\">\r\n\r\n<ion-item>\r\n<ion-textarea placeholder=\"Agrega Cualquier instrucción para la comida ... por ejemplo, extra picante\" [(ngModel)]=\"notes\" name=\"notes\"></ion-textarea>\r\n</ion-item>\r\n<br>\r\n<ion-button expand=\"block\" mode=\"ios\" type=\"button\" [disabled]=\"!formVal()\" (click)=\"makeOrder()\">Confirmar orden</ion-button>\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.module.ts ***!
    \*********************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
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


    var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/checkout/checkout.page.ts");

    const routes = [{
      path: '',
      component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }];
    let CheckoutPageModule = class CheckoutPageModule {};
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })], CheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/checkout/checkout.page.ts ***!
    \*******************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/ngx/index.js");

    let CheckoutPage = class CheckoutPage {
      constructor(server, toastController, loadingController, nav, payPal, stripe) {
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.payPal = payPal;
        this.stripe = stripe;
        this.stripeView = false;
        this.otype = 1;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.address = localStorage.getItem('address_id');
        this.admin = JSON.parse(localStorage.getItem('admin'));
      }

      ngOnInit() {}

      ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
          this.nav.navigateRoot('/login');
          this.presentToast("Please login for continue.");
        } else {
          this.loadData();
        }
      }

      setType(id) {
        if (id == 2) {
          this.total_amount = Number(this.total_amount) - Number(this.delivery_charges);
          this.delivery_status = false;
        } else {
          if (this.delivery_status == false) {
            this.total_amount = Number(this.total_amount) + Number(this.delivery_charges);
          }
        }

        this.otype = id;
        this.payment = false;
        this.stripeView = false;
      }

      formVal() {
        if (this.otype == 1) {
          if (!this.address || !this.payment) {
            return false;
          } else {
            return true;
          }
        } else {
          if (!this.payment) {
            return false;
          } else {
            return true;
          }
        }
      }

      setPayment(id) {
        this.payment = id;

        if (id == 3) {
          this.stripeView = true;
        } else {
          this.stripeView = false;
        }
      }

      loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Espere porfavor...',
            mode: 'ios'
          });
          yield loading.present();
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            var store_id = response.data.data[0].store_id;
            this.server.getDeliveryType(store_id).subscribe(data => {
              this.delivery_type = data[0][0].service_del;

              if (this.delivery_type == 0) {
                this.otype = 2;
              }
            }); // localStorage.getItem('user_id')

            this.server.getAddress(localStorage.getItem('user_id') + "?cart_no=" + localStorage.getItem('cart_no') + "&store=" + store_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
              this.data = response.data;
              console.log(this.data);

              if (response.data.address.length > 0) {// this.address      = response.data.address[0].id; // Marcamos la primer opcion que tenga
              } else {
                this.nav.navigateRoot('/address');
              }

              this.total_amount = response.data.total;
              this.delivery_charges = response.data.Comercio.delivery_charges_value;

              if (response.data.Comercio.Cuenta_clave) {
                this.Cuenta_clave = response.data.Comercio.Cuenta_clave;
                this.banco_name = response.data.Comercio.banco_name;
              }

              if (this.admin.paypal_client_id) {
                this.paypal_id = this.admin.paypal_client_id;
              }

              if (this.admin.stripe_client_id) {
                this.stripe_id = this.admin.stripe_client_id;
              }
            });
            loading.dismiss();
          });
        });
      }

      makeOrder() {
        if (this.payment == 2) {
          this.payPaypal();
        } else if (this.payment == 3) {
          this.payWithStripe();
        } else {
          this.order();
        }
      }

      order() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Porfavor espere...',
            mode: 'ios'
          });
          yield loading.present();
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          var allData = {
            user_id: localStorage.getItem('user_id'),
            payment: this.payment,
            address: this.address,
            cart_no: localStorage.getItem('cart_no'),
            payment_id: this.payment_id,
            otype: this.otype,
            notes: this.notes,
            lat: lat,
            lng: lng
          };
          console.log(lat, lng);
          this.server.order(allData).subscribe(response => {
            if (response.data == 'Not_service') {
              loading.dismiss();
              this.presentToast('Sin servicio en la ubicación Seleccionada');
            } else {
              let LastStore = JSON.parse(localStorage.getItem('menu_item'));
              let dataLS = [];

              if (localStorage.getItem('LastStore')) {
                dataLS = JSON.parse(localStorage.getItem('LastStore'));
                let has = dataLS.find(id => id = LastStore.id);

                if (has.store_id != LastStore.id) {
                  dataLS.push({
                    store_id: LastStore.id
                  });
                }
              } else {
                dataLS.push({
                  store_id: LastStore.id
                });
              }

              localStorage.setItem('LastStore', JSON.stringify(dataLS));
              localStorage.setItem('order_data', JSON.stringify(response.data)); // Agregamos a ultimas ordenes

              this.nav.navigateRoot('/done');
              loading.dismiss();
            }
          });
        });
      }

      payPaypal() {
        this.payPal.init({
          PayPalEnvironmentProduction: this.paypal_id,
          PayPalEnvironmentSandbox: this.paypal_id
        }).then(() => {
          // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
          this.payPal.prepareToRender('PayPalEnvironmentProduction', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPalConfiguration"]({// Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
          })).then(() => {
            let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPalPayment"](this.total_amount, 'MXN', 'Description', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then(res => {
              this.payment_id = res.response.id;

              if (this.payment_id) {
                this.order();
              }
            }, () => {
              this.presentToast("Paypal Transaction Cancelled");
            });
          }, () => {
            this.presentToast("Error in configuration");
          });
        }, () => {
          // 
          this.presentToast("Error in initialization, maybe PayPal isn't supported");
        });
      }

      payWithStripe() {
        if (this.card_no.length > 10 && this.exp_month && this.exp_year && this.cvv) {
          this.stripe.setPublishableKey(this.stripe_id);
          let card = {
            number: this.card_no,
            expMonth: this.exp_month,
            expYear: this.exp_year,
            cvc: this.cvv
          };
          this.stripe.createCardToken(card).then(token => {
            this.makePayment(token.id);
          }).catch(error => {
            this.presentToast("Por favor ingrese detalles de pago válidos");
          });
        } else {
          this.presentToast("Por favor ingrese detalles de pago válidos");
        }
      }

      payWithTransfer() {
        this.presentToast("Una vez realizada la transferencia no te olvides de enviarle el ticket al comercio.");
        this.payment_id = 0;
        this.order();
      }

      makePayment(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Enviando Informacion...',
            mode: 'ios'
          });
          yield loading.present();
          this.server.makeStripePayment("?token=" + token + "&amount=" + this.total_amount).subscribe(response => {
            if (response.data == "done") {
              this.payment_id = response.id;

              if (this.payment_id) {
                this.order();
              }
            } else {
              this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.");
            }

            loading.dismiss();
          });
        });
      }

      presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 2000,
            position: 'bottom'
          });
          toast.present();
        });
      }

    };

    CheckoutPage.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPal"]
    }, {
      type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__["Stripe"]
    }];

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/checkout/checkout.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPal"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__["Stripe"]])], CheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=checkout-checkout-module-es5.js.map