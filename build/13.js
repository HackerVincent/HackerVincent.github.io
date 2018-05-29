webpackJsonp([13],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleSubmitPageModule", function() { return SaleSubmitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale_submit__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SaleSubmitPageModule = /** @class */ (function () {
    function SaleSubmitPageModule() {
    }
    SaleSubmitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sale_submit__["a" /* SaleSubmitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sale_submit__["a" /* SaleSubmitPage */]),
            ],
        })
    ], SaleSubmitPageModule);
    return SaleSubmitPageModule;
}());

//# sourceMappingURL=sale-submit.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleSubmitPage; });
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
 * Generated class for the SaleSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaleSubmitPage = /** @class */ (function () {
    function SaleSubmitPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.reqData = {
            community: '',
            block: '',
            unit: '',
            floor: '',
            price: '',
            nickName: '',
            mobileNo: '',
            verifyCode: '',
            salesDate: '3'
        };
        this.reqData.community = this.navParams.get('community');
        this.reqData.block = this.navParams.get('block');
        this.reqData.unit = this.navParams.get('unit');
        this.reqData.floor = this.navParams.get('floor');
    }
    SaleSubmitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaleSubmitPage');
    };
    SaleSubmitPage.prototype.submit = function () {
        console.log('ionViewDidLoad submit() reqData = ', this.reqData);
    };
    SaleSubmitPage.prototype.sendVerifyCode = function () {
        console.log('sendVerifyCode');
        if (this.reqData.mobileNo) {
            console.log('sendVerifyCode sended');
        }
    };
    SaleSubmitPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    SaleSubmitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sale-submit',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\sale-submit\sale-submit.html"*/'<!--\n  Generated template for the SaleSubmitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>免费发布房源</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>您的期望售价</ion-list-header>\n    <ion-item>\n      <ion-label>售价</ion-label>\n      <ion-input type="tel" maxlength="10" [(ngModel)]="reqData.price" clearInput></ion-input>\n      <ion-note item-content>元</ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>您的联系信息</ion-list-header>\n    <ion-item>\n      <ion-label>称呼</ion-label>\n      <ion-input type="text" maxlength="10" [(ngModel)]="reqData.nickName" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>手机号</ion-label>\n      <ion-input type="tel" maxlength="11" placeholder="请输入手机号" [(ngModel)]="reqData.mobileNo" clearInput></ion-input>\n      <div item-content>\n        <button ion-button clear color="secondary" (click)="sendVerifyCode()">获取验证码</button>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label>验证码</ion-label>\n      <ion-input type="tel" maxlength="4" [(ngModel)]="reqData.verifyCode" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>期望出售时间</ion-label>\n      <ion-select [(ngModel)]="reqData.salesDate" okText="确定" cancelText="取消">\n        <ion-option value="1" >1个月内</ion-option>\n        <ion-option value="3">3个月内</ion-option>\n        <ion-option value="6">半年内</ion-option>\n        <ion-option value="0">观望</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <p>\n    <button ion-button color="secondary" block (click)="submit()">提交</button>\n  </p>\n\n  <ion-card>\n    <ion-card-header>\n      卖房全流程\n    </ion-card-header>\n    <ion-card-content>\n      1.发布房源.\n      <br> 2.核对房源.\n      <br> 3.在线销售.\n      <br> 4.签约出售.\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\sale-submit\sale-submit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SaleSubmitPage);
    return SaleSubmitPage;
}());

//# sourceMappingURL=sale-submit.js.map

/***/ })

});
//# sourceMappingURL=13.js.map