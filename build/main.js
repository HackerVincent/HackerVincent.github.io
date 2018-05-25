webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(213);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage1 = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.rootPage2 = __WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */];
        this.rootPage3 = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.rootPage4 = __WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */];
        this.messages = '3';
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.messageSelected = function () {
        console.log('messageSelected');
        this.messages = '';
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\tabs\tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n  <ion-tab tabIcon="home" tabTitle="首页" [root]="rootPage1" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab tabIcon="chatbubbles" tabTitle="消息" [root]="rootPage2" tabBadgeStyle="danger" [tabBadge]="messages" tabsHideOnSubPages="true" (ionSelect)="messageSelected()"></ion-tab>\n  <ion-tab tabIcon="calendar" tabTitle="看房" [root]="rootPage3" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab tabIcon="contact" tabTitle="我的" [root]="rootPage4" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectcity_selectcity__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldhourse_oldhourse__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deal_deal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__community_community__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rent_rent__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sales_sales__ = __webpack_require__(205);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.news = [
            {
                newsUrl: "https://m.baidu.com",
                newsPic: "https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg"
            },
            {
                newsUrl: "https://m.qq.com",
                newsPic: "https://imgsa.baidu.com/news/q%3D100/sign=cbb1b2264fa98226bec12f27ba83b97a/908fa0ec08fa513d06e25c8d316d55fbb2fbd91c.jpg"
            }
        ];
        this.assets = [
            {
                hourseName: "赛维利大厦",
                hourseTypeShi: 3,
                hourseTypeTing: 2,
                hoursePrice: 1100000,
                hourseDetails: "https://m.baidu.com",
                hourseUrl: "https://imgsa.baidu.com/news/q%3D100/sign=20563c7d8b01a18bf6eb164fae2e0761/0b46f21fbe096b635da6e40100338744ebf8ac20.jpg"
            },
            {
                hourseName: "水木青华小区",
                hourseTypeShi: 2,
                hourseTypeTing: 1,
                hoursePrice: 900000,
                hourseDetails: "https://m.baidu.com",
                hourseUrl: "https://imgsa.baidu.com/news/q%3D100/sign=20563c7d8b01a18bf6eb164fae2e0761/0b46f21fbe096b635da6e40100338744ebf8ac20.jpg"
            }
        ];
        this.funcData = [
            [
                {
                    pageName: __WEBPACK_IMPORTED_MODULE_4__oldhourse_oldhourse__["a" /* OldhoursePage */],
                    name: "二手房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/ershoufang.png"
                },
                {
                    pageName: "http://m.qq.com",
                    name: "新房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/xinfang.png"
                },
                {
                    pageName: __WEBPACK_IMPORTED_MODULE_7__rent_rent__["a" /* RentPage */],
                    name: "租房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/zufang.png"
                },
                {
                    pageName: __WEBPACK_IMPORTED_MODULE_8__sales_sales__["a" /* SalesPage */],
                    name: "卖房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/maifang.png"
                }
            ],
            [
                {
                    pageName: "http://m.qq.com",
                    name: "旅居",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/lvju.png"
                },
                {
                    pageName: "http://m.qq.com",
                    name: "海外",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/haiwai.png"
                },
                {
                    pageName: __WEBPACK_IMPORTED_MODULE_5__deal_deal__["a" /* DealPage */],
                    name: "成交",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/chengjiao.png"
                },
                {
                    pageName: __WEBPACK_IMPORTED_MODULE_6__community_community__["a" /* CommunityPage */],
                    name: "小区",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/xiaoqu.png"
                }
            ]
        ];
        this.myCallbackFunction = function (params) {
            return new Promise(function (resolve, reject) {
                if (typeof (params) != 'undefined') {
                    resolve('ok');
                    console.log('CallBack: ' + JSON.stringify(params));
                    _this.mycity = params.cn;
                }
                else {
                    reject(Error('error'));
                }
            });
        };
        this.mycity = '大连';
        this.currentIndex = 1;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        console.log(this.assets.length);
        // this.http.request('http://jsonplaceholder.typicode.com/photos').subscribe((res: Response) => {
        //   this.listData = res.json();
        //   console.log(this.listData);
        // });
    };
    HomePage.prototype.select = function (pageName) {
        console.log(typeof (pageName));
        console.log(pageName);
        if (typeof (pageName) === 'string') {
        }
        else {
            this.navCtrl.push(pageName);
        }
    };
    HomePage.prototype.selectcity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__selectcity_selectcity__["a" /* SelectcityPage */], {
            callback: this.myCallbackFunction
        });
    };
    HomePage.prototype.slideChanged = function () {
        this.currentIndex = ((this.myassets.getActiveIndex() + 1) > this.assets.length) ? this.assets.length : this.myassets.getActiveIndex() + 1;
        console.log('Current index is ', this.currentIndex);
    };
    HomePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            // this.items = this.items.filter((item) => {
            //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myassets'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "myassets", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-fab left top>\n    <button small ion-button icon-right color="light" (click)="selectcity()">{{mycity}}<ion-icon name="arrow-down"></ion-icon></button>\n  </ion-fab>\n  <ion-slides autoplay="2000" [loop]="news.length > 1" [pager]="news.length > 1" class="home-news-slides" *ngIf="news.length > 0">\n    <ion-slide *ngFor="let it of news">\n      <a [href]="it?.newsUrl">\n        <img [src]="it?.newsPic" />\n      </a>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides [pager]="funcData.length > 2" class="home-button-slides" *ngIf="funcData.length > 0">\n    <ion-slide>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[0]" class="home-button-column"\n          (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[1]" class="home-button-column"\n          (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide *ngIf="funcData.length > 2">\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[2]" class="home-button-column"\n          (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[3]" class="home-button-column"\n          (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide *ngIf="funcData.length > 4">\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[4]" class="home-button-column"\n          (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[5]" class="home-button-column"\n          (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides class="home-assets-slides" *ngIf="assets.length > 0" #myassets (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let asset of assets">\n      <ion-item no-lines>\n        <ion-thumbnail item-start>\n          <img [src]="asset?.hourseUrl">\n        </ion-thumbnail>\n        <h2>我的房屋资产<span class="home-assets-process">({{currentIndex}}/{{assets.length}})</span></h2>\n        <span>{{asset?.hourseName}}</span>\n        <span>{{asset?.hourseTypeShi}}室{{asset?.hourseTypeTing}}厅</span>\n        <span>{{asset?.hoursePrice/10000}}万</span>\n        <br>\n        <a [href]="asset?.hourseDetails">查看详情</a>\n      </ion-item>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectcityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the SelectcityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectcityPage = /** @class */ (function () {
    function SelectcityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callback = this.navParams.get("callback");
    }
    SelectcityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectcityPage');
    };
    SelectcityPage.prototype.selectCity = function (param) {
        var _this = this;
        console.log('selectCyty', param);
        this.callback(param).then(function () {
            _this.navCtrl.pop();
        });
    };
    SelectcityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectcity',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\selectcity\selectcity.html"*/'<!--\n  Generated template for the SelectcityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>selectcity</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-index-list>\n    <ion-index-section [index]="\'B\'">\n      <ion-index-cell (click)="selectCity({en:\'beijing\',cn:\'北京\'})">\n        北京\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'baoding\',cn:\'保定\'})">\n        保定\n      </ion-index-cell>\n    </ion-index-section>\n    <ion-index-section [index]="\'C\'">\n      <ion-index-cell (click)="selectCity({en:\'chengdu\',cn:\'成都\'})">\n        成都\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'chongqing\',cn:\'重庆\'})">\n        重庆\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'changsha\',cn:\'长沙\'})">\n        长沙\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'chengmai\',cn:\'澄迈\'})">\n        澄迈\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'chengde\',cn:\'承德\'})">\n        承德\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'chuzhou\',cn:\'滁州\'})">\n        滁州\n      </ion-index-cell>\n    </ion-index-section>\n    <ion-index-section [index]="\'D\'">\n      <ion-index-cell (click)="selectCity({en:\'dalian\',cn:\'大连\'})">\n        大连\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'dongguan\',cn:\'东莞\'})">\n        东莞\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'dingan\',cn:\'定安\'})">\n        定安\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'dali\',cn:\'大理\'})">\n        大理\n      </ion-index-cell>\n      <ion-index-cell (click)="selectCity({en:\'deyang\',cn:\'德阳\'})">\n        德阳\n      </ion-index-cell>\n    </ion-index-section>\n    <ion-index-section [index]="\'F\'">\n      <ion-index-cell (click)="selectCity({en:\'foshan\',cn:\'佛山\'})">\n        佛山\n      </ion-index-cell>\n    </ion-index-section>\n    <ion-index-section [index]="\'G\'">\n      <ion-index-cell (click)="selectCity({en:\'guangzhou\',cn:\'广州\'})">\n        广州\n      </ion-index-cell>\n    </ion-index-section>\n    <ion-index-section [index]="\'H\'">\n      <ion-index-cell (click)="selectCity({en:\'hangzhou\',cn:\'杭州\'})">\n        杭州\n      </ion-index-cell>\n    </ion-index-section>\n  </ion-index-list>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\selectcity\selectcity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SelectcityPage);
    return SelectcityPage;
}());

