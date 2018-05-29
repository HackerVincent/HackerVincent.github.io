webpackJsonp([5],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectHourseSizePageModule", function() { return SelectHourseSizePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_hourse_size__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectHourseSizePageModule = /** @class */ (function () {
    function SelectHourseSizePageModule() {
    }
    SelectHourseSizePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_hourse_size__["a" /* SelectHourseSizePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_hourse_size__["a" /* SelectHourseSizePage */]),
            ],
        })
    ], SelectHourseSizePageModule);
    return SelectHourseSizePageModule;
}());

//# sourceMappingURL=select-hourse-size.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectHourseSizePage; });
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
 * Generated class for the SelectHourseSizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectHourseSizePage = /** @class */ (function () {
    function SelectHourseSizePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.shiSelect = [
            { value: 1, name: '一室', checked: false },
            { value: 2, name: '二室', checked: false },
            { value: 3, name: '三室', checked: false },
            { value: 4, name: '四室', checked: false },
            { value: 5, name: '五室', checked: false },
            { value: 6, name: '五室以上', checked: false }
        ];
        this.type = navParams.get('type');
    }
    SelectHourseSizePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectHourseSizePage');
    };
    SelectHourseSizePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectHourseSizePage.prototype.ok = function () {
        this.viewCtrl.dismiss(this.shiSelect);
    };
    SelectHourseSizePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-hourse-size',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\select-hourse-size\select-hourse-size.html"*/'<!--\n  Generated template for the SelectHourseSizePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      选择房型\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of shiSelect">\n      <ion-label>{{item?.name}}</ion-label>\n      <ion-checkbox item-right [(ngModel)]="item.checked"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <p>\n    <button ion-button color="secondary" block (click)="ok()">确定</button>\n  </p>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\select-hourse-size\select-hourse-size.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SelectHourseSizePage);
    return SelectHourseSizePage;
}());

//# sourceMappingURL=select-hourse-size.js.map

/***/ })

});
//# sourceMappingURL=5.js.map