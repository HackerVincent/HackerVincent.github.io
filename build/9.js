webpackJsonp([9],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBlockNoPageModule", function() { return SelectBlockNoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_block_no__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectBlockNoPageModule = /** @class */ (function () {
    function SelectBlockNoPageModule() {
    }
    SelectBlockNoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_block_no__["a" /* SelectBlockNoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_block_no__["a" /* SelectBlockNoPage */]),
            ],
        })
    ], SelectBlockNoPageModule);
    return SelectBlockNoPageModule;
}());

//# sourceMappingURL=select-block-no.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBlockNoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the SelectBlockNoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectBlockNoPage = /** @class */ (function () {
    function SelectBlockNoPage(viewCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.blocklist = [];
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            blockName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    }
    SelectBlockNoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectBlockNoPage');
    };
    SelectBlockNoPage.prototype.dismiss = function (param) {
        this.viewCtrl.dismiss(param ? param : '');
    };
    SelectBlockNoPage.prototype.processForm = function () {
        console.log(this.form.value.blockName);
        if (this.form.status === 'VALID') {
            this.dismiss(this.form.value.blockName);
        }
        else {
            this.presentAlert('输入不合法', '请输入楼栋号');
        }
    };
    SelectBlockNoPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    SelectBlockNoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-block-no',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\select-block-no\select-block-no.html"*/'<!--\n  Generated template for the SelectBlockNoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      楼栋号\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="processForm()" [formGroup]="form">\n    <ion-list>\n      <ion-item>\n        <ion-label>楼栋号</ion-label>\n        <ion-input clearInput maxlength="10" formControlName="blockName" type="text" placeholder="请输入楼栋号"></ion-input>\n        <div item-content>\n          <button ion-button color="secondary" type="submit">完成</button>\n        </div>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-list inset>\n    <ion-item *ngFor="let item of blocklist">\n      {{item}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\select-block-no\select-block-no.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SelectBlockNoPage);
    return SelectBlockNoPage;
}());

//# sourceMappingURL=select-block-no.js.map

/***/ })

});
//# sourceMappingURL=9.js.map