//# sourceMappingURL=selectcity.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldhoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_area_select_area__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_price_select_price__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_hourse_size_select_hourse_size__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_hourse_more_select_hourse_more__ = __webpack_require__(201);
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
                newsPic: 'https://imgsa.baidu.com/news/q%3D100/sign=20563c7d8b01a18bf6eb164fae2e0761/0b46f21fbe096b635da6e40100338744ebf8ac20.jpg'
            },
            {
                text: '总价10万起',
                content: '全市总价最低力荐',
                newsUrl: 'https://m.qq.com',
                newsPic: 'https://imgsa.baidu.com/news/q%3D100/sign=cbb1b2264fa98226bec12f27ba83b97a/908fa0ec08fa513d06e25c8d316d55fbb2fbd91c.jpg'
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__select_area_select_area__["a" /* SelectAreaPage */]);
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__select_hourse_size_select_hourse_size__["a" /* SelectHourseSizePage */]);
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__select_price_select_price__["a" /* SelectPricePage */]);
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__select_hourse_more_select_hourse_more__["a" /* SelectHourseMorePage */]);
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
                thumbnail: 'http://placehold.it/150/d32776',
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], OldhoursePage.prototype, "content", void 0);
    OldhoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oldhourse',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\oldhourse\oldhourse.html"*/'<!--\n  Generated template for the OldhoursePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  [ngStyle]="{\'background-image\': \'url(\' + it.newsPic +\')\'}"\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-searchbar (input)="searchItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab right bottom>\n    <button ion-fab mini icon-only color="secondary" (click)="scrollTop()">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-slides autoplay="2000" [loop]="news.length > 1" [pager]="news.length > 1" class="oldhourse-title-slides" *ngIf="news.length > 0">\n    <ion-slide (click)="selectNews(it)" *ngFor="let it of news" class="oldhourse-text-center oldhourse-slider-item" [ngStyle]="{\'background-image\': \'url(\' + it.newsPic +\')\'}">\n      <div class="slide-text">\n        <h2>{{it?.text}}</h2>\n        <p>{{it?.content}}</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row id="fixedscroll" fixedscroll style="max-height: 4rem">\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectArea()">{{areaSelect}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectPrice()">{{priceSelect}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectHoursesize()">{{sizeSelect}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col style="width:25%;display:flex;flex-direction:row;align-items:center;justify-content:center;">\n      <button ion-button clear icon-right (click)="selectMore()">{{more}}\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item *ngFor="let item of hourseList">\n      <ion-thumbnail item-start>\n        <img [src]="item?.thumbnail">\n      </ion-thumbnail>\n      <h2>{{item?.title}}</h2>\n      <p>{{item?.shi}}室{{item?.ting}}厅/{{item?.mianji}}㎡/{{item?.chaoxiang}}/{{item?.xiaoqu}}</p>\n      <div>\n        <span style="color:brown;">{{(item?.price/10000)|number:\'1.0-2\'}}万</span>\n        <ion-note>{{(item?.price/item?.mianji)|number:\'1.0-0\'}}元/平</ion-note>\n      </div>\n      <span style="background-color:lightgreen;color:forestgreen">{{item?.tag}}</span>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\oldhourse\oldhourse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], OldhoursePage);
    return OldhoursePage;
}());

