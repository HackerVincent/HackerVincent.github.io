webpackJsonp([15],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistPageModule", function() { return RegistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regist__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistPageModule = /** @class */ (function () {
    function RegistPageModule() {
    }
    RegistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__regist__["a" /* RegistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__regist__["a" /* RegistPage */]),
            ],
        })
    ], RegistPageModule);
    return RegistPageModule;
}());

//# sourceMappingURL=regist.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistPage = /** @class */ (function () {
    function RegistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reqData = {
            mobileNo: '',
            verifyCode: '',
            password: ''
        };
    }
    RegistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistPage');
    };
    RegistPage.prototype.sendVerifyCode = function () {
    };
    RegistPage.prototype.submit = function () {
        console.log('submit', this.reqData);
        this.navCtrl.pop();
    };
    RegistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regist',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\regist\regist.html"*/'<!--\n  Generated template for the RegistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>注册账号</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <ion-input type="tel" maxlength="11" placeholder="请输入手机号码" [(ngModel)]="reqData.mobileNo" clearInput></ion-input>\n    <div item-content>\n      <button ion-button clear color="secondary" (click)="sendVerifyCode()">发送验证码</button>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-input type="tel" maxlength="4" placeholder="请输入验证码" [(ngModel)]="reqData.verifyCode"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" minlength="8" placeholder="请输入新密码（最少8位，数字+字母）" [(ngModel)]="reqData.password"></ion-input>\n  </ion-item>\n  <button padding ion-button color="secondary" block (click)="submit()">提交</button>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\regist\regist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegistPage);
    return RegistPage;
}());

//# sourceMappingURL=regist.js.map

/***/ })

});
//# sourceMappingURL=15.js.map