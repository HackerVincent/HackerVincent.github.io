webpackJsonp([11],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */]),
            ],
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
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
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.richengData = [
            {
                time: '2018年5月20日',
                state: '看房结束',
                message: '看1套房子',
                xiaoqu: '赛维利大厦',
                who: '王刚',
                headUrl: 'https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png'
            },
            {
                time: '2018年4月2日',
                state: '已取消',
                message: '看1套房子',
                xiaoqu: '御景',
                who: '张三',
                headUrl: 'https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png'
            },
            {
                time: '2018年3月2日',
                state: '看房结束',
                message: '看1套房子',
                xiaoqu: '37中学',
                who: '李四',
                headUrl: 'https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png'
            },
            {
                time: '2018年1月2日',
                state: '已取消',
                message: '看1套房子',
                xiaoqu: '万达大厦',
                who: '王二',
                headUrl: 'https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png'
            }
        ];
        this.jiluData = [
            {
                time: '2018.6.3',
                who: '张三',
                photo: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                hourse: {
                    price: 650000,
                    shi: 2,
                    ting: 1,
                    size: 58.43,
                    fangxiang: '南',
                    xiaoqu: '赛维利大厦',
                    tags: ['地铁'],
                    state: '已停售'
                }
            },
            {
                time: '2018.4.3',
                who: '李四',
                photo: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                hourse: {
                    price: 1050000,
                    shi: 2,
                    ting: 2,
                    size: 130.14,
                    fangxiang: '南',
                    xiaoqu: '长江杰作',
                    tags: ['地铁', '满五年'],
                    state: '已成交'
                }
            }
        ];
        this.tab = "richeng";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\schedule\schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="tab">\n      <ion-segment-button value="richeng">\n        看房日程\n      </ion-segment-button>\n      <ion-segment-button value="jilu">\n        看房记录\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="tab">\n    <ion-list *ngSwitchCase="\'richeng\'">\n      <ion-card *ngFor="let item of richengData">\n        <ion-item>\n          <h2>{{item?.time}}</h2>\n          <ion-badge item-end>{{item?.state}}</ion-badge>\n          <h3>{{item?.message}}</h3>\n          <h3>{{item?.xiaoqu}}</h3>\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="item?.headUrl"/>\n          </ion-avatar>\n          <h2>{{item?.who}}</h2>\n          <ion-icon item-end name="call"></ion-icon>\n          <ion-icon item-end name="mail"></ion-icon>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'jilu\'">\n      <ion-card *ngFor="let item of jiluData">\n        <ion-item>\n          <ion-note>{{item?.time}}</ion-note>\n          {{item?.who}}带看\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img [src]="item?.photo"/>\n          </ion-thumbnail>\n          <h2>{{item.hourse.price/10000}}万</h2>\n          <span>{{item.hourse.shi}}室{{item.hourse.ting}}厅/{{item.hourse.size}}㎡/{{item.hourse.fangxiang}}</span>\n          <h3>{{item.hourse.xiaoqu}}</h3>\n          <span style="background-color:lightgreen;color:forestgreen">{{item.hourse.tags}}</span>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\schedule\schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ })

});
//# sourceMappingURL=11.js.map