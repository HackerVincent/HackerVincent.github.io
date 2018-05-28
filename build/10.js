webpackJsonp([10],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAreaPageModule", function() { return SelectAreaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_area__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectAreaPageModule = /** @class */ (function () {
    function SelectAreaPageModule() {
    }
    SelectAreaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_area__["a" /* SelectAreaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_area__["a" /* SelectAreaPage */]),
            ],
        })
    ], SelectAreaPageModule);
    return SelectAreaPageModule;
}());

//# sourceMappingURL=select-area.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAreaPage; });
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
 * Generated class for the SelectAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectAreaPage = /** @class */ (function () {
    function SelectAreaPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.typeList = ['区域', '地铁'];
        this.ditieDic = [
            { key: '不限', value: [] },
            { key: '一号线', value: ['不限', '河口', '七贤路', '大医二院'] },
            { key: '二号线', value: ['不限', '会议中心', '港湾广场', '中山广场'] },
            { key: '三号线', value: ['不限', '九里', '十九局', '和平路'] },
            { key: '四号线', value: ['不限', '开发区', '金马路', '大连湾'] }
        ];
        this.quyuDic = [
            { key: '不限', value: [] },
            { key: '甘井子', value: ['不限', '春柳', '促进路', '大纺'] },
            { key: '沙河口', value: ['不限', '八一路', '北京公园', '黑石礁'] },
            { key: '中山', value: ['不限', '二七', '华乐', '民主广场'] },
            { key: '西岗', value: ['不限', '华府', '南山', '英华街'] },
            { key: '高新园区', value: ['不限', '庙岭', '孙家沟', '万达'] },
        ];
        this.yiji = [];
        this.erji = [];
        this.typeStr = '';
        this.yijiStr = '';
        this.erjiStr = '';
    }
    SelectAreaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectAreaPage');
    };
    SelectAreaPage.prototype.dismiss = function (param) {
        this.viewCtrl.dismiss(param ? param : '');
    };
    SelectAreaPage.prototype.selectType = function (type) {
        console.log('selectType', type);
        if ('区域' == type && this.typeStr != type) {
            this.yiji = this.quyuDic;
            this.erji = [];
        }
        else if ('地铁' == type && this.typeStr != type) {
            this.yiji = this.ditieDic;
            this.erji = [];
        }
        else {
        }
        this.typeStr = type;
    };
    SelectAreaPage.prototype.selectQu = function (item) {
        console.log('selectQu ', item);
        if ('不限' == item.key) {
            this.dismiss({ 'key': this.typeStr });
        }
        else {
            this.yijiStr = item.key;
            this.erji = item.value;
        }
    };
    SelectAreaPage.prototype.selectShangquan = function (item) {
        console.log('selectShangquan', item);
        this.erjiStr = item;
        if ('不限' == item) {
            this.dismiss({ 'key': this.yijiStr });
        }
        else {
            this.dismiss({ 'key': this.erjiStr });
        }
    };
    SelectAreaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-area',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\select-area\select-area.html"*/'<!--\n  Generated template for the SelectAreaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      选择区域\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content style="width: 30%;float: left;font-size: 10px;">\n    <ion-list>\n      <button detail-none ion-item *ngFor="let item of typeList" (click)="selectType(item)">{{item}}</button>\n    </ion-list>\n  </ion-content>\n\n  <ion-content style="width: 30%;float: left;font-size: 10px;">\n    <ion-list>\n      <ion-item-divider detail-none ion-item *ngFor="let item of yiji" (click)="selectQu(item)">{{item.key}}</ion-item-divider>\n    </ion-list>\n  </ion-content>\n\n  <ion-content style="width: 40%;float: right;font-size: 10px;">\n    <ion-list>\n      <ion-item-divider detail-none ion-item *ngFor="let item of erji" (click)="selectShangquan(item)">{{item}}</ion-item-divider>\n    </ion-list>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\select-area\select-area.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SelectAreaPage);
    return SelectAreaPage;
}());

//# sourceMappingURL=select-area.js.map

/***/ })

});
//# sourceMappingURL=10.js.map