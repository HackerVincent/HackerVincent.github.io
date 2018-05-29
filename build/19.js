webpackJsonp([19],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(193);
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
                newsPic: "https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg"
            }
        ];
        this.assets = [
            {
                hourseName: "赛维利大厦",
                hourseTypeShi: 3,
                hourseTypeTing: 2,
                hoursePrice: 1100000,
                hourseDetails: "https://m.baidu.com",
                hourseUrl: "https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg"
            },
            {
                hourseName: "水木青华小区",
                hourseTypeShi: 2,
                hourseTypeTing: 1,
                hoursePrice: 900000,
                hourseDetails: "https://m.baidu.com",
                hourseUrl: "https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg"
            }
        ];
        this.funcData = [
            [
                {
                    pageName: 'OldhoursePage',
                    name: "二手房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/ershoufang.png"
                },
                {
                    pageName: "http://m.qq.com",
                    name: "新房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/xinfang.png"
                },
                {
                    pageName: 'RentPage',
                    name: "租房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/zufang.png"
                },
                {
                    pageName: 'SalesPage',
                    name: "卖房",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/maifang.png"
                }
            ],
            [
                // {
                //   pageName: "http://m.qq.com",
                //   name: "旅居",
                //   icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/lvju.png"
                // },
                // {
                //   pageName: "http://m.qq.com",
                //   name: "海外",
                //   icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/haiwai.png"
                // },
                {
                    pageName: 'DealPage',
                    name: "成交",
                    icon: "https://s1.ljcdn.com/hulk-web/static/m/images/home/route_icon/chengjiao.png"
                },
                {
                    pageName: 'CommunityPage',
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
        console.log(pageName);
        var fdStart = pageName.indexOf('http://');
        if (fdStart == 0) {
        }
        else {
            this.navCtrl.push(pageName);
        }
    };
    HomePage.prototype.selectcity = function () {
        this.navCtrl.push('SelectcityPage', {
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "myassets", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-fab left top>\n    <button small ion-button icon-right color="light" (click)="selectcity()">{{mycity}}\n      <ion-icon name="arrow-down"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-slides autoplay="2000" [loop]="news.length > 1" [pager]="news.length > 1" class="home-news-slides" *ngIf="news.length > 0">\n    <ion-slide *ngFor="let it of news">\n      <a [href]="it?.newsUrl">\n        <img [src]="it?.newsPic" />\n      </a>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides [pager]="funcData.length > 2" class="home-button-slides" *ngIf="funcData.length > 0">\n    <ion-slide>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[0]" class="home-button-column" (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[1]" class="home-button-column" (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide *ngIf="funcData.length > 2">\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[2]" class="home-button-column" (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[3]" class="home-button-column" (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide *ngIf="funcData.length > 4">\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[4]" class="home-button-column" (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n      <div class="home-button-row">\n        <div *ngFor="let data of funcData[5]" class="home-button-column" (click)="select(data.pageName)">\n          <img [src]="data?.icon" style="height: 42px" />\n          <div class="home-button-column-text">{{data.name}}</div>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides class="home-assets-slides" *ngIf="assets.length > 0" #myassets (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let asset of assets">\n      <ion-item no-lines>\n        <ion-thumbnail item-start>\n          <img [src]="asset?.hourseUrl">\n        </ion-thumbnail>\n        <h2>我的房屋资产\n          <span class="home-assets-process">({{currentIndex}}/{{assets.length}})</span>\n        </h2>\n        <span>{{asset?.hourseName}}</span>\n        <span>{{asset?.hourseTypeShi}}室{{asset?.hourseTypeTing}}厅</span>\n        <span>{{asset?.hoursePrice/10000}}万</span>\n        <br>\n        <a [href]="asset?.hourseDetails">查看详情</a>\n      </ion-item>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\learn\oschina\hybirdapp\ionic3\theHourse\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=19.js.map