//# sourceMappingURL=oldhourse.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-select-area',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-area\select-area.html"*/'<!--\n  Generated template for the SelectAreaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      选择区域\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content style="width: 30%;float: left;font-size: 10px;">\n    <ion-list>\n      <button detail-none ion-item *ngFor="let item of typeList" (click)="selectType(item)">{{item}}</button>\n    </ion-list>\n  </ion-content>\n\n  <ion-content style="width: 30%;float: left;font-size: 10px;">\n    <ion-list>\n      <ion-item-divider detail-none ion-item *ngFor="let item of yiji" (click)="selectQu(item)">{{item.key}}</ion-item-divider>\n    </ion-list>\n  </ion-content>\n\n  <ion-content style="width: 40%;float: right;font-size: 10px;">\n    <ion-list>\n      <ion-item-divider detail-none ion-item *ngFor="let item of erji" (click)="selectShangquan(item)">{{item}}</ion-item-divider>\n    </ion-list>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-area\select-area.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SelectAreaPage);
    return SelectAreaPage;
}());

//# sourceMappingURL=select-area.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the SelectPricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectPricePage = /** @class */ (function () {
    function SelectPricePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.items = [
            { value: -1, name: '不限' },
            { value: 40, name: '40万以下' },
            { value: 60, name: '40-60万' },
            { value: 80, name: '60-80万' },
            { value: 100, name: '80-100万' },
            { value: 150, name: '100-150万' },
            { value: 200, name: '150-200万' },
            { value: 201, name: '200万以上' }
        ];
        this.priceForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            "prices": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: 'rust', disabled: false })
        });
    }
    SelectPricePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectPricePage');
    };
    SelectPricePage.prototype.doSubmit = function (event) {
        console.log('Submitting form', this.priceForm.value);
        event.preventDefault();
        this.dismiss(this.priceForm.value.prices);
    };
    SelectPricePage.prototype.dismiss = function (param) {
        this.viewCtrl.dismiss(param ? param : '');
    };
    SelectPricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-price',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-price\select-price.html"*/'<!--\n  Generated template for the SelectPricePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      选择价格\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="doSubmit($event)" [formGroup]="priceForm">\n    <ion-list radio-group formControlName="prices">\n      <ion-item *ngFor="let item of items">\n        <ion-label>{{item?.name}}</ion-label>\n        <ion-radio [value]="item"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button block ion-button color="secondary" type="submit">完成</button>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-price\select-price.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SelectPricePage);
    return SelectPricePage;
}());

//# sourceMappingURL=select-price.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectHourseSizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-select-hourse-size',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-hourse-size\select-hourse-size.html"*/'<!--\n  Generated template for the SelectHourseSizePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      选择房型\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of shiSelect">\n      <ion-label>{{item?.name}}</ion-label>\n      <ion-checkbox item-right [(ngModel)]="item.checked"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <p>\n    <button ion-button color="secondary" block (click)="ok()">确定</button>\n  </p>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-hourse-size\select-hourse-size.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SelectHourseSizePage);
    return SelectHourseSizePage;
}());

