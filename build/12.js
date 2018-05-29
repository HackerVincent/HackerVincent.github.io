webpackJsonp([12],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPageModule", function() { return SalesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sales__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SalesPageModule = /** @class */ (function () {
    function SalesPageModule() {
    }
    SalesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sales__["a" /* SalesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sales__["a" /* SalesPage */]),
            ],
        })
    ], SalesPageModule);
    return SalesPageModule;
}());

//# sourceMappingURL=sales.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesPage; });
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
 * Generated class for the SalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SalesPage = /** @class */ (function () {
    function SalesPage(navCtrl, navParams, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.items = [
            { index: 0, name: '小区名', pageName: 'SelectCommunityNamePage', edited: false },
            { index: 1, name: '楼栋号', pageName: 'SelectBlockNoPage', edited: false },
            { index: 2, name: '单元号', pageName: 'SelectUnitNoPage', edited: false },
            { index: 3, name: '门牌号', pageName: 'SelectFloorNoPage', edited: false }
        ];
    }
    SalesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalesPage');
    };
    SalesPage.prototype.itemSelected = function (item) {
        var _this = this;
        console.log("Selected Item", item);
        if (item.index != 0 && this.items[item.index - 1].edited == false) {
            this.presentAlert('请先填写' + this.items[item.index - 1].name);
        }
        else {
            var modal = this.modalCtrl.create(item.pageName);
            modal.onDidDismiss(function (data) {
                if (data) {
                    console.log("SalesPage pageName = ", item.name, "data = ", data);
                    if (item.name != data && item.edited) {
                        if (item.index == 0) {
                            _this.items[1].edited = false;
                            _this.items[1].name = '楼栋号';
                            _this.items[2].edited = false;
                            _this.items[2].name = '单元号';
                            _this.items[3].edited = false;
                            _this.items[3].name = '门牌号';
                        }
                        else if (item.index == 1) {
                            _this.items[2].edited = false;
                            _this.items[2].name = '单元号';
                            _this.items[3].edited = false;
                            _this.items[3].name = '门牌号';
                        }
                        else if (item.index == 2) {
                            _this.items[3].edited = false;
                            _this.items[3].name = '门牌号';
                        }
                    }
                    item.name = data;
                    item.edited = true;
                }
            });
            modal.present();
        }
    };
    SalesPage.prototype.nextPage = function () {
        if (this.items[0].edited && this.items[1].edited && this.items[2].edited && this.items[3].edited) {
            this.navCtrl.push('SaleSubmitPage', { 'community': this.items[0].name, 'block': this.items[1].name, 'unit': this.items[2].name, 'floor': this.items[3].name });
        }
        else {
            this.presentAlert('请录入房源信息');
        }
    };
    SalesPage.prototype.presentAlert = function (title, subTitle) {
        if (subTitle === void 0) { subTitle = ''; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    SalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sales',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\sales\sales.html"*/'<!--\n  Generated template for the SalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>免费发布房源</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n    <a ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{item?.name}}\n    </a>\n  </ion-list>\n  <p>\n    <button ion-button color="secondary" block (click)="nextPage()">下一步</button>\n  </p>\n  <ion-card>\n    <ion-card-header>\n      卖房全流程\n    </ion-card-header>\n    <ion-card-content>\n      1.发布房源.\n      <br> 2.核对房源.\n      <br> 3.在线销售.\n      <br> 4.签约出售.\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\sales\sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SalesPage);
    return SalesPage;
}());

//# sourceMappingURL=sales.js.map

/***/ })

});
//# sourceMappingURL=12.js.map