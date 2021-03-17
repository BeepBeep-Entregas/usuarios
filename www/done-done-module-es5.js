(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["done-done-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\r\n<ion-toolbar color=\"primary\">\r\n<ion-buttons slot=\"start\" routerLink=\"/home\" routerDirection=\"root\">\r\n    <ion-icon name=\"home\" style=\"font-size: 29px\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n<ion-buttons slot=\"end\"><ion-button fill=\"outline\" mode=\"ios\" size=\"small\" routerLink=\"/order\" routerDirection=\"forward\">View Order Detail</ion-button></ion-buttons>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n<div style=\"width:100%;background-color: #FF5500;height: 80px;color:white\">\r\n&nbsp;\r\n\r\n</div>\r\n\r\n<ion-card mode=\"ios\" style=\"margin-top: -15%;background-color: white;width: 98%;margin-left: 1%\" class=\"welcome-card\">\r\n\r\n<ion-card-header>\r\n\r\n<ion-card-title>{{ text.confirm_title }}</ion-card-title>\r\n<ion-card-subtitle><ion-icon name=\"restaurant\"></ion-icon> {{ data.store }}</ion-card-subtitle>\r\n\r\n</ion-card-header>\r\n\r\n</ion-card>\r\n\r\n<div class=\"ion-padding\">\r\n\r\n<p style=\"font-size: 12px\" *ngIf=\"status == 0\">Pedido realizado con éxito. Esperando confirmación del restaurante</p>\r\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 1\">Orden confirmada. Tu comida está siendo preparada.</p>\r\n<p style=\"font-size: 12px\" *ngIf=\"status == 1.5 || status == 1.2 && type == 1\">Buscando Socio Repartidor</p>\r\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 2\">Orden confirmada. Tu comida está siendo preparada, Se te notificará cuando esté lista</p>\r\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 7\">Tu orden está lista para recoger</p>\r\n<p style=\"font-size: 12px\" *ngIf=\"status == 3\">Se ha asignado un repartidor a tu pedido.</p>\r\n<p style=\"font-size: 12px\" *ngIf=\"status == 4\">Tu Orden esta en ruta!!</p>\r\n\r\n<div class=\"map-wrapper\" *ngIf=\"status == 4\">\r\n\r\n<div #map id=\"map\"></div>\r\n<p>{{address}}</p>\r\n</div>\r\n  \r\n<ion-progress-bar value=\"{{ progress }}\" buffer=\"0.5\"></ion-progress-bar>\r\n</div>\r\n\r\n<ion-card mode=\"ios\" class=\"welcome-card\" style=\"width: 98%;margin-left: 1%\">\r\n\r\n<ion-card-header>\r\n\r\n<ion-card-title>Order Status</ion-card-title>\r\n\r\n</ion-card-header>\r\n\r\n<ion-list lines=\"none\">\r\n\r\n<ion-item routerLink=\"/order\" routerDirection=\"forward\">\r\n    <ion-icon slot=\"start\" color=\"primary\" name=\"cart\"></ion-icon>\r\n    <ion-label>Pedido realizado</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n    <ion-icon slot=\"start\" [color]=\"getColor(1)\" name=\"checkmark-circle\"></ion-icon>\r\n    <ion-label [class.light]=\"status < 1\">Orden confirmada</ion-label>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"type == 1 && status == 1.2\">\r\n    <ion-icon slot=\"start\" [color]=\"getColor(1.2)\" name=\"search\"></ion-icon>\r\n    <ion-label [class.light]=\"status < 1.2\">Buscando Socio Repartidor</ion-label>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"type == 1 && status == 1.5\">\r\n    <ion-icon slot=\"start\" [color]=\"getColor(1.5)\" name=\"search\"></ion-icon>\r\n    <ion-label [class.light]=\"status < 1.5\">Buscando Socio Repartidor</ion-label>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"type == 1\">\r\n    <ion-icon slot=\"start\" [color]=\"getColor(3)\" name=\"link\"></ion-icon>\r\n    <ion-label [class.light]=\"status < 3\">Repartidor asignado</ion-label>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"type == 1\">\r\n    <ion-icon slot=\"start\" [color]=\"getColor(4)\" name=\"bus\"></ion-icon>\r\n    <ion-label [class.light]=\"status < 4\">Orden recogida</ion-label>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"type != 1\">\r\n    <ion-icon slot=\"start\" [color]=\"getColor(7)\" name=\"walk\"></ion-icon>\r\n    <ion-label [class.light]=\"type < 7\">Listo para  recoger</ion-label>\r\n</ion-item>\r\n\r\n\r\n</ion-list>\r\n\r\n</ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/done/done.module.ts":
  /*!*************************************!*\
    !*** ./src/app/done/done.module.ts ***!
    \*************************************/

  /*! exports provided: DonePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonePageModule", function () {
      return DonePageModule;
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


    var _done_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./done.page */
    "./src/app/done/done.page.ts");

    const routes = [{
      path: '',
      component: _done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]
    }];
    let DonePageModule = class DonePageModule {};
    DonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]]
    })], DonePageModule);
    /***/
  },

  /***/
  "./src/app/done/done.page.scss":
  /*!*************************************!*\
    !*** ./src/app/done/done.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item ion-label {\n  font-size: 12px;\n}\n\nion-item small {\n  font-size: 12px;\n  color: gray;\n  margin-right: 10%;\n}\n\nion-content {\n  --background:#f9f8f8;\n}\n\n.light {\n  color: gray;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 60vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 60px;\n  width: 60px;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZS9DOlxcaW9uaWNcXGJlZXBiZWVwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcZG9uZVxcZG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmUvZG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxlQUFBO0FDQUQ7O0FESUE7RUFFQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRkQ7O0FETUE7RUFFQyxvQkFBQTtBQ0pEOztBRFFBO0VBRUMsV0FBQTtBQ05EOztBRFVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1BGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNURjs7QURhQTtFQUNFLGtCQUFBO0FDVkY7O0FEWUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9kb25lL2RvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gaW9uLWxhYmVsXHJcbntcclxuXHRmb250LXNpemU6MTJweDtcclxufVxyXG5cclxuXHJcbmlvbi1pdGVtIHNtYWxsXHJcbntcclxuXHRmb250LXNpemU6MTJweDtcclxuXHRjb2xvcjpncmF5O1xyXG5cdG1hcmdpbi1yaWdodDoxMCVcclxufVxyXG5cclxuXHJcbmlvbi1jb250ZW50XHJcbntcclxuXHQtLWJhY2tncm91bmQ6I2Y5ZjhmODtcclxufVxyXG5cclxuXHJcbi5saWdodFxyXG57XHJcblx0Y29sb3I6Z3JheTtcclxufVxyXG5cclxuXHJcbiNtYXBfY2FudmFzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4gXHJcbiBcclxuI2FkZHJlc3Mge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiBcclxuXHJcbiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjB2aDtcclxufVxyXG4gXHJcblxyXG4ubWFwLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIFxyXG4gICNtYXBfY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn0iLCJpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1pdGVtIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNmOWY4Zjg7XG59XG5cbi5saWdodCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwdmg7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/done/done.page.ts":
  /*!***********************************!*\
    !*** ./src/app/done/done.page.ts ***!
    \***********************************/

  /*! exports provided: DonePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonePage", function () {
      return DonePage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../service/mapStyle.js */
    "./src/app/service/mapStyle.js");

    let DonePage = class DonePage {
      constructor(toastController, nav, server, geolocation, nativeGeocoder, renderer, _document) {
        this.toastController = toastController;
        this.nav = nav;
        this.server = server;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.renderer = renderer;
        this._document = _document;
        this.status = 0;
        this.progress = 0.016;
        this.apiKey = "AIzaSyCSlQXV8Bbm6QvHoTkiVFVNcCVc5kPUPjo";
        this.chargeMap = false;
        this.km_h = 50;
      }

      ngOnInit() {
        this.data = JSON.parse(localStorage.getItem('order_data'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.currency = this.data.currency;
        this.data = this.data.data;
        this.getStatus();
        this.Interval_1 = setInterval(() => {
          this.progress = 0.016;
          this.getStatus();
        }, 4000);
        this.Intervarl_2 = setInterval(() => {
          this.progress = this.progress * 1 + 0.016;
        }, 6000);
      }

      getStatus() {
        this.server.getStatus(this.data.id).subscribe(response => {
          console.log(response);
          this.status = response.data.status;
          this.type = response.data.type;

          if (this.status == 4) {
            localStorage.setItem("lat_dboy", response.dboy.lat);
            localStorage.setItem('lng_dboy', response.dboy.lng);

            if (this.chargeMap == false) {
              this.chargeMap = true;
              this.injectSDK().then(res => {
                this.loadMap();
              });
            } else {
              this.ViewdBoy();
            }
          }

          if (this.status == 2) {
            this.presentToast("¡Lo siento! Su pedido ha sido cancelado.");
            this.nav.navigateRoot('order');
            clearInterval(this.Interval_1);
            clearInterval(this.Intervarl_2);
          }

          if (this.status == 5) {
            this.presentToast("Pedido entregado con éxito");
            localStorage.removeItem('menu_item');
            localStorage.removeItem('order_data');
            clearInterval(this.Interval_1);
            clearInterval(this.Intervarl_2);
            this.nav.navigateRoot('rate/' + this.data.id + '/staff');
          }
        });
      }

      getColor(id) {
        if (id == 1) {
          if (this.status < 1) {
            return "medium";
          }
        } else if (id == 1.2) {
          if (this.status < 1.2) {
            return "medium";
          }
        } else if (id == 1.5) {
          if (this.status < 1.5) {
            return "medium";
          }
        } else if (id == 3) {
          if (this.status < 3) {
            return "medium";
          }
        } else if (id == 4) {
          if (this.status < 4) {
            return "medium";
          }
        } else if (id == 7) {
          if (this.type < 7) {
            return "medium";
          }
        }

        return "primary";
      }

      loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log(this.status);
          let lat = localStorage.getItem('lat_dboy');
          let lng = localStorage.getItem('lng_dboy');
          this.getAddressFromCoords(lat, lng);
          const icon = {
            url: 'assets/d.png',
            scaledSize: new google.maps.Size(50, 50)
          };
          let latLng = new google.maps.LatLng(lat, lng);
          let mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_7__["mapStyle"]
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          google.maps.event.addListenerOnce(this.map, 'idle', () => {
            this.marker = new google.maps.Marker({
              position: latLng,
              map: this.map,
              icon: icon,
              title: this.address
            });
          });
        });
      }

      ViewdBoy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let lat = localStorage.getItem('lat_dboy');
          let lng = localStorage.getItem('lng_dboy');
          this.getAddressFromCoords(lat, lng);
          let latLng = new google.maps.LatLng(lat, lng);
          this.map.setCenter(latLng);
          this.marker.setPosition(latLng);
        });
      }

      getAddressFromCoords(lattitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let $this = this;
          var geocoder = new google.maps.Geocoder();
          let options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(result => {
            this.address = "";
            let responseAddress = [];

            for (let [key, value] of Object.entries(result[0])) {
              if (value.length > 0) responseAddress.push(value);
            }

            responseAddress.reverse();

            for (let value of responseAddress) {
              this.address += value + ", ";
            }

            this.address = this.address.slice(0, -2);
          }).catch(error => {
            var latlng = {
              lat: parseFloat(lattitude),
              lng: parseFloat(longitude)
            };
            let responseAddress = [];
            geocoder.geocode({
              'location': latlng
            }, function (result, status) {
              if (status === 'OK') {
                for (let [key, value] of Object.entries(result[0])) {
                  responseAddress.push(value);
                }

                responseAddress.reverse();
                $this.address = responseAddress[4];
              } else {
                console.log(status);
              }
            });
          });
        });
      }

      injectSDK() {
        return new Promise((resolve, reject) => {
          window['mapInit'] = () => {
            resolve(true);
          };

          let script = this.renderer.createElement('script');
          script.id = 'googleMaps';

          if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
          } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
          }

          this.renderer.appendChild(this._document.body, script);
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

    DonePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DonePage.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('directionsPanel', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DonePage.prototype, "directionsPanel", void 0);
    DonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-done',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./done.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./done.page.scss */
      "./src/app/done/done.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])], DonePage);
    /***/
  }
}]);
//# sourceMappingURL=done-done-module-es5.js.map