//# sourceMappingURL=select-hourse-size.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectHourseMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the SelectHourseMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectHourseMorePage = /** @class */ (function () {
    function SelectHourseMorePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.dataList = {
            chaoxiang: [
                { name: '朝东', value: '0', checked: false },
                { name: '朝南', value: '1', checked: false },
                { name: '朝西', value: '2', checked: false },
                { name: '朝北', value: '3', checked: false },
                { name: '南北', value: '4', checked: false },
            ],
            mianji: [
                { name: '不限', value: '0', checked: false },
                { name: '50平以下', value: '1', checked: false },
                { name: '50-70平', value: '2', checked: false },
                { name: '70-90平', value: '3', checked: false },
                { name: '90-110平', value: '4', checked: false },
                { name: '110-130平', value: '5', checked: false },
                { name: '130-150平', value: '6', checked: false },
                { name: '150-200平', value: '7', checked: false },
                { name: '200平以上', value: '8', checked: false }
            ],
            biaoqian: [
                { name: '满二年', value: '0', checked: false },
                { name: '满五年', value: '1', checked: false },
                { name: '新上', value: '2', checked: false },
                { name: '随时看房', value: '3', checked: false },
                { name: '不看商业类', value: '4', checked: false },
                { name: '不看地下室', value: '5', checked: false },
                { name: '优选', value: '6', checked: false },
            ],
            leixing: [
                { name: '塔楼', value: '0', checked: false },
                { name: '板楼', value: '1', checked: false },
                { name: '板塔结合', value: '2', checked: false }
            ],
            louling: [
                { name: '5年以内', value: '0', checked: false },
                { name: '10年以内', value: '1', checked: false },
                { name: '10-20年', value: '2', checked: false },
                { name: '20年以上', value: '3', checked: false },
            ],
            louceng: [
                { name: '低楼层', value: '0', checked: false },
                { name: '中楼层', value: '1', checked: false },
                { name: '高楼层', value: '2', checked: false }
            ],
            zhuangxiu: [
                { name: '精装修', value: '0', checked: false },
                { name: '普通装修', value: '1', checked: false },
                { name: '毛坯房', value: '2', checked: false }
            ],
            dianti: [
                { name: '有电梯', value: '0', checked: false },
                { name: '无电梯', value: '1', checked: false }
            ],
            yongtu: [
                { name: '普通住宅', value: '0', checked: false },
                { name: '商业类', value: '1', checked: false },
                { name: '别墅', value: '2', checked: false },
                { name: '四合院', value: '3', checked: false },
                { name: '其他', value: '4', checked: false }
            ],
            quanshu: [
                { name: '商品房', value: '0', checked: false },
                { name: '公房', value: '1', checked: false },
                { name: '经适房', value: '2', checked: false },
                { name: '其他', value: '3', checked: false },
            ]
        };
    }
    SelectHourseMorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectHourseMorePage');
    };
    SelectHourseMorePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectHourseMorePage.prototype.ok = function () {
        this.viewCtrl.dismiss(this.dataList);
    };
    SelectHourseMorePage.prototype.chaoxiang = function (param) {
        console.log('chaoxiang', param);
        this.dataList.chaoxiang.forEach(function (element) {
            element.checked = false;
        });
        this.dataList.chaoxiang[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.mianji = function (param) {
        console.log('mianji', param);
        this.dataList.mianji.forEach(function (element) {
            element.checked = false;
        });
        this.dataList.mianji[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.biaoqian = function (param) {
        console.log('biaoqian', param);
        this.dataList.biaoqian[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.leixing = function (param) {
        console.log('leixing', param);
        this.dataList.leixing[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.louling = function (param) {
        console.log('louling', param);
        this.dataList.louling[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.louceng = function (param) {
        console.log('louceng', param);
        this.dataList.louceng[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.zhuangxiu = function (param) {
        console.log('zhuangxiu', param);
        this.dataList.zhuangxiu[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.dianti = function (param) {
        console.log('dianti', param);
        this.dataList.dianti[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.yongtu = function (param) {
        console.log('yongtu', param);
        this.dataList.yongtu[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage.prototype.quanshu = function (param) {
        console.log('quanshu', param);
        this.dataList.quanshu[param.value].checked = (param.checked ? false : true);
    };
    SelectHourseMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-hourse-more',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-hourse-more\select-hourse-more.html"*/'<!--\n  Generated template for the SelectHourseMorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      朝向\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="chaoxiang(dataList.chaoxiang[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.chaoxiang[0].checked]">{{dataList.chaoxiang[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="chaoxiang(dataList.chaoxiang[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.chaoxiang[1].checked]">{{dataList.chaoxiang[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="chaoxiang(dataList.chaoxiang[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.chaoxiang[2].checked]">{{dataList.chaoxiang[2].name}}</div>\n        </ion-col>\n        <ion-col (click)="chaoxiang(dataList.chaoxiang[3])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.chaoxiang[3].checked]">{{dataList.chaoxiang[3].name}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col (click)="chaoxiang(dataList.chaoxiang[4])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.chaoxiang[4].checked]">{{dataList.chaoxiang[4].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      面积\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="mianji(dataList.mianji[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[0].checked]">{{dataList.mianji[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="mianji(dataList.mianji[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[1].checked]">{{dataList.mianji[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="mianji(dataList.mianji[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[2].checked]">{{dataList.mianji[2].name}}</div>\n        </ion-col>\n        <ion-col (click)="mianji(dataList.mianji[3])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[3].checked]">{{dataList.mianji[3].name}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col (click)="mianji(dataList.mianji[4])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[4].checked]">{{dataList.mianji[4].name}}</div>\n        </ion-col>\n        <ion-col (click)="mianji(dataList.mianji[5])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[5].checked]">{{dataList.mianji[5].name}}</div>\n        </ion-col>\n        <ion-col (click)="mianji(dataList.mianji[6])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[6].checked]">{{dataList.mianji[6].name}}</div>\n        </ion-col>\n        <ion-col (click)="mianji(dataList.mianji[7])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[7].checked]">{{dataList.mianji[7].name}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col (click)="mianji(dataList.mianji[8])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.mianji[8].checked]">{{dataList.mianji[8].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-list-header>\n      标签\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="biaoqian(dataList.biaoqian[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.biaoqian[0].checked]">{{dataList.biaoqian[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="biaoqian(dataList.biaoqian[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.biaoqian[1].checked]">{{dataList.biaoqian[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="biaoqian(dataList.biaoqian[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.biaoqian[2].checked]">{{dataList.biaoqian[2].name}}</div>\n        </ion-col>\n        <ion-col (click)="biaoqian(dataList.biaoqian[3])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.biaoqian[3].checked]">{{dataList.biaoqian[3].name}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col (click)="biaoqian(dataList.biaoqian[4])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.biaoqian[4].checked]">{{dataList.biaoqian[4].name}}</div>\n        </ion-col>\n        <ion-col (click)="biaoqian(dataList.biaoqian[5])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.biaoqian[5].checked]">{{dataList.biaoqian[5].name}}</div>\n        </ion-col>\n        <ion-col (click)="biaoqian(dataList.biaoqian[6])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.biaoqian[6].checked]">{{dataList.biaoqian[6].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      类型\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="leixing(dataList.leixing[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.leixing[0].checked]">{{dataList.leixing[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="leixing(dataList.leixing[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.leixing[1].checked]">{{dataList.leixing[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="leixing(dataList.leixing[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.leixing[2].checked]">{{dataList.leixing[2].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      楼龄\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="louling(dataList.louling[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.louling[0].checked]">{{dataList.louling[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="louling(dataList.louling[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.louling[1].checked]">{{dataList.louling[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="louling(dataList.louling[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.louling[2].checked]">{{dataList.louling[2].name}}</div>\n        </ion-col>\n        <ion-col (click)="louling(dataList.louling[3])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.louling[3].checked]">{{dataList.louling[3].name}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      楼层\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="louceng(dataList.louceng[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.louceng[0].checked]">{{dataList.louceng[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="louceng(dataList.louceng[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.louceng[1].checked]">{{dataList.louceng[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="louceng(dataList.louceng[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.louceng[2].checked]">{{dataList.louceng[2].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      装修\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="zhuangxiu(dataList.zhuangxiu[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.zhuangxiu[0].checked]">{{dataList.zhuangxiu[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="zhuangxiu(dataList.zhuangxiu[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.zhuangxiu[1].checked]">{{dataList.zhuangxiu[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="zhuangxiu(dataList.zhuangxiu[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.zhuangxiu[2].checked]">{{dataList.zhuangxiu[2].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      电梯\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="dianti(dataList.dianti[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.dianti[0].checked]">{{dataList.dianti[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="dianti(dataList.dianti[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.dianti[1].checked]">{{dataList.dianti[1].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      用途\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="yongtu(dataList.yongtu[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.yongtu[0].checked]">{{dataList.yongtu[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="yongtu(dataList.yongtu[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.yongtu[1].checked]">{{dataList.yongtu[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="yongtu(dataList.yongtu[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.yongtu[2].checked]">{{dataList.yongtu[2].name}}</div>\n        </ion-col>\n        <ion-col (click)="yongtu(dataList.yongtu[3])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.yongtu[3].checked]">{{dataList.yongtu[3].name}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col (click)="yongtu(dataList.yongtu[4])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.yongtu[4].checked]">{{dataList.yongtu[4].name}}</div>\n        </ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list-header>\n      交易权属\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="quanshu(dataList.quanshu[0])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.quanshu[0].checked]">{{dataList.quanshu[0].name}}</div>\n        </ion-col>\n        <ion-col (click)="quanshu(dataList.quanshu[1])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.quanshu[1].checked]">{{dataList.quanshu[1].name}}</div>\n        </ion-col>\n        <ion-col (click)="quanshu(dataList.quanshu[2])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.quanshu[2].checked]">{{dataList.quanshu[2].name}}</div>\n        </ion-col>\n        <ion-col (click)="quanshu(dataList.quanshu[3])">\n          <div [ngClass]="{false:\'ion-col-div-sel\',true:\'ion-col-div-unsel\'}[dataList.quanshu[3].checked]">{{dataList.quanshu[3].name}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n  <p>\n    <button ion-button color="secondary" block (click)="ok()">确定</button>\n  </p>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-hourse-more\select-hourse-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SelectHourseMorePage);
    return SelectHourseMorePage;
}());

//# sourceMappingURL=select-hourse-more.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the DealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DealPage = /** @class */ (function () {
    function DealPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DealPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DealPage');
    };
    DealPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deal',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\deal\deal.html"*/'<!--\n  Generated template for the DealPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>deal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\deal\deal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DealPage);
    return DealPage;
}());

//# sourceMappingURL=deal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunityPage = /** @class */ (function () {
    function CommunityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CommunityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommunityPage');
    };
    CommunityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-community',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\community\community.html"*/'<!--\n  Generated template for the CommunityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>community</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\community\community.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CommunityPage);
    return CommunityPage;
}());

//# sourceMappingURL=community.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the RentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RentPage = /** @class */ (function () {
    function RentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RentPage');
    };
    RentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rent',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\rent\rent.html"*/'<!--\n  Generated template for the RentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rent</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\rent\rent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RentPage);
    return RentPage;
}());

//# sourceMappingURL=rent.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_community_name_select_community_name__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_block_no_select_block_no__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_unit_no_select_unit_no__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_floor_no_select_floor_no__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sale_submit_sale_submit__ = __webpack_require__(210);
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
            { index: 0, name: '小区名', pageName: __WEBPACK_IMPORTED_MODULE_2__select_community_name_select_community_name__["a" /* SelectCommunityNamePage */], edited: false },
            { index: 1, name: '楼栋号', pageName: __WEBPACK_IMPORTED_MODULE_3__select_block_no_select_block_no__["a" /* SelectBlockNoPage */], edited: false },
            { index: 2, name: '单元号', pageName: __WEBPACK_IMPORTED_MODULE_4__select_unit_no_select_unit_no__["a" /* SelectUnitNoPage */], edited: false },
            { index: 3, name: '门牌号', pageName: __WEBPACK_IMPORTED_MODULE_5__select_floor_no_select_floor_no__["a" /* SelectFloorNoPage */], edited: false }
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__sale_submit_sale_submit__["a" /* SaleSubmitPage */], { 'community': this.items[0].name, 'block': this.items[1].name, 'unit': this.items[2].name, 'floor': this.items[3].name });
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
            selector: 'page-sales',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\sales\sales.html"*/'<!--\n  Generated template for the SalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>免费发布房源</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n    <a ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{item?.name}}\n    </a>\n  </ion-list>\n  <p>\n    <button ion-button color="secondary" block (click)="nextPage()">下一步</button>\n  </p>\n  <ion-card>\n    <ion-card-header>\n      卖房全流程\n    </ion-card-header>\n    <ion-card-content>\n      1.发布房源.\n      <br> 2.核对房源.\n      <br> 3.在线销售.\n      <br> 4.签约出售.\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\sales\sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SalesPage);
    return SalesPage;
}());

//# sourceMappingURL=sales.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCommunityNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the SelectCommunityNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectCommunityNamePage = /** @class */ (function () {
    function SelectCommunityNamePage(viewCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.communitylist = [];
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            communityName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    }
    SelectCommunityNamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectCommunityNamePage');
    };
    SelectCommunityNamePage.prototype.dismiss = function (param) {
        this.viewCtrl.dismiss(param ? param : '');
    };
    SelectCommunityNamePage.prototype.processForm = function () {
        console.log(this.form.value.communityName);
        if (this.form.status === 'VALID') {
            this.dismiss(this.form.value.communityName);
        }
        else {
            this.presentAlert('输入不合法', '请输入小区名称');
        }
    };
    SelectCommunityNamePage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    SelectCommunityNamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-community-name',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-community-name\select-community-name.html"*/'<!--\n  Generated template for the SelectCommunityNamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      选择小区\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="processForm()" [formGroup]="form">\n    <ion-list>\n      <ion-item>\n        <ion-input clearInput maxlength="20" formControlName="communityName" type="text" placeholder="请输入小区名称"></ion-input>\n        <div item-content>\n          <button ion-button color="secondary" type="submit">完成</button>\n        </div>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-list inset>\n    <ion-item *ngFor="let item of communitylist">\n      {{item}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-community-name\select-community-name.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SelectCommunityNamePage);
    return SelectCommunityNamePage;
}());

//# sourceMappingURL=select-community-name.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBlockNoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
            selector: 'page-select-block-no',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-block-no\select-block-no.html"*/'<!--\n  Generated template for the SelectBlockNoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      楼栋号\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="processForm()" [formGroup]="form">\n    <ion-list>\n      <ion-item>\n        <ion-label>楼栋号</ion-label>\n        <ion-input clearInput maxlength="10" formControlName="blockName" type="text" placeholder="请输入楼栋号"></ion-input>\n        <div item-content>\n          <button ion-button color="secondary" type="submit">完成</button>\n        </div>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-list inset>\n    <ion-item *ngFor="let item of blocklist">\n      {{item}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-block-no\select-block-no.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SelectBlockNoPage);
    return SelectBlockNoPage;
}());

//# sourceMappingURL=select-block-no.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectUnitNoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the SelectUnitNoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectUnitNoPage = /** @class */ (function () {
    function SelectUnitNoPage(viewCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.unitlist = [];
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            unitName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    }
    SelectUnitNoPage.prototype.dismiss = function (param) {
        this.viewCtrl.dismiss(param ? param : '');
    };
    SelectUnitNoPage.prototype.processForm = function () {
        console.log(this.form.value.unitName);
        if (this.form.status === 'VALID') {
            this.dismiss(this.form.value.unitName);
        }
        else {
            this.presentAlert('输入不合法', '请输入单元号');
        }
    };
    SelectUnitNoPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    SelectUnitNoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectUnitNoPage');
    };
    SelectUnitNoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-unit-no',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-unit-no\select-unit-no.html"*/'<!--\n  Generated template for the SelectUnitNoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      单元号\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="processForm()" [formGroup]="form">\n    <ion-list>\n      <ion-item>\n        <ion-label>单元号</ion-label>\n        <ion-input clearInput maxlength="10" formControlName="unitName" type="text" placeholder="请输入单元号"></ion-input>\n        <div item-content>\n          <button ion-button color="secondary" type="submit">完成</button>\n        </div>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-list inset>\n    <ion-item *ngFor="let item of unitlist">\n      {{item}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-unit-no\select-unit-no.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SelectUnitNoPage);
    return SelectUnitNoPage;
}());

//# sourceMappingURL=select-unit-no.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFloorNoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the SelectFloorNoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectFloorNoPage = /** @class */ (function () {
    function SelectFloorNoPage(navParams, viewCtrl, alertCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
    }
    SelectFloorNoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectFloorNoPage');
    };
    SelectFloorNoPage.prototype.dismiss = function (param) {
        this.viewCtrl.dismiss(param ? param : '');
    };
    SelectFloorNoPage.prototype.submit = function () {
        if (this.floorNo) {
            this.dismiss(this.floorNo);
        }
        else {
            this.presentAlert('输入不合法', '请输入门牌号');
        }
    };
    SelectFloorNoPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    SelectFloorNoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-floor-no',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-floor-no\select-floor-no.html"*/'<!--\n  Generated template for the SelectFloorNoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      门牌号\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n        返回\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>门牌号</ion-label>\n    <ion-input clearInput maxlength="10" type="text" placeholder="请输入门牌号" [(ngModel)]="floorNo"></ion-input>\n    <div item-content>\n      <button ion-button color="secondary" (click)="submit()">完成</button>\n    </div>\n  </ion-item>\n\n\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\select-floor-no\select-floor-no.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SelectFloorNoPage);
    return SelectFloorNoPage;
}());

//# sourceMappingURL=select-floor-no.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleSubmitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-sale-submit',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\sale-submit\sale-submit.html"*/'<!--\n  Generated template for the SaleSubmitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>免费发布房源</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>您的期望售价</ion-list-header>\n    <ion-item>\n      <ion-label>售价</ion-label>\n      <ion-input type="tel" maxlength="10" [(ngModel)]="reqData.price" clearInput></ion-input>\n      <ion-note item-content>元</ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>您的联系信息</ion-list-header>\n    <ion-item>\n      <ion-label>称呼</ion-label>\n      <ion-input type="text" maxlength="10" [(ngModel)]="reqData.nickName" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>手机号</ion-label>\n      <ion-input type="tel" maxlength="11" placeholder="请输入手机号" [(ngModel)]="reqData.mobileNo" clearInput></ion-input>\n      <div item-content>\n        <button ion-button clear color="secondary" (click)="sendVerifyCode()">获取验证码</button>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label>验证码</ion-label>\n      <ion-input type="tel" maxlength="4" [(ngModel)]="reqData.verifyCode" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>期望出售时间</ion-label>\n      <ion-select [(ngModel)]="reqData.salesDate" okText="确定" cancelText="取消">\n        <ion-option value="1" >1个月内</ion-option>\n        <ion-option value="3">3个月内</ion-option>\n        <ion-option value="6">半年内</ion-option>\n        <ion-option value="0">观望</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <p>\n    <button ion-button color="secondary" block (click)="submit()">提交</button>\n  </p>\n\n  <ion-card>\n    <ion-card-header>\n      卖房全流程\n    </ion-card-header>\n    <ion-card-content>\n      1.发布房源.\n      <br> 2.核对房源.\n      <br> 3.在线销售.\n      <br> 4.签约出售.\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\sale-submit\sale-submit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SaleSubmitPage);
    return SaleSubmitPage;
}());

//# sourceMappingURL=sale-submit.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\message\message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-item no-lines>\n    <ion-thumbnail item-start>\n      <img src="http://placehold.it/150/24f355">\n    </ion-thumbnail>\n    <h2>小区新上二手房</h2>\n    <p>您关注的小区。。。。</p>\n  </ion-item>\n  <ion-item no-lines>\n    <ion-thumbnail item-start>\n      <img src="http://placehold.it/150/d32776">\n    </ion-thumbnail>\n    <h2>二手房源动态</h2>\n    <p>您关注的。。。。</p>\n  </ion-item>\n  <ion-item no-lines>\n    <ion-thumbnail item-start>\n      <img src="http://placehold.it/150/f66b97">\n    </ion-thumbnail>\n    <h2>链家帮帮</h2>\n    <p>欢迎使用帮帮</p>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        this.pet = "puppies";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\schedule\schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://placehold.it/150/f66b97">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://placehold.it/150/f66b97">\n        </ion-thumbnail>\n        <h2>Oscar</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://placehold.it/150/f66b97">\n        </ion-thumbnail>\n        <h2>Zoey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://placehold.it/150/f66b97">\n        </ion-thumbnail>\n        <h2>Otto</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://placehold.it/150/56a8c2">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://placehold.it/150/56a8c2">\n        </ion-thumbnail>\n        <h2>Milo</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://placehold.it/150/56a8c2">\n        </ion-thumbnail>\n        <h2>Bandit</h2>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\schedule\schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_cell__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexSectionComponent = /** @class */ (function () {
    function IndexSectionComponent(elementRef) {
        this.elementRef = elementRef;
        this._current = false;
    }
    IndexSectionComponent.prototype.getElementRef = function () {
        return this.elementRef;
    };
    IndexSectionComponent.prototype.ngAfterViewChecked = function () {
        // setTimeout(()=>{
        //   if (this._listOfIndexCell && this._listOfIndexCell.length) {
        //     const listArray = this._listOfIndexCell.toArray();
        //     listArray[listArray.length - 1]._lastItem = true;
        //   }
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], IndexSectionComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__index_cell__["a" /* IndexCellComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], IndexSectionComponent.prototype, "_listOfIndexCell", void 0);
    IndexSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-index-section',
            template: "\n        <div class=\"index-section\" [class.index-section-current]=\"_current\">\n              <!-- group-->\n              <div class=\"index-section-index\" >\n                {{index}}\n              </div>\n              <!--\u5206\u7EC4\u4E0B\u7684\u8BE6\u7EC6\u5185\u5BB9-->\n              <div class=\"index-section-main\">\n                <ng-content>\n                </ng-content>\n              </div>\n          </div>\n      ",
            styles: ["\n      .index-section-index{\n        margin: 0;\n        padding: 2px 10px 2px 10px;\n        background-color: #fafafa;\n        border-bottom: 1px solid #dedede;\n      }\n      .index-section-main{\n        /*border-bottom: 1px solid #dedede;*/\n      }\n      .index-section-current .index-section-index{\n          position: sticky;\n          position: -webkit-sticky;\n          top: 0px;\n          left: 0px;\n          width: 100%;\n          z-index: 3;\n          transform: translateZ(0px);\n      }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], IndexSectionComponent);
    return IndexSectionComponent;
}());

//# sourceMappingURL=index-section.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexCellComponent = /** @class */ (function () {
    function IndexCellComponent() {
    }
    IndexCellComponent.prototype.ngOnInit = function () { };
    IndexCellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-index-cell',
            template: "\n      <div class=\"index-cell\">\n        <div class=\"index-cell-item\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    ",
            styles: ["\n      .index-cell{\n        background-color: #fff;\n        padding-left:10px\n      }\n      .index-cell-item{\n        box-sizing: border-box;\n        color: inherit;\n        min-height: 48px;\n        display: block;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none;\n        border-bottom: 1px solid #dcd8d8;\n        width: 100%;\n        display: flex;\n        align-items: center;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], IndexCellComponent);
    return IndexCellComponent;
}());

//# sourceMappingURL=index-cell.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_message_message__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_selectcity_selectcity__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_oldhourse_oldhourse__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_deal_deal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_community_community__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_evaluate_evaluate__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_rent_rent__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sales_sales__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_select_community_name_select_community_name__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_select_block_no_select_block_no__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_select_unit_no_select_unit_no__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_select_floor_no_select_floor_no__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sale_submit_sale_submit__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_select_area_select_area__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_select_price_select_price__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_select_hourse_size_select_hourse_size__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_select_hourse_more_select_hourse_more__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_fixedscroll_fixedscroll__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_index_list_index_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_index_list_index_cell__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_index_list_index_section__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_29__directives_fixedscroll_fixedscroll__["a" /* FixedscrollDirective */],
                __WEBPACK_IMPORTED_MODULE_30__components_index_list_index_list__["a" /* IndexListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_index_list_index_cell__["a" /* IndexCellComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_index_list_index_section__["a" /* IndexSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_selectcity_selectcity__["a" /* SelectcityPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_oldhourse_oldhourse__["a" /* OldhoursePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_deal_deal__["a" /* DealPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_community_community__["a" /* CommunityPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_evaluate_evaluate__["a" /* EvaluatePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_rent_rent__["a" /* RentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sales_sales__["a" /* SalesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_select_community_name_select_community_name__["a" /* SelectCommunityNamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_select_block_no_select_block_no__["a" /* SelectBlockNoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_select_unit_no_select_unit_no__["a" /* SelectUnitNoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_select_floor_no_select_floor_no__["a" /* SelectFloorNoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sale_submit_sale_submit__["a" /* SaleSubmitPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_select_area_select_area__["a" /* SelectAreaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_select_price_select_price__["a" /* SelectPricePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_select_hourse_size_select_hourse_size__["a" /* SelectHourseSizePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_select_hourse_more_select_hourse_more__["a" /* SelectHourseMorePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: "返回"
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/community.module#CommunityPageModule', name: 'CommunityPage', segment: 'community', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deal/deal.module#DealPageModule', name: 'DealPage', segment: 'deal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evaluate/evaluate.module#EvaluatePageModule', name: 'EvaluatePage', segment: 'evaluate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oldhourse/oldhourse.module#OldhoursePageModule', name: 'OldhoursePage', segment: 'oldhourse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rent/rent.module#RentPageModule', name: 'RentPage', segment: 'rent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sale-submit/sale-submit.module#SaleSubmitPageModule', name: 'SaleSubmitPage', segment: 'sale-submit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sales/sales.module#SalesPageModule', name: 'SalesPage', segment: 'sales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-area/select-area.module#SelectAreaPageModule', name: 'SelectAreaPage', segment: 'select-area', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-block-no/select-block-no.module#SelectBlockNoPageModule', name: 'SelectBlockNoPage', segment: 'select-block-no', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-community-name/select-community-name.module#SelectCommunityNamePageModule', name: 'SelectCommunityNamePage', segment: 'select-community-name', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-floor-no/select-floor-no.module#SelectFloorNoPageModule', name: 'SelectFloorNoPage', segment: 'select-floor-no', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-hourse-more/select-hourse-more.module#SelectHourseMorePageModule', name: 'SelectHourseMorePage', segment: 'select-hourse-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-hourse-size/select-hourse-size.module#SelectHourseSizePageModule', name: 'SelectHourseSizePage', segment: 'select-hourse-size', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-price/select-price.module#SelectPricePageModule', name: 'SelectPricePage', segment: 'select-price', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-unit-no/select-unit-no.module#SelectUnitNoPageModule', name: 'SelectUnitNoPage', segment: 'select-unit-no', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectcity/selectcity.module#SelectcityPageModule', name: 'SelectcityPage', segment: 'selectcity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_30__components_index_list_index_list__["a" /* IndexListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_index_list_index_cell__["a" /* IndexCellComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_index_list_index_section__["a" /* IndexSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_selectcity_selectcity__["a" /* SelectcityPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_oldhourse_oldhourse__["a" /* OldhoursePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_deal_deal__["a" /* DealPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_community_community__["a" /* CommunityPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_evaluate_evaluate__["a" /* EvaluatePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_rent_rent__["a" /* RentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sales_sales__["a" /* SalesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_select_community_name_select_community_name__["a" /* SelectCommunityNamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_select_block_no_select_block_no__["a" /* SelectBlockNoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_select_unit_no_select_unit_no__["a" /* SelectUnitNoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_select_floor_no_select_floor_no__["a" /* SelectFloorNoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sale_submit_sale_submit__["a" /* SaleSubmitPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_select_area_select_area__["a" /* SelectAreaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_select_price_select_price__["a" /* SelectPricePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_select_hourse_size_select_hourse_size__["a" /* SelectHourseSizePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_select_hourse_more_select_hourse_more__["a" /* SelectHourseMorePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\map\map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the EvaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvaluatePage = /** @class */ (function () {
    function EvaluatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EvaluatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EvaluatePage');
    };
    EvaluatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evaluate',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\evaluate\evaluate.html"*/'<!--\n  Generated template for the EvaluatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>evaluate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHome\src\pages\evaluate\evaluate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EvaluatePage);
    return EvaluatePage;
}());

//# sourceMappingURL=evaluate.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedscrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_section__ = __webpack_require__(214);
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
 * Generated class for the IndexListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IndexListComponent = /** @class */ (function () {
    function IndexListComponent() {
        this._flag = true;
        this._indexes = []; //右侧导航
        this._offsetTops = []; // 每个IndexSection 的offsetTop
        this._indicatorTime = null;
        this._showModal = false;
        this.hasTop = false;
    }
    IndexListComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._flag && this._listOfIndexSection) {
            this._listOfIndexSection.forEach(function (section) {
                _this._indexes.push(section.index);
                var offsetTop = section.getElementRef().nativeElement.offsetTop;
                _this._offsetTops.push(offsetTop);
            });
            this._flag = false;
            if (this.hasTop) {
                this._indexes.unshift('#');
                this._offsetTops.unshift(0);
            }
        }
    };
    IndexListComponent.prototype.onScroll = function (e) {
        var _this = this;
        e.preventDefault();
        var scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;
        this._offsetTops.forEach(function (v, i) {
            if (scrollTopOffsetTop >= v) {
                _this._currentIndicator = _this._indexes[i];
                //
                _this.setCurrentSection(_this._currentIndicator);
            }
        });
    };
    IndexListComponent.prototype.touchstart = function (e) {
        this._navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
    };
    IndexListComponent.prototype.touchmove = function (e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
    };
    IndexListComponent.prototype.touchend = function (e) {
        var _this = this;
        this._indicatorTime = setTimeout(function () {
            _this._showModal = false;
            _this._currentIndicator = '';
        }, 500);
    };
    IndexListComponent.prototype.scrollList = function (y) {
        var currentItem = document.elementFromPoint(this._navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('index-bar')) {
            return;
        }
        this._currentIndicator = currentItem['innerText'];
        var index = this._indexes.indexOf(this._currentIndicator);
        this.scrollContent.nativeElement.scrollTop = this._offsetTops[index];
        this._showModal = true;
        if (this._indicatorTime) {
            clearTimeout(this._indicatorTime);
        }
    };
    IndexListComponent.prototype.setCurrentSection = function (currentindex) {
        var listArray = this._listOfIndexSection.toArray();
        listArray.forEach(function (section) {
            if (section.index === currentindex) {
                section._current = true;
            }
            else {
                section._current = false;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IndexListComponent.prototype, "hasTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('top'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], IndexListComponent.prototype, "top", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__index_section__["a" /* IndexSectionComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], IndexListComponent.prototype, "_listOfIndexSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], IndexListComponent.prototype, "scrollContent", void 0);
    IndexListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-index-list',
            template: "\n    <div class=\"index-list\">\n      <div class=\"index-list-wrapper\"  #scrollContent tappable (scroll)=\"onScroll($event)\">\n        <ng-content select=\"[top]\"></ng-content>\n        <ng-content></ng-content>\n      </div>\n      <div class=\"index-list-nav\" (touchstart)=\"touchstart($event)\" (touchmove)=\"touchmove($event)\" (touchend)=\"touchend($event)\">\n        <div class=\"index-bar\" *ngFor=\"let index of _indexes;\"\n             [class.index-list-nav-activate]=\"index === _currentIndicator\">\n          {{index}}\n        </div>\n      </div>\n      \n      <div class=\"modal\" [class.show]=\"_showModal\">\n        {{_currentIndicator}}\n      </div>\n    </div>\n  ",
            styles: ["\n    ::-webkit-scrollbar {\n      width: 0\n    }\n    .index-list{\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      height: 100%;\n      overflow: hidden;\n      transform:translate(0,0);\n    }\n    .index-list-wrapper{\n      width: 100%;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n    }\n    .index-list-nav{\n      width:6%;\n      position: absolute;\n      top: 44px;\n      right: 0;\n      display: flex;\n      justify-content:center;\n      flex-direction: column;\n      text-align: center;\n      background-color: rgba(245, 245, 245, 0.3);\n      height: 100%;\n      z-index: 1000;\n      -webkit-touch-callout: none;\n    }\n    .index-bar{\n      padding: 2px 6px;\n      font-size: 10px;\n    }\n    .index-list-nav-activate{\n      color: red;\n    }\n    .modal {\n      top: 50%;\n      left: 50%;\n      z-index: 100;\n      position: fixed;\n      pointer-events: none;\n      width: 20vw;\n      height: 20vw;\n      line-height: 20vw;\n      margin-left: -10vw;\n      margin-top: -10vw;\n      color: #fff;\n      font-size: 5em;\n      text-align: center;\n      border-radius: 8px;\n      background-color: rgba(0, 0, 0, 0.52);\n      -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      -webkit-transition: opacity .5s;\n      -o-transition: opacity .5s;\n      transition: opacity .5s;\n      opacity: 0;\n    }\n    .modal.show {\n      opacity: 1;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], IndexListComponent);
    return IndexListComponent;
}());

//# sourceMappingURL=index-list.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map