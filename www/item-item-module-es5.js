(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border style=\"z-index: 1000;\">\r\n  <ion-toolbar color=\"primary\"> \r\n    <!-- [class.show-background]=\"showToolbar\" translucent -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <span class=\"title_header\">{{ data.title }}</span>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" routerLink=\"/info\" routerDirection=\"forward\"> \r\n      <ion-icon name=\"home\" slot=\"end\" style=\"float: right;margin-right: 15px;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"slide-menu\">\r\n    <ion-slides  [options]=\"BannerOption\">\r\n      <ion-slide *ngFor=\"let category of data.items\" style=\"text-align: left;\">\r\n        <ion-label style=\"font-size: 14px;\" (click)=\"ScrollTo(category.id)\">{{category.cate_name}}</ion-label>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" fullscreen [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\r\n\r\n  <ion-fab style=\"padding-bottom: 45px;\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"count > 0\" routerLink=\"/cart\" routerDirection=\"forward\">\r\n    <ion-fab-button color=\"danger\" edge=\"true\">\r\n      <ion-icon name=\"cart\"></ion-icon> {{ count }}\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  \r\n  <ion-fab style=\"padding-bottom: 45px;\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"order > 0\" routerLink=\"/done\" routerDirection=\"forward\">\r\n    <ion-fab-button color=\"danger\" edge=\"true\">\r\n      <ion-icon name=\"pin\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-slides pager=\"true\" autoplay=\"3000\">\r\n      <ion-slide ><img src=\"{{ data.img }}\"></ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-card mode=\"ios\" style=\"margin-top: -18%;margin-bottom: 15%;background-color: #ffffff;width: 96%;margin-left: 2%;top:10px;z-index:100;\" class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-title style=\"font-size: 25px\"><span class=\"content_title\">{{ data.title }}</span><ion-badge color=\"primary\" style=\"float: right\">{{ data.rating }}<br></ion-badge></ion-card-title>\r\n      <ion-card-subtitle>\r\n        <ion-icon name=\"pin\"></ion-icon> {{data.address}}\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n\r\n  <ion-card-content>\r\n\r\n  <span *ngFor=\"let category of data.items\" class=\"cate_{{ category.id }}\">\r\n  <h1 style=\"margin-top: 20px\">{{ category.cate_name }}</h1>\r\n\r\n  <span *ngFor=\"let item of category.items\">\r\n  <ion-row style=\"margin-top:10px;padding: 0px\" *ngIf=\"item.status == 0\">\r\n    <ion-col size=\"5\" (click)=\"showOption(item,data.currency)\">\r\n      <div class=\"pic_menu\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\r\n    </ion-col>\r\n    <ion-col size=\"7\" style=\"position: relative;\">\r\n      <b (click)=\"showOption(item,data.currency)\">{{ item.name }}</b><br>\r\n        <small (click)=\"showOption(item,data.currency)\" style=\"color: gray;font-size: 10px\" *ngIf=\"item.description\">\r\n            {{ item.description | slice:0:25 }}...\r\n        </small><br>\r\n      <span (click)=\"showOption(item,data.currency)\" style=\"color: rgb(29, 29, 29);font-size: 11px\"><b>MXN {{ data.currency }}{{ item.price }}</b></span>\r\n        \r\n      <ion-badge *ngIf=\"hasCart(item.id)\" class=\"badgeCart\">{{hasCart(item.id)}}</ion-badge>\r\n     \r\n    </ion-col>\r\n   \r\n  </ion-row>\r\n  </span>\r\n  </span>\r\n\r\n\r\n\r\n  </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"text\" style=\"z-index: 1000;\">\r\n    <ion-toolbar mode=\"ios\">\r\n    \r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\">\r\n        \r\n       <ion-tab-button routerLink=\"/home\">\r\n          <ion-icon name=\"home\"></ion-icon>\r\n          <ion-label>{{ text.home_footer_name }}</ion-label>\r\n        </ion-tab-button>\r\n    \r\n        <ion-tab-button routerLink=\"/home\">\r\n          <ion-icon name=\"pin\"></ion-icon>\r\n          <ion-label>{{ text.home_nearest }}</ion-label>\r\n        </ion-tab-button>\r\n    \r\n        <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n          <ion-label>{{ text.home_cart }}</ion-label>\r\n          <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\r\n        </ion-tab-button>\r\n    \r\n        <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\r\n          <ion-icon name=\"person\"></ion-icon>\r\n          <ion-label>{{ text.home_profile }}</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n    \r\n    </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/item/item.module.ts":
  /*!*************************************!*\
    !*** ./src/app/item/item.module.ts ***!
    \*************************************/

  /*! exports provided: ItemPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPageModule", function () {
      return ItemPageModule;
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


    var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item.page */
    "./src/app/item/item.page.ts");

    const routes = [{
      path: '',
      component: _item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]
    }];
    let ItemPageModule = class ItemPageModule {};
    ItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]]
    })], ItemPageModule);
    /***/
  },

  /***/
  "./src/app/item/item.page.scss":
  /*!*************************************!*\
    !*** ./src/app/item/item.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n/* Transparent standard */\n\n@-webkit-keyframes pulsate {\n  from {\n    right: -50%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n@keyframes pulsate {\n  from {\n    right: -50%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n@-webkit-keyframes downer {\n  from {\n    right: -30%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n@keyframes downer {\n  from {\n    right: -30%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: #fff;\n  color: #000;\n  padding-top: 18px;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: downer;\n  animation-name: downer;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n\n.show-background .title_header {\n  display: block;\n  -webkit-animation-duration: 0.8s;\n  animation-duration: 0.8s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: pulsate;\n  animation-name: pulsate;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none;\n}\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n}\n\nh1 {\n  font-size: 19px;\n}\n\nion-badge {\n  --padding-bottom:5px;\n  --padding-start:10px;\n  --padding-end:10px;\n  --padding-top:5px;\n}\n\n.quantityinput {\n  padding: 2px 2px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fff;\n  width: 28px;\n}\n\n.quantitybtn .sign {\n  padding: 7px 2px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n\n.quantitybtn .plus {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  border-radius: 5px 0px 0px 5px;\n}\n\n.quantitybtn .minus {\n  background: #4caf50;\n  border: 1px solid #4caf50;\n  color: #fff;\n  border-radius: 0px 5px 5px 0px;\n}\n\n.header_stikcy {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 250px;\n  padding: 12px 15px;\n  z-index: 50;\n  overflow: hidden;\n}\n\n.header_stikcy:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: -1;\n}\n\n.header_stikcy ion-icon {\n  color: #fff;\n  font-size: 28px;\n}\n\n.slide-menu {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 10px 6px;\n  background-color: #000;\n  visibility: hidden;\n}\n\n.slide_down_View {\n  visibility: visible;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: downer;\n  animation-name: downer;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n\n.slide-menu ion-label {\n  font-family: \"SF Pro Display\";\n  font-weight: 100;\n  font-style: normal;\n  font-size: 14px;\n  color: #fff;\n  letter-spacing: 0.8px;\n}\n\n.pic_menu {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n\n.badgeCart {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9DOlxcaW9uaWNcXGJlZXBiZWVwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcaXRlbVxcaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2l0ZW0vaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER0EseUJBQUE7O0FBY0M7RUFrQ0E7SUFDQyxXQUFBO0lBQ0EsVUFBQTtFQzlDQTtFRGdERDtJQUNDLFVBQUE7SUFDQSxRQUFBO0VDOUNBO0FBQ0Y7O0FEY0M7RUF5QkE7SUFDQyxXQUFBO0lBQ0EsVUFBQTtFQ2hCQTtFRGtCRDtJQUNDLFVBQUE7SUFDQSxRQUFBO0VDaEJBO0FBQ0Y7O0FEekJDO0VBNkNBO0lBQ0MsV0FBQTtJQUNBLFVBQUE7RUNqQkE7RURtQkQ7SUFDQyxVQUFBO0lBQ0EsUUFBQTtFQ2pCQTtBQUNGOztBRDFCQztFQW9DQTtJQUNDLFdBQUE7SUFDQSxVQUFBO0VDYUE7RURYRDtJQUNDLFVBQUE7SUFDQSxRQUFBO0VDYUE7QUFDRjs7QUREQSx1Q0FBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0gsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUF0REEsZ0NBOEN5QjtFQTNDekIsd0JBMkN5QjtFQTFDekIsb0NBMEMrQjtFQXZDL0IsNEJBdUMrQjtFQXRDL0IsOEJBc0NpQjtFQW5DakIsc0JBbUNpQjtFQWxDakIsbUNBa0NrQztFQS9CbEMsMkJBK0JrQztBQzJCbkM7O0FEaEJDO0VBQ0MsY0FBQTtFQTFERCxnQ0EwQzBCO0VBdkMxQix3QkF1QzBCO0VBdEMxQixvQ0FzQ2dDO0VBbkNoQyw0QkFtQ2dDO0VBbENoQywrQkFrQ2lCO0VBL0JqQix1QkErQmlCO0VBOUJqQixtQ0E4Qm1DO0VBM0JuQywyQkEyQm1DO0FDa0RwQzs7QUQ1QkEsK0JBQUE7O0FBQ0E7RUFDSSxzQkFBQTtBQytCSjs7QUQ1QkEsZ0NBQUE7O0FBQ0E7RUFDSSxpQkFBQTtBQytCSjs7QUQxQkE7RUFDQyxrQkFBQTtFQUNBLE1BQUE7QUM2QkQ7O0FEMUJBO0VBRUMsZUFBQTtBQzRCRDs7QUR6QkE7RUFFQyxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQzJCRDs7QUR4QkE7RUFBZSxnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixzQkFBQTtFQUF3QixnQkFBQTtFQUFpQixXQUFBO0FDZ0M1Rjs7QUQvQkE7RUFBbUIsZ0JBQUE7RUFBaUIsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsYUFBQTtBQ3dDckc7O0FEdkNBO0VBQW1CLG1CQUFBO0VBQW9CLHlCQUFBO0VBQTBCLFdBQUE7RUFBWSw4QkFBQTtBQzhDN0U7O0FEN0NBO0VBQW9CLG1CQUFBO0VBQW9CLHlCQUFBO0VBQTBCLFdBQUE7RUFBWSw4QkFBQTtBQ29EOUU7O0FEbERBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQU8sT0FBQTtFQUNQLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNzREQ7O0FEcERDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQU8sT0FBQTtFQUNQLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQ3VERjs7QURwREM7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQ3NERjs7QURsREE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDcUREOztBRGxEQTtFQUNDLG1CQUFBO0VBdElBLGdDQThDeUI7RUEzQ3pCLHdCQTJDeUI7RUExQ3pCLG9DQTBDK0I7RUF2Qy9CLDRCQXVDK0I7RUF0Qy9CLDhCQXNDaUI7RUFuQ2pCLHNCQW1DaUI7RUFsQ2pCLG1DQWtDa0M7RUEvQmxDLDJCQStCa0M7QUM2Sm5DOztBRGpFQTtFQUNDLDZCQUFBO0VBQ0csZ0JBQUE7RUFDSCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0cscUJBQUE7QUNvRUo7O0FEakVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNvRUQ7O0FEakVBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNvRUQiLCJmaWxlIjoic3JjL2FwcC9pdGVtL2l0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxufVxyXG5cclxuLyogVHJhbnNwYXJlbnQgc3RhbmRhcmQgKi9cclxuLy8gaW9uLXRvb2xiYXIge1xyXG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZWQ7XHJcbi8vIFx0LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuLy8gXHQtLWNvbG9yOiNmZmY7XHJcbi8vIFx0LS1iYWNrZ3JvdW5kOiByZ2IoNDEsIDQxLCA0MSk7XHJcbi8vIFx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoNDIsIDQyLCA0MikgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XHJcbi8vIFx0LnRpdGxlX2hlYWRlciB7XHJcbi8vIFx0XHRkaXNwbGF5OiBub25lO1xyXG4vLyBcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uTmFtZSkge1xyXG5cdEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcblx0ICBAY29udGVudDtcclxuXHR9XHJcblx0QC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuXHQgIEBjb250ZW50O1xyXG5cdH1cclxuXHRALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuXHQgIEBjb250ZW50O1xyXG5cdH1cclxuXHRAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuXHQgIEBjb250ZW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGUoJG5hbWUsICRkdXJhdGlvbiwgJGl0ZXJhdGlvbiwgJGRpcmVjdGlvbikge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XHJcblx0LW1vei1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcclxuXHQtby1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcclxuXHRhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcclxuXHQtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb247XHJcblx0LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAkaXRlcmF0aW9uO1xyXG5cdC1vLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb247XHJcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbjtcclxuXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcclxuXHQtbW96LWFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcclxuXHQtby1hbmltYXRpb24tbmFtZTogJG5hbWU7XHJcblx0YW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuXHQtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcblx0LW8tYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuXHRhbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMocHVsc2F0ZSkge1xyXG5cdGZyb20ge1xyXG5cdFx0cmlnaHQ6IC01MCU7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHR0byB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZG93bmVyKSB7XHJcblx0ZnJvbSB7XHJcblx0XHRyaWdodDogLTMwJTtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cdHRvIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gcHVsc2F0ZSB7XHJcblx0QGluY2x1ZGUgYW5pbWF0ZShwdWxzYXRlLCAwLjhzLCAxLCBub3JtYWwpO1xyXG59XHJcblxyXG5AbWl4aW4gZG93bmVyIHtcclxuXHRAaW5jbHVkZSBhbmltYXRlKGRvd25lciwgMC42cywgMSwgbm9ybWFsKTtcclxuXHRcclxufVxyXG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXHJcbi5zaG93LWJhY2tncm91bmQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0cGFkZGluZy10b3A6IDE4cHg7XHJcblx0QGluY2x1ZGUgZG93bmVyO1xyXG5cclxuXHQudGl0bGVfaGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0QGluY2x1ZGUgcHVsc2F0ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDowO1xyXG59XHJcblxyXG5oMVxyXG57XHJcblx0Zm9udC1zaXplOjE5cHg7XHJcbn1cclxuXHJcbmlvbi1iYWRnZVxyXG57XHJcblx0LS1wYWRkaW5nLWJvdHRvbTo1cHg7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OjEwcHg7XHJcblx0LS1wYWRkaW5nLWVuZDoxMHB4O1xyXG5cdC0tcGFkZGluZy10b3A6NXB4O1xyXG59XHJcblxyXG4ucXVhbnRpdHlpbnB1dHtwYWRkaW5nOjJweCAycHg7IHRleHQtYWxpZ246Y2VudGVyOyBib3JkZXI6MXB4IHNvbGlkICNjY2M7ICBiYWNrZ3JvdW5kOiNmZmY7IHdpZHRoOjI4cHg7fVxyXG4ucXVhbnRpdHlidG4gLnNpZ257cGFkZGluZzo3cHggMnB4OyB3aWR0aDoyMHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgY3Vyc29yOnBvaW50ZXI7IGZvbnQtd2VpZ2h0OmJvbGQ7IG91dGxpbmU6bm9uZTsgfVxyXG4ucXVhbnRpdHlidG4gLnBsdXN7YmFja2dyb3VuZDojZjQ0MzM2OyBib3JkZXI6MXB4IHNvbGlkICNmNDQzMzY7IGNvbG9yOiNmZmY7IGJvcmRlci1yYWRpdXM6NXB4IDBweCAwcHggNXB4O31cclxuLnF1YW50aXR5YnRuIC5taW51c3tiYWNrZ3JvdW5kOiM0Y2FmNTA7IGJvcmRlcjoxcHggc29saWQgIzRjYWY1MDsgY29sb3I6I2ZmZjsgYm9yZGVyLXJhZGl1czowcHggNXB4IDVweCAwcHg7fVxyXG5cclxuLmhlYWRlcl9zdGlrY3kge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDI1MHB4O1xyXG5cdHBhZGRpbmc6IDEycHggMTVweDtcclxuXHR6LWluZGV4OiA1MDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO2xlZnQ6IDA7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcclxuXHRcdHotaW5kZXg6IC0xO1xyXG5cdH1cclxuXHJcblx0aW9uLWljb24ge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0fVxyXG59XHJcblxyXG4uc2xpZGUtbWVudSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDEwcHggNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGVfZG93bl9WaWV3IHtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdEBpbmNsdWRlIGRvd25lcjtcclxufVxyXG5cclxuLnNsaWRlLW1lbnUgaW9uLWxhYmVsIHtcclxuXHRmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxufVxyXG5cclxuLnBpY19tZW51IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmFkZ2VDYXJ0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogVHJhbnNwYXJlbnQgc3RhbmRhcmQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC01MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICByaWdodDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICByaWdodDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICByaWdodDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZG93bmVyIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0zMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGRvd25lciB7XG4gIGZyb20ge1xuICAgIHJpZ2h0OiAtMzAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZG93bmVyIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0zMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBkb3duZXIge1xuICBmcm9tIHtcbiAgICByaWdodDogLTMwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBkb3duZXI7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAtby1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbn1cbi5zaG93LWJhY2tncm91bmQgLnRpdGxlX2hlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2F0ZTtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogcHVsc2F0ZTtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IHB1bHNhdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzYXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbmlvbi1iYWRnZSB7XG4gIC0tcGFkZGluZy1ib3R0b206NXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MTBweDtcbiAgLS1wYWRkaW5nLWVuZDoxMHB4O1xuICAtLXBhZGRpbmctdG9wOjVweDtcbn1cblxuLnF1YW50aXR5aW5wdXQge1xuICBwYWRkaW5nOiAycHggMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4ucXVhbnRpdHlidG4gLnNpZ24ge1xuICBwYWRkaW5nOiA3cHggMnB4O1xuICB3aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucXVhbnRpdHlidG4gLnBsdXMge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjQ0MzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuXG4ucXVhbnRpdHlidG4gLm1pbnVzIHtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbn1cblxuLmhlYWRlcl9zdGlrY3kge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgei1pbmRleDogNTA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaGVhZGVyX3N0aWtjeTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IC0xO1xufVxuLmhlYWRlcl9zdGlrY3kgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uc2xpZGUtbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2xpZGVfZG93bl9WaWV3IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1vLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogZG93bmVyO1xuICAtby1hbmltYXRpb24tbmFtZTogZG93bmVyO1xuICBhbmltYXRpb24tbmFtZTogZG93bmVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xufVxuXG4uc2xpZGUtbWVudSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbn1cblxuLnBpY19tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFkZ2VDYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/item/item.page.ts":
  /*!***********************************!*\
    !*** ./src/app/item/item.page.ts ***!
    \***********************************/

  /*! exports provided: ItemPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPage", function () {
      return ItemPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _option_option_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../option/option.page */
    "./src/app/option/option.page.ts");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    let ItemPage = class ItemPage {
      constructor(modalController, toastController, server, statusBar, platform) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.server = server;
        this.statusBar = statusBar;
        this.platform = platform;
        this.veg = false;
        this.cart = [];
        this.showToolbar = false;
        this.BannerOption = {
          initialSlide: 0,
          slidesPerView: 3.3,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          spaceBetween: 7
        };
        this.data = JSON.parse(localStorage.getItem('menu_item'));
        this.text = JSON.parse(localStorage.getItem('app_text')); // Order Sort_no

        this.data.items.sort((a, b) => {
          return parseFloat(a.sort_no) - parseFloat(b.sort_no);
        });
      }

      ngOnInit() {}

      ionViewWillEnter() {
        if (localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined) {
          this.cart_no = Math.floor(Math.random() * 2000000000) + 1;
          localStorage.setItem('cart_no', this.cart_no);
        } else {
          this.cart_no = localStorage.getItem('cart_no');
        }

        this.server.cartCount(this.cart_no).subscribe(response => {
          this.count = response.data;
          this.cart = response.cart;
        });
      }

      vegOnly() {
        this.veg = this.veg == true ? false : true;
      }

      showOption(item, currency) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _option_option_page__WEBPACK_IMPORTED_MODULE_3__["OptionPage"],
            animated: true,
            mode: 'md',
            // cssClass: 'my-custom-modal-css',
            backdropDismiss: false,
            componentProps: {
              'item': item,
              'cart': this.cart,
              'currency': currency
            }
          });
          modal.onDidDismiss().then(data => {
            if (data.data.proces == 'addTocart') {
              this.addToCart(data.data.id, data.data.price, data.data.type, data.data.qty, data.data.addonData);
            } else if (data.data.proces == 'updateTocart') {
              this.updateCart(data.data.id, data.data.type);
            }

            this.ionViewWillEnter();
          });
          return yield modal.present();
        });
      }

      addToCart(id, price, type = 0, qty, addon = []) {
        this.presentToast("Elemento Agregado.");
        var allData = {
          cart_no: this.cart_no,
          id: id,
          price: price,
          qtype: type,
          type: 0,
          qty: qty,
          addon: addon,
          price_comm: this.data.c_value
        };
        this.server.addToCart(allData).subscribe(response => {
          this.count = response.data.count;
          this.cart = response.data.cart;
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

      hasCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].item_id == id) {
            return this.cart[i].qty;
          }
        }

        return false;
      }

      updateCart(id, type = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.presentToast("Removed Successfully");
          this.server.updateCart(id, type + "?cart_no=" + this.cart_no + "&lid=" + localStorage.getItem('lid')).subscribe(response => {
            this.cart = response.data;
          });
        });
      }

      onScroll($event) {
        // let title:  HTMLSpanElement = document.querySelector('.content_title');
        // let subTitle: HTMLSpanElement = document.querySelector('.title_header');
        let menuSub = document.querySelector('.slide-menu');

        if ($event && $event.detail && $event.detail.scrollTop) {
          const scrollTop = $event.detail.scrollTop;
          this.showToolbar = scrollTop >= 175;

          if (scrollTop >= 175) {
            menuSub.className = 'slide-menu slide_down_View';
          } else {
            menuSub.className = 'slide-menu';
          }
        }
      }

      ScrollTo(div) {
        let menuSub = document.querySelector('.cate_' + div);
        let DownY = menuSub.offsetTop + 210;
        this.Content.scrollToPoint(0, DownY, 300);
      }

    };

    ItemPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]
    }, {
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], ItemPage.prototype, "Content", void 0);
    ItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item.page.scss */
      "./src/app/item/item.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], ItemPage);
    /***/
  }
}]);
//# sourceMappingURL=item-item-module-es5.js.map