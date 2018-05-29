webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldhoursePageModule", function() { return OldhoursePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oldhourse__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OldhoursePageModule = /** @class */ (function () {
    function OldhoursePageModule() {
    }
    OldhoursePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__oldhourse__["a" /* OldhoursePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__oldhourse__["a" /* OldhoursePage */]), __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], OldhoursePageModule);
    return OldhoursePageModule;
}());

//# sourceMappingURL=oldhourse.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldhoursePage; });
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
 * Generated class for the OldhoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OldhoursePage = /** @class */ (function () {
    function OldhoursePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.news = [
            {
                text: '拎包入住',
                content: '改善优选房源',
                newsUrl: 'https://m.baidu.com',
                newsPic: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg'
            },
            {
                text: '总价10万起',
                content: '全市总价最低力荐',
                newsUrl: 'https://m.qq.com',
                newsPic: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg'
            }
        ];
        this.areaSelect = '区域';
        this.priceSelect = '价格';
        this.sizeSelect = '房型';
        this.more = '更多';
        this.initHourseList();
    }
    OldhoursePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OldhoursePage');
    };
    OldhoursePage.prototype.selectNews = function (page) {
        console.log('selectNews newsUrl ' + page.newsUrl);
    };
    OldhoursePage.prototype.scrollTop = function () {
        console.log('scrollTop');
        this.content.scrollToTop();
    };
    OldhoursePage.prototype.searchItems = function (ev) {
        this.initHourseList();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.hourseList = this.hourseList.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    OldhoursePage.prototype.selectArea = function () {
        var _this = this;
        var modal = this.modalCtrl.create('SelectAreaPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log('selectArea data = ', data);
                _this.areaSelect = data.key;
            }
        });
        modal.present();
    };
    OldhoursePage.prototype.selectHoursesize = function () {
        var _this = this;
        var modal = this.modalCtrl.create('SelectHourseSizePage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log('selectHoursesize data = ', data);
                if (typeof (data) != 'undefined') {
                    var count_1 = 0;
                    data.forEach(function (element) {
                        console.log('selectHoursesize data.name = ', element.name);
                        console.log('selectHoursesize data.value = ', element.value);
                        console.log('selectHoursesize data.checked = ', element.checked);
                        if (element.checked) {
                            count_1++;
                            _this.sizeSelect = element.name;
                        }
                    });
                    if (count_1 > 1) {
                        _this.sizeSelect = '多选';
                    }
                }
            }
        });
        modal.present();
    };
    OldhoursePage.prototype.selectPrice = function () {
        var _this = this;
        var modal = this.modalCtrl.create('SelectPricePage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log('selectPrice data = ', data);
                console.log('selectPrice data.name = ', data.name);
                _this.priceSelect = data.name;
            }
        });
        modal.present();
    };
    OldhoursePage.prototype.selectMore = function () {
        var modal = this.modalCtrl.create('SelectHourseMorePage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log('selectMore data = ', data);
                if (data) {
                    data.biaoqian.forEach(function (element) {
                        console.log('biaoqian ', element);
                    });
                    data.chaoxiang.forEach(function (element) {
                        console.log('chaoxiang ', element);
                    });
                    data.dianti.forEach(function (element) {
                        console.log('dianti ', element);
                    });
                    data.leixing.forEach(function (element) {
                        console.log('leixing ', element);
                    });
                    data.louceng.forEach(function (element) {
                        console.log('louceng ', element);
                    });
                    data.louling.forEach(function (element) {
                        console.log('louling ', element);
                    });
                    data.mianji.forEach(function (element) {
                        console.log('mianji ', element);
                    });
                    data.quanshu.forEach(function (element) {
                        console.log('quanshu ', element);
                    });
                    data.yongtu.forEach(function (element) {
                        console.log('yongtu ', element);
                    });
                    data.zhuangxiu.forEach(function (element) {
                        console.log('zhuangxiu ', element);
                    });
                }
            }
        });
        modal.present();
    };
    OldhoursePage.prototype.initHourseList = function () {
        this.hourseList = [
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: '900000',
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1000000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: 1100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1000000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: 1100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1000000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: 1100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1000000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: 1102000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1009000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 160000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: 1160000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1900000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 100600,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: 1160000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1000000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋1234567894561',
                shi: 2,
                ting: 2,
                mianji: 80.15,
                chaoxiang: ['南', '北'],
                xiaoqu: '37中',
                tag: [],
                price: 1100000,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍456',
                shi: 1,
                ting: 1,
                mianji: 58.14,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 1256963,
            },
            {
                thumbnail: 'https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg',
                title: '房屋介绍789',
                shi: 1,
                ting: 1,
                mianji: 58.19,
                chaoxiang: ['南'],
                xiaoqu: '赛维利',
                tag: ['地铁', '满两年', '电梯'],
                price: 100000,
            },
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], OldhoursePage.prototype, "content", void 0);
    OldhoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oldhourse',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\oldhourse\oldhourse.html"*/'<!--\n  Generated template for the OldhoursePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  [ngStyle]="{\'background-image\': \'url(\' + it.newsPic +\')\'}"\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-searchbar (input)="searchItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab right bottom>\n    <button ion-fab mini icon-only color="secondary" (click)="scrollTop()">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-slides autoplay="2000" [loop]="news.length > 1" [pager]="news.length > 1" class="oldhourse-title-slides" *ngIf="news.length > 0">\n    <ion-slide (click)="selectNews(it)" *ngFor="let it of news" class="oldhourse-text-center oldhourse-slider-item" [ngStyle]="{\'background-image\': \'url(\' + it.newsPic +\')\'}">\n      <div class="slide-text">\n        <h2>{{it?.text}}</h2>\n        <p>{{it?.content}}</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row id="fixedscroll" fixedscroll>\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectArea()">{{areaSelect}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectPrice()">{{priceSelect}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectHoursesize()">{{sizeSelect}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectMore()">{{more}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item *ngFor="let item of hourseList">\n      <ion-thumbnail item-start>\n        <img [src]="item?.thumbnail">\n      </ion-thumbnail>\n      <h2>{{item?.title}}</h2>\n      <p>{{item?.shi}}室{{item?.ting}}厅/{{item?.mianji}}㎡/{{item?.chaoxiang}}/{{item?.xiaoqu}}</p>\n      <div>\n        <span style="color:brown;">{{(item?.price/10000)|number:\'1.0-2\'}}万</span>\n        <ion-note>{{(item?.price/item?.mianji)|number:\'1.0-0\'}}元/平</ion-note>\n      </div>\n      <span style="background-color:lightgreen;color:forestgreen">{{item?.tag}}</span>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\oldhourse\oldhourse.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _d || Object])
    ], OldhoursePage);
    return OldhoursePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=oldhourse.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixedscroll_fixedscroll__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fixedscroll_fixedscroll__["a" /* FixedscrollDirective */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__fixedscroll_fixedscroll__["a" /* FixedscrollDirective */]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedscrollDirective; });
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
 * Generated class for the FixedscrollDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var FixedscrollDirective = /** @class */ (function () {
    function FixedscrollDirective(_content, _renderer, _el) {
        this._content = _content;
        this._renderer = _renderer;
        this._el = _el;
        this._isFixed = false;
        _content.ionScroll.subscribe(this._onScroll.bind(this));
    }
    FixedscrollDirective.prototype._updateRect = function () {
        this._elRect = this._el.nativeElement.getBoundingClientRect();
    };
    FixedscrollDirective.prototype._setFixed = function () {
        this._renderer.setStyle(this._el.nativeElement.parentElement, 'padding-top', this._elRect.height + "px");
        this._renderer.addClass(this._el.nativeElement, 'fixed');
        this._isFixed = true;
    };
    FixedscrollDirective.prototype._removeFixed = function () {
        this._isFixed = false;
        this._renderer.removeStyle(this._el.nativeElement.parentElement, 'padding-top');
        return this._renderer.removeClass(this._el.nativeElement, 'fixed');
    };
    FixedscrollDirective.prototype._onScroll = function (ev) {
        var d = this._content.getContentDimensions();
        if (!this._elRect) {
            return this._updateRect();
        }
        if (!this._isFixed && d.scrollTop >= this._elRect.top) {
            return this._setFixed();
        }
        if (this._isFixed && d.scrollTop < this._elRect.top) {
            return this._removeFixed();
        }
        return;
    };
    FixedscrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[fixedscroll]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], FixedscrollDirective);
    return FixedscrollDirective;
}());

//# sourceMappingURL=fixedscroll.js.map

/***/ })

});
//# sourceMappingURL=1.js.map