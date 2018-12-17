(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-farmer-layout-farmer-layout-module"],{

/***/ "./src/app/core/farm.ts":
/*!******************************!*\
  !*** ./src/app/core/farm.ts ***!
  \******************************/
/*! exports provided: Farm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Farm", function() { return Farm; });
var Farm = /** @class */ (function () {
    function Farm() {
    }
    return Farm;
}());



/***/ }),

/***/ "./src/app/core/income.ts":
/*!********************************!*\
  !*** ./src/app/core/income.ts ***!
  \********************************/
/*! exports provided: Income */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Income", function() { return Income; });
var Income = /** @class */ (function () {
    function Income() {
    }
    return Income;
}());



/***/ }),

/***/ "./src/app/core/outcome.ts":
/*!*********************************!*\
  !*** ./src/app/core/outcome.ts ***!
  \*********************************/
/*! exports provided: Outcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Outcome", function() { return Outcome; });
var Outcome = /** @class */ (function () {
    function Outcome() {
    }
    return Outcome;
}());



/***/ }),

/***/ "./src/app/core/production.ts":
/*!************************************!*\
  !*** ./src/app/core/production.ts ***!
  \************************************/
/*! exports provided: Production */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Production", function() { return Production; });
var Production = /** @class */ (function () {
    function Production() {
    }
    return Production;
}());



/***/ }),

/***/ "./src/app/edit-farm/edit-farm.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-farm/edit-farm.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-panel{\r\n    padding: 0px;\r\n}\r\n.map{\r\n    height: 25rem;\r\n    border-radius: 0rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1mYXJtL2VkaXQtZmFybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZmFybS9lZGl0LWZhcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtcGFuZWx7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLm1hcHtcclxuICAgIGhlaWdodDogMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/edit-farm/edit-farm.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-farm/edit-farm.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Farm</h5>\n        </div>\n        <div class=\"map-panel\">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n        <div class=\"card-body\">\n          <form #editFarmForm=\"ngForm\" (ngSubmit)=\"onSubmit(editFarmForm)\">\n            <input type=\"hidden\" name=\"fid\" #fid=\"ngModel\" [(ngModel)]=\"farmID\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"editedFarm.farmerid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedFarm.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Region</label>\n                  <select class=\"form-control\" name=\"region\" #region=\"ngModel\" [(ngModel)]=\"editedFarm.region\" required>\n                    <option disabled selected value=\"\">Select region</option>\n                    <option *ngFor=\"let regionName of regionsList;\" [value]=\"regionName\">{{regionName}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" [ngModel]=\"editedFarm.registrationDate | date:'yyyy-MM-dd'\"\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Longitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"longitude\" #longitude=\"ngModel\" [(ngModel)]=\"editedFarm.longitude\"\n                    placeholder=\"Longitude\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Latitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"latitude\" #latitude=\"ngModel\" [(ngModel)]=\"editedFarm.latitude\"\n                    placeholder=\"Latitude\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Size in m<sup>2</sup></label>\n                  <input type=\"number\" class=\"form-control\" name=\"size\" #size=\"ngModel\" [(ngModel)]=\"editedFarm.size\"\n                    placeholder=\"Size\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Soil</label>\n                  <select class=\"form-control\" name=\"soil\" #soil=\"ngModel\" [(ngModel)]=\"editedFarm.soil\" required>\n                    <option disabled selected value=\"\">Select soil type</option>\n                    <option *ngFor=\"let soilTypes of soilTypesList;\" [value]=\"soilTypes\">{{soilTypes}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\"\n                    [(ngModel)]=\"editedFarm.description\" placeholder=\"Give a description about the farm\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editFarmForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-farm/edit-farm.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-farm/edit-farm.component.ts ***!
  \**************************************************/
/*! exports provided: EditFarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFarmComponent", function() { return EditFarmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var _core_farm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/farm */ "./src/app/core/farm.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditFarmComponent = /** @class */ (function () {
    function EditFarmComponent(router, route, afDb, contentService, http) {
        this.router = router;
        this.route = route;
        this.afDb = afDb;
        this.contentService = contentService;
        this.http = http;
        this.regionsList = ['Heraklion Crete', 'Chania Crete', 'Rehtimnon Crete', 'Lasithi Crete'];
        this.soilTypesList = ['Loam', 'Clay', 'Sand', 'Silt', 'Peat', 'Chalk'];
        this.editedFarm = new _core_farm__WEBPACK_IMPORTED_MODULE_4__["Farm"]();
        this.getFarm();
    }
    EditFarmComponent.prototype.ngOnInit = function () { };
    EditFarmComponent.prototype.getJSON = function () {
        return this.http.get('./assets/mapstyle.json');
    };
    EditFarmComponent.prototype.getFarm = function () {
        var _this = this;
        this.farmID = this.route.snapshot.paramMap.get('key');
        this.farmReference = this.afDb.object('farms/' + this.farmID);
        this.farmReference.snapshotChanges().subscribe(function (action) {
            _this.editedFarm = action.payload.val();
            _this.initMap(new google.maps.LatLng(_this.editedFarm.latitude, _this.editedFarm.longitude));
        });
    };
    EditFarmComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.updateFarm(form.value);
        }
        this.router.navigate(['/farms']);
    };
    EditFarmComponent.prototype.onCancel = function () {
        this.router.navigate(['/farms']);
    };
    EditFarmComponent.prototype.initMap = function (coordinates) {
        var _this = this;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: coordinates,
            scrollwheel: false
        });
        var marker = new google.maps.Marker({ position: coordinates });
        marker.setMap(map);
        map.addListener('click', function (event) {
            marker.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
            map.panTo(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
            _this.editedFarm.latitude = event.latLng.lat();
            _this.editedFarm.longitude = event.latLng.lng();
        });
    };
    EditFarmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-farm',
            template: __webpack_require__(/*! ./edit-farm.component.html */ "./src/app/edit-farm/edit-farm.component.html"),
            styles: [__webpack_require__(/*! ./edit-farm.component.css */ "./src/app/edit-farm/edit-farm.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EditFarmComponent);
    return EditFarmComponent;
}());



/***/ }),

/***/ "./src/app/edit-income/edit-income.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-income/edit-income.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaW5jb21lL2VkaXQtaW5jb21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-income/edit-income.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-income/edit-income.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Income</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #editIncomeForm=\"ngForm\" (ngSubmit)=\"onSubmit(editIncomeForm)\">\n            <input type=\"hidden\" name=\"iid\" #iid=\"ngModel\" [(ngModel)]=\"incomeID\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"editedIncome.farmerid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedIncome.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" [ngModel]=\"editedIncome.registrationDate | date:'yyyy-MM-dd'\"\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" [(ngModel)]=\"editedIncome.ammount\"\n                    placeholder=\"Ammount in €\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\"\n                    [(ngModel)]=\"editedIncome.description\" placeholder=\"Give a description about the intcome\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editIncomeForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-income/edit-income.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-income/edit-income.component.ts ***!
  \******************************************************/
/*! exports provided: EditIncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIncomeComponent", function() { return EditIncomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var _core_income__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/income */ "./src/app/core/income.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditIncomeComponent = /** @class */ (function () {
    function EditIncomeComponent(router, route, afDb, contentService) {
        this.router = router;
        this.route = route;
        this.afDb = afDb;
        this.contentService = contentService;
        this.editedIncome = new _core_income__WEBPACK_IMPORTED_MODULE_4__["Income"]();
        this.getIncome();
    }
    EditIncomeComponent.prototype.ngOnInit = function () { };
    EditIncomeComponent.prototype.getIncome = function () {
        var _this = this;
        this.incomeID = this.route.snapshot.paramMap.get('key');
        this.incomeReference = this.afDb.object('incomes/' + this.incomeID);
        this.incomeReference.snapshotChanges().subscribe(function (action) {
            _this.editedIncome = action.payload.val();
        });
    };
    EditIncomeComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.updateIncome(form.value);
        }
        this.router.navigate(['/incomes']);
    };
    EditIncomeComponent.prototype.onCancel = function () {
        this.router.navigate(['/incomes']);
    };
    EditIncomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-income',
            template: __webpack_require__(/*! ./edit-income.component.html */ "./src/app/edit-income/edit-income.component.html"),
            styles: [__webpack_require__(/*! ./edit-income.component.css */ "./src/app/edit-income/edit-income.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], EditIncomeComponent);
    return EditIncomeComponent;
}());



/***/ }),

/***/ "./src/app/edit-outcome/edit-outcome.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-outcome/edit-outcome.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtb3V0Y29tZS9lZGl0LW91dGNvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-outcome/edit-outcome.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-outcome/edit-outcome.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Outcome</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #editOutcomeForm=\"ngForm\" (ngSubmit)=\"onSubmit(editOutcomeForm)\">\n            <input type=\"hidden\" name=\"oid\" #oid=\"ngModel\" [(ngModel)]=\"outcomeID\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"editedOutcome.farmerid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedOutcome.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" [ngModel]=\"editedOutcome.registrationDate | date:'yyyy-MM-dd'\"\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" [(ngModel)]=\"editedOutcome.ammount\"\n                    placeholder=\"Ammount in €\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\"\n                    [(ngModel)]=\"editedOutcome.description\" placeholder=\"Give a description about the outcome\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editOutcomeForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-outcome/edit-outcome.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-outcome/edit-outcome.component.ts ***!
  \********************************************************/
/*! exports provided: EditOutcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOutcomeComponent", function() { return EditOutcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var _core_outcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/outcome */ "./src/app/core/outcome.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditOutcomeComponent = /** @class */ (function () {
    function EditOutcomeComponent(router, route, afDb, contentService) {
        this.router = router;
        this.route = route;
        this.afDb = afDb;
        this.contentService = contentService;
        this.editedOutcome = new _core_outcome__WEBPACK_IMPORTED_MODULE_4__["Outcome"]();
        this.getOutcome();
    }
    EditOutcomeComponent.prototype.ngOnInit = function () { };
    EditOutcomeComponent.prototype.getOutcome = function () {
        var _this = this;
        this.outcomeID = this.route.snapshot.paramMap.get('key');
        this.outcomeReference = this.afDb.object('outcomes/' + this.outcomeID);
        this.outcomeReference.snapshotChanges().subscribe(function (action) {
            _this.editedOutcome = action.payload.val();
        });
    };
    EditOutcomeComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.updateOutcome(form.value);
        }
        this.router.navigate(['/outcomes']);
    };
    EditOutcomeComponent.prototype.onCancel = function () {
        this.router.navigate(['/outcomes']);
    };
    EditOutcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-outcome',
            template: __webpack_require__(/*! ./edit-outcome.component.html */ "./src/app/edit-outcome/edit-outcome.component.html"),
            styles: [__webpack_require__(/*! ./edit-outcome.component.css */ "./src/app/edit-outcome/edit-outcome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], EditOutcomeComponent);
    return EditOutcomeComponent;
}());



/***/ }),

/***/ "./src/app/edit-production/edit-production.component.css":
/*!***************************************************************!*\
  !*** ./src/app/edit-production/edit-production.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZHVjdGlvbi9lZGl0LXByb2R1Y3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-production/edit-production.component.html":
/*!****************************************************************!*\
  !*** ./src/app/edit-production/edit-production.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Production</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #editProductionForm=\"ngForm\" (ngSubmit)=\"onSubmit(editProductionForm)\">\n            <input type=\"hidden\" name=\"pid\" #pid=\"ngModel\" [(ngModel)]=\"productionID\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"editedProduction.farmerid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedProduction.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" [ngModel]=\"editedProduction.registrationDate | date:'yyyy-MM-dd'\"\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount Weight</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammountWeight\" #ammountWeight=\"ngModel\" [(ngModel)]=\"editedProduction.ammountWeight\"\n                    placeholder=\"Ammount of weight in L\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" [(ngModel)]=\"editedProduction.ammount\"\n                    placeholder=\"Ammount in €\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\"\n                    [(ngModel)]=\"editedProduction.description\" placeholder=\"Give a description about the production\"\n                    required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editProductionForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-production/edit-production.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/edit-production/edit-production.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductionComponent", function() { return EditProductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var _core_production__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/production */ "./src/app/core/production.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProductionComponent = /** @class */ (function () {
    function EditProductionComponent(router, route, afDb, contentService) {
        this.router = router;
        this.route = route;
        this.afDb = afDb;
        this.contentService = contentService;
        this.editedProduction = new _core_production__WEBPACK_IMPORTED_MODULE_4__["Production"]();
        this.getProduction();
    }
    EditProductionComponent.prototype.ngOnInit = function () { };
    EditProductionComponent.prototype.getProduction = function () {
        var _this = this;
        this.productionID = this.route.snapshot.paramMap.get('key');
        this.productionReference = this.afDb.object('production/' + this.productionID);
        this.productionReference.snapshotChanges().subscribe(function (action) {
            _this.editedProduction = action.payload.val();
        });
    };
    EditProductionComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.updateProduction(form.value);
        }
        this.router.navigate(['/production']);
    };
    EditProductionComponent.prototype.onCancel = function () {
        this.router.navigate(['/production']);
    };
    EditProductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-production',
            template: __webpack_require__(/*! ./edit-production.component.html */ "./src/app/edit-production/edit-production.component.html"),
            styles: [__webpack_require__(/*! ./edit-production.component.css */ "./src/app/edit-production/edit-production.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], EditProductionComponent);
    return EditProductionComponent;
}());



/***/ }),

/***/ "./src/app/farmer-dashboard/farmer-dashboard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/farmer-dashboard/farmer-dashboard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-panel{\r\n    padding: 0px;\r\n}\r\n.map{\r\n    height: 25rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyLWRhc2hib2FyZC9mYXJtZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZmFybWVyLWRhc2hib2FyZC9mYXJtZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLXBhbmVse1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5tYXB7XHJcbiAgICBoZWlnaHQ6IDI1cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/farmer-dashboard/farmer-dashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/farmer-dashboard/farmer-dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-lg\">\n  <canvas baseChart id=\"mainChart\" [datasets]=\"mainChartData\" [labels]=\"mainChartLabels\" [colors]=\"mainChartColors\"\n    [options]=\"mainChartOptions\" [chartType]=\"mainChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n</div>\n\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">General</h5>\n          <h4 class=\"card-title\">Financial Measures</h4>\n          <!-- <div ngbDropdown>\n            <button type=\"button\" class=\"btn btn-round btn-default dropdown-toggle btn-simple btn-icon no-caret\"\n              ngbDropdownToggle>\n              <i class=\"now-ui-icons loader_gear\"></i>\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu-right\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item text-danger\" href=\"#\">Remove Data</a>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"measuresChart\" [datasets]=\"measuresChartData\" [labels]=\"measuresChartLabels\" [colors]=\"measuresChartColors\"\n              [options]=\"measuresChartOptions\" [chartType]=\"measuresChartType\" (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_chat-round\"></i> General incomes vs outcomes.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-6\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">2018</h5>\n          <h4 class=\"card-title\">Incomes</h4>\n          <!-- <div ngbDropdown>\n            <button type=\"button\" class=\"btn btn-round btn-default dropdown-toggle btn-simple btn-icon no-caret\"\n              ngbDropdownToggle>\n              <i class=\"now-ui-icons loader_gear\"></i>\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu-right\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item text-danger\" href=\"#\">Remove Data</a>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"incomesChart\" [datasets]=\"incomesChartData\" [labels]=\"incomesChartLabels\" [colors]=\"incomesChartColors\"\n              [options]=\"incomesChartOptions\" [chartType]=\"incomesChartType\" (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_chat-round\"></i> Monthly incomes in €.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-6\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">2018</h5>\n          <h4 class=\"card-title\">Outcomes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"outcomesChart\" [datasets]=\"outcomesChartData\" [labels]=\"outcomesChartLabels\" [colors]=\"outcomesChartColors\"\n              [options]=\"outcomesChartOptions\" [chartType]=\"outcomesChartType\" (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_chat-round\"></i> Monthly outcomes in €.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"map-panel\">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card  card-tasks\">\n        <div class=\"card-header \">\n          <h5 class=\"card-category\">Backend development</h5>\n          <h4 class=\"card-title\">Tasks</h4>\n        </div>\n        <div class=\"card-body \">\n          <div class=\"table-full-width table-responsive\">\n            <table class=\"table\">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" checked>\n                        <span class=\"form-check-sign\"></span>\n                      </label>\n                    </div>\n                  </td>\n                  <td class=\"text-left\">Sign contract for \"What are conference organizers afraid of?\"</td>\n                  <td class=\"td-actions text-right\">\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\"\n                      data-original-title=\"Edit Task\">\n                      <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                    </button>\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\"\n                      data-original-title=\"Remove\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\">\n                        <span class=\"form-check-sign\"></span>\n                      </label>\n                    </div>\n                  </td>\n                  <td class=\"text-left\">Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                  <td class=\"td-actions text-right\">\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\"\n                      data-original-title=\"Edit Task\">\n                      <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                    </button>\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\"\n                      data-original-title=\"Remove\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" checked>\n                        <span class=\"form-check-sign\"></span>\n                      </label>\n                    </div>\n                  </td>\n                  <td class=\"text-left\">Flooded: One year later, assessing what was lost and what was found when a\n                    ravaging rain swept through metro Detroit\n                  </td>\n                  <td class=\"td-actions text-right\">\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\"\n                      data-original-title=\"Edit Task\">\n                      <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                    </button>\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\"\n                      data-original-title=\"Remove\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"now-ui-icons loader_refresh spin\"></i> Updated 3 minutes ago\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">All Persons List</h5>\n          <h4 class=\"card-title\"> Employees Stats</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-right\">\n                  Salary\n                </th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    Dakota Rice\n                  </td>\n                  <td>\n                    Niger\n                  </td>\n                  <td>\n                    Oud-Turnhout\n                  </td>\n                  <td class=\"text-right\">\n                    $36,738\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Minerva Hooper\n                  </td>\n                  <td>\n                    Curaçao\n                  </td>\n                  <td>\n                    Sinaai-Waas\n                  </td>\n                  <td class=\"text-right\">\n                    $23,789\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Sage Rodriguez\n                  </td>\n                  <td>\n                    Netherlands\n                  </td>\n                  <td>\n                    Baileux\n                  </td>\n                  <td class=\"text-right\">\n                    $56,142\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Doris Greene\n                  </td>\n                  <td>\n                    Malawi\n                  </td>\n                  <td>\n                    Feldkirchen in Kärnten\n                  </td>\n                  <td class=\"text-right\">\n                    $63,542\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Mason Porter\n                  </td>\n                  <td>\n                    Chile\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $78,615\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/farmer-dashboard/farmer-dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/farmer-dashboard/farmer-dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: FarmerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerDashboardComponent", function() { return FarmerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FarmerDashboardComponent = /** @class */ (function () {
    function FarmerDashboardComponent(contentService, http) {
        this.contentService = contentService;
        this.http = http;
        this.tempYear = '2018';
        this.measuresData = [0, 0];
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
    }
    FarmerDashboardComponent.prototype.getJSON = function () {
        return this.http.get('./assets/mapstyle.json');
    };
    FarmerDashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    FarmerDashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    FarmerDashboardComponent.prototype.hexToRGB = function (hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }
        else {
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
    };
    FarmerDashboardComponent.prototype.initializeMainChart = function () {
        var _this = this;
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.mainChartData = [{
                label: 'Production Litres',
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }];
        this.contentService.getProductionData().snapshotChanges().subscribe(function (item) {
            var index = 0;
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['pid'] = element.key;
                index++;
                if (_this.farmerID === y.farmerid) {
                    for (var i = 0; i < 12; i++) {
                        var rDate = new Date(y.registrationDate);
                        var date = String(rDate.getMonth() + 1) + '/' + String(rDate.getFullYear());
                        if (date === (i + 1) + '/' + _this.tempYear) {
                            data[i] = data[i] + y.ammount;
                        }
                    }
                }
                if (index === item.length) {
                    _this.mainChartData = [];
                    _this.mainChartData.push({
                        data: data
                    });
                }
            });
        });
    };
    FarmerDashboardComponent.prototype.initializeMeasuresChart = function () {
        this.canvas = document.getElementById('measuresChart');
        this.measuresChartLabels = ['Incomes', 'Outcomes'];
        this.measuresChartData = [
            {
                borderWidth: 5,
                data: this.measuresData
            }
        ];
        this.measuresChartType = 'pie';
    };
    FarmerDashboardComponent.prototype.initializeIncomesChart = function () {
        var _this = this;
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.incomesChartData = [
            {
                label: 'Incomes €',
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 2,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ];
        this.contentService.getIncomesData().snapshotChanges().subscribe(function (item) {
            var index = 0;
            var totals = 0;
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['iid'] = element.key;
                index++;
                if (_this.farmerID === y.farmerid) {
                    for (var i = 0; i < 12; i++) {
                        var rDate = new Date(y.registrationDate);
                        var date = String(rDate.getMonth() + 1) + '/' + String(rDate.getFullYear());
                        if (date === (i + 1) + '/' + _this.tempYear) {
                            data[i] = data[i] + y.ammount;
                            totals += data[i];
                        }
                    }
                }
                if (index === item.length) {
                    _this.incomesChartData = [];
                    _this.incomesChartData.push({
                        data: data
                    });
                    _this.measuresData[0] = totals;
                    _this.measuresChartData.push({ data: _this.measuresData });
                    _this.initializeMeasuresChart();
                }
            });
        });
    };
    FarmerDashboardComponent.prototype.initializeOutcomesChart = function () {
        var _this = this;
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.outcomesChartData = [
            {
                label: 'Outcomes €',
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ];
        this.contentService.getOutcomesData().snapshotChanges().subscribe(function (item) {
            var index = 0;
            var totals = 0;
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['oid'] = element.key;
                index++;
                if (_this.farmerID === y.farmerid) {
                    for (var i = 0; i < 12; i++) {
                        var rDate = new Date(y.registrationDate);
                        var date = String(rDate.getMonth() + 1) + '/' + String(rDate.getFullYear());
                        if (date === (i + 1) + '/' + _this.tempYear) {
                            data[i] = data[i] + y.ammount;
                            totals += data[i];
                        }
                    }
                }
                if (index === item.length) {
                    _this.outcomesChartData = [];
                    _this.outcomesChartData.push({
                        data: data
                    });
                    _this.measuresData[1] = totals;
                    _this.measuresChartData.push({ data: _this.measuresData });
                    _this.initializeMeasuresChart();
                }
            });
        });
    };
    FarmerDashboardComponent.prototype.initMap = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: new google.maps.LatLng(35.3900078, 25.0834658),
            scrollwheel: false
        });
    };
    FarmerDashboardComponent.prototype.getFarmsData = function () {
        var _this = this;
        this.contentService.getFarmsData().snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                var marker;
                var infowindow;
                y['fid'] = element.key;
                if (_this.farmerID === y.farmerid) {
                    infowindow = new google.maps.InfoWindow({
                        content: '<b>Title:</b> ' + y.title + '<br>' + '<b>Soil:</b> ' + y.soil
                    });
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(y.latitude, y.longitude)
                    });
                    marker.addListener('click', function () {
                        infowindow.open(this.map, marker);
                    });
                    marker.setMap(_this.map);
                }
            });
        });
    };
    FarmerDashboardComponent.prototype.ngOnInit = function () {
        this.initializeMainChart();
        this.initializeMainChartStyle();
        this.initializeMeasuresChart();
        this.initializeIncomesChart();
        this.initializeIncomesChartStyle();
        this.initializeOutcomesChart();
        this.initializeOutcomesChartStyle();
        this.initMap();
        this.getFarmsData();
    };
    FarmerDashboardComponent.prototype.initializeMainChartStyle = function () {
        this.chartColor = '#f96332';
        this.canvas = document.getElementById('mainChart');
        this.ctx = this.canvas.getContext('2d');
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        this.gradientFill.addColorStop(1, '#f96332');
        this.mainChartColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: this.chartColor,
                pointBorderColor: this.chartColor,
                pointBackgroundColor: '#2c2c2c',
                pointHoverBackgroundColor: '#2c2c2c',
                pointHoverBorderColor: this.chartColor,
            }
        ];
        this.mainChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.mainChartOptions = {
            layout: { padding: { left: 20, right: 20, top: 0, bottom: 0 } },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: '#fff', titleFontColor: '#333', bodyFontColor: '#666', bodySpacing: 4, xPadding: 12,
                mode: 'nearest', intersect: 0, position: 'nearest'
            },
            legend: {
                position: 'bottom',
                fillStyle: '#FFF',
                display: false
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: 'rgba(255,255,255,0.4)',
                            fontStyle: 'bold',
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: 'transparent'
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent',
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: 'rgba(255,255,255,0.4)',
                            fontStyle: 'bold'
                        }
                    }]
            }
        };
        this.mainChartType = 'line';
    };
    FarmerDashboardComponent.prototype.initializeIncomesChartStyle = function () {
        this.canvas = document.getElementById('incomesChart');
        this.ctx = this.canvas.getContext('2d');
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#18ce0f');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
        this.incomesChartOptions = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest',
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent',
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: 'transparent',
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.incomesChartColors = [
            {
                borderColor: '#18ce0f',
                pointBorderColor: '#FFF',
                pointBackgroundColor: '#18ce0f',
                backgroundColor: this.gradientFill
            }
        ];
        this.incomesChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.incomesChartType = 'line';
    };
    FarmerDashboardComponent.prototype.initializeOutcomesChartStyle = function () {
        this.canvas = document.getElementById('outcomesChart');
        this.ctx = this.canvas.getContext('2d');
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        this.gradientFill.addColorStop(1, this.hexToRGB('#f96332', 0.6));
        this.outcomesChartColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: '#f96332',
                pointBorderColor: '#FFF',
                pointBackgroundColor: '#f96332',
            }
        ];
        this.outcomesChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        this.outcomesChartOptions = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest',
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent',
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: 'transparent',
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.outcomesChartType = 'bar';
    };
    FarmerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-farmer-dashboard',
            template: __webpack_require__(/*! ./farmer-dashboard.component.html */ "./src/app/farmer-dashboard/farmer-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./farmer-dashboard.component.css */ "./src/app/farmer-dashboard/farmer-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_core_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FarmerDashboardComponent);
    return FarmerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/farms/farms.component.css":
/*!*******************************************!*\
  !*** ./src/app/farms/farms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1zL2Zhcm1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/farms/farms.component.html":
/*!********************************************!*\
  !*** ./src/app/farms/farms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Total Farms</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of farmsList; let i = index;\">\n                  <td>{{i + 1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.region}}</td>\n                  <td>{{row.size | number}} m<sup>2</sup></td>\n                  <td>{{row.soil}}</td>\n                  <td>{{row.description}}</td>\n                  <td><button class=\"btn btn-sm btn-warning btn-icon\" (click)=\"editFarm(row)\"><i class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteFarm(row)\"><i class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewFarm()\"><i class=\"fa fa-plus\"></i> Add New Farm</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/farms/farms.component.ts":
/*!******************************************!*\
  !*** ./src/app/farms/farms.component.ts ***!
  \******************************************/
/*! exports provided: FarmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmsComponent", function() { return FarmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FarmsComponent = /** @class */ (function () {
    function FarmsComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    FarmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Title', 'Region', 'Size', 'Soil', 'Description']
        };
        var x = this.contentService.getFarmsData();
        x.snapshotChanges().subscribe(function (item) {
            _this.farmsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['fid'] = element.key;
                if (_this.farmerID === y.farmerid) {
                    _this.farmsList.push(y);
                }
            });
        });
    };
    FarmsComponent.prototype.editFarm = function (farm) {
        this.router.navigate(['/edit-farm/' + farm.fid]);
    };
    FarmsComponent.prototype.deleteFarm = function (farm) {
        this.contentService.deleteFarm(farm.fid);
    };
    FarmsComponent.prototype.addNewFarm = function () {
        this.router.navigate(['/new-farm']);
    };
    FarmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-farms',
            template: __webpack_require__(/*! ./farms.component.html */ "./src/app/farms/farms.component.html"),
            styles: [__webpack_require__(/*! ./farms.component.css */ "./src/app/farms/farms.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], FarmsComponent);
    return FarmsComponent;
}());



/***/ }),

/***/ "./src/app/incomes/incomes.component.css":
/*!***********************************************!*\
  !*** ./src/app/incomes/incomes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY29tZXMvaW5jb21lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/incomes/incomes.component.html":
/*!************************************************!*\
  !*** ./src/app/incomes/incomes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Total Incomes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of incomesList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.ammount | number}} €</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td>{{row.description}}</td>\n                  <td><button class=\"btn btn-sm btn-warning btn-icon\" (click)=\"editIncome(row)\"><i class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteIncome(row)\"><i class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewIncome()\"><i class=\"fa fa-plus\"></i> Add New Income</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/incomes/incomes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/incomes/incomes.component.ts ***!
  \**********************************************/
/*! exports provided: IncomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomesComponent", function() { return IncomesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncomesComponent = /** @class */ (function () {
    function IncomesComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    IncomesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Title', 'Ammount', 'Date', 'Description']
        };
        var x = this.contentService.getIncomesData();
        x.snapshotChanges().subscribe(function (item) {
            _this.incomesList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['iid'] = element.key;
                if (_this.farmerID === y.farmerid) {
                    _this.incomesList.push(y);
                }
            });
        });
    };
    IncomesComponent.prototype.editIncome = function (income) {
        this.router.navigate(['/edit-income/' + income.iid]);
    };
    IncomesComponent.prototype.deleteIncome = function (income) {
        this.contentService.deleteIncome(income.iid);
    };
    IncomesComponent.prototype.addNewIncome = function () {
        this.router.navigate(['/new-income']);
    };
    IncomesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incomes',
            template: __webpack_require__(/*! ./incomes.component.html */ "./src/app/incomes/incomes.component.html"),
            styles: [__webpack_require__(/*! ./incomes.component.css */ "./src/app/incomes/incomes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], IncomesComponent);
    return IncomesComponent;
}());



/***/ }),

/***/ "./src/app/layouts/farmer-layout/farmer-layout.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/farmer-layout/farmer-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: FarmerLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerLayoutModule", function() { return FarmerLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _farmer_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./farmer-layout.routing */ "./src/app/layouts/farmer-layout/farmer-layout.routing.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _farmer_dashboard_farmer_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../farmer-dashboard/farmer-dashboard.component */ "./src/app/farmer-dashboard/farmer-dashboard.component.ts");
/* harmony import */ var _incomes_incomes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../incomes/incomes.component */ "./src/app/incomes/incomes.component.ts");
/* harmony import */ var _outcomes_outcomes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../outcomes/outcomes.component */ "./src/app/outcomes/outcomes.component.ts");
/* harmony import */ var _production_production_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../production/production.component */ "./src/app/production/production.component.ts");
/* harmony import */ var _farms_farms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../farms/farms.component */ "./src/app/farms/farms.component.ts");
/* harmony import */ var _new_farm_new_farm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../new-farm/new-farm.component */ "./src/app/new-farm/new-farm.component.ts");
/* harmony import */ var _edit_farm_edit_farm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../edit-farm/edit-farm.component */ "./src/app/edit-farm/edit-farm.component.ts");
/* harmony import */ var _new_income_new_income_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../new-income/new-income.component */ "./src/app/new-income/new-income.component.ts");
/* harmony import */ var _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../edit-income/edit-income.component */ "./src/app/edit-income/edit-income.component.ts");
/* harmony import */ var _new_outcome_new_outcome_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../new-outcome/new-outcome.component */ "./src/app/new-outcome/new-outcome.component.ts");
/* harmony import */ var _edit_outcome_edit_outcome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../edit-outcome/edit-outcome.component */ "./src/app/edit-outcome/edit-outcome.component.ts");
/* harmony import */ var _new_production_new_production_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../new-production/new-production.component */ "./src/app/new-production/new-production.component.ts");
/* harmony import */ var _edit_production_edit_production_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../edit-production/edit-production.component */ "./src/app/edit-production/edit-production.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var FarmerLayoutModule = /** @class */ (function () {
    function FarmerLayoutModule() {
    }
    FarmerLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _farmer_dashboard_farmer_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["FarmerDashboardComponent"],
                _incomes_incomes_component__WEBPACK_IMPORTED_MODULE_9__["IncomesComponent"],
                _outcomes_outcomes_component__WEBPACK_IMPORTED_MODULE_10__["OutcomesComponent"],
                _production_production_component__WEBPACK_IMPORTED_MODULE_11__["ProductionComponent"],
                _farms_farms_component__WEBPACK_IMPORTED_MODULE_12__["FarmsComponent"],
                _edit_farm_edit_farm_component__WEBPACK_IMPORTED_MODULE_14__["EditFarmComponent"],
                _new_farm_new_farm_component__WEBPACK_IMPORTED_MODULE_13__["NewFarmComponent"],
                _new_income_new_income_component__WEBPACK_IMPORTED_MODULE_15__["NewIncomeComponent"],
                _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_16__["EditIncomeComponent"],
                _new_outcome_new_outcome_component__WEBPACK_IMPORTED_MODULE_17__["NewOutcomeComponent"],
                _edit_outcome_edit_outcome_component__WEBPACK_IMPORTED_MODULE_18__["EditOutcomeComponent"],
                _new_production_new_production_component__WEBPACK_IMPORTED_MODULE_19__["NewProductionComponent"],
                _edit_production_edit_production_component__WEBPACK_IMPORTED_MODULE_20__["EditProductionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_farmer_layout_routing__WEBPACK_IMPORTED_MODULE_4__["FarmerLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
            ]
        })
    ], FarmerLayoutModule);
    return FarmerLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/farmer-layout/farmer-layout.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/farmer-layout/farmer-layout.routing.ts ***!
  \****************************************************************/
/*! exports provided: FarmerLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerLayoutRoutes", function() { return FarmerLayoutRoutes; });
/* harmony import */ var _farmer_dashboard_farmer_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../farmer-dashboard/farmer-dashboard.component */ "./src/app/farmer-dashboard/farmer-dashboard.component.ts");
/* harmony import */ var _incomes_incomes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../incomes/incomes.component */ "./src/app/incomes/incomes.component.ts");
/* harmony import */ var _outcomes_outcomes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../outcomes/outcomes.component */ "./src/app/outcomes/outcomes.component.ts");
/* harmony import */ var _production_production_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../production/production.component */ "./src/app/production/production.component.ts");
/* harmony import */ var _farms_farms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../farms/farms.component */ "./src/app/farms/farms.component.ts");
/* harmony import */ var _new_farm_new_farm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../new-farm/new-farm.component */ "./src/app/new-farm/new-farm.component.ts");
/* harmony import */ var _edit_farm_edit_farm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../edit-farm/edit-farm.component */ "./src/app/edit-farm/edit-farm.component.ts");
/* harmony import */ var _new_income_new_income_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../new-income/new-income.component */ "./src/app/new-income/new-income.component.ts");
/* harmony import */ var _new_outcome_new_outcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../new-outcome/new-outcome.component */ "./src/app/new-outcome/new-outcome.component.ts");
/* harmony import */ var _new_production_new_production_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../new-production/new-production.component */ "./src/app/new-production/new-production.component.ts");
/* harmony import */ var _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../edit-income/edit-income.component */ "./src/app/edit-income/edit-income.component.ts");
/* harmony import */ var _edit_outcome_edit_outcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../edit-outcome/edit-outcome.component */ "./src/app/edit-outcome/edit-outcome.component.ts");
/* harmony import */ var _edit_production_edit_production_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../edit-production/edit-production.component */ "./src/app/edit-production/edit-production.component.ts");













var FarmerLayoutRoutes = [
    { path: 'farmer-dashboard', component: _farmer_dashboard_farmer_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["FarmerDashboardComponent"] },
    { path: 'incomes', component: _incomes_incomes_component__WEBPACK_IMPORTED_MODULE_1__["IncomesComponent"] },
    { path: 'outcomes', component: _outcomes_outcomes_component__WEBPACK_IMPORTED_MODULE_2__["OutcomesComponent"] },
    { path: 'production', component: _production_production_component__WEBPACK_IMPORTED_MODULE_3__["ProductionComponent"] },
    { path: 'farms', component: _farms_farms_component__WEBPACK_IMPORTED_MODULE_4__["FarmsComponent"] },
    { path: 'new-farm', component: _new_farm_new_farm_component__WEBPACK_IMPORTED_MODULE_5__["NewFarmComponent"] },
    { path: 'edit-farm/:key', component: _edit_farm_edit_farm_component__WEBPACK_IMPORTED_MODULE_6__["EditFarmComponent"] },
    { path: 'new-income', component: _new_income_new_income_component__WEBPACK_IMPORTED_MODULE_7__["NewIncomeComponent"] },
    { path: 'edit-income/:key', component: _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_10__["EditIncomeComponent"] },
    { path: 'new-outcome', component: _new_outcome_new_outcome_component__WEBPACK_IMPORTED_MODULE_8__["NewOutcomeComponent"] },
    { path: 'edit-outcome/:key', component: _edit_outcome_edit_outcome_component__WEBPACK_IMPORTED_MODULE_11__["EditOutcomeComponent"] },
    { path: 'new-production', component: _new_production_new_production_component__WEBPACK_IMPORTED_MODULE_9__["NewProductionComponent"] },
    { path: 'edit-production/:key', component: _edit_production_edit_production_component__WEBPACK_IMPORTED_MODULE_12__["EditProductionComponent"] }
];


/***/ }),

/***/ "./src/app/new-farm/new-farm.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-farm/new-farm.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-panel{\r\n    padding: 0px;\r\n}\r\n.map{\r\n    height: 25rem;\r\n    border-radius: 0rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWZhcm0vbmV3LWZhcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9uZXctZmFybS9uZXctZmFybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1wYW5lbHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ubWFwe1xyXG4gICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDByZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/new-farm/new-farm.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-farm/new-farm.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Farm</h5>\n        </div>\n        <div class=\"map-panel\">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n        <div class=\"card-body\">\n          <form #newFarmForm=\"ngForm\" (ngSubmit)=\"onSubmit(newFarmForm)\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\"\n                    placeholder=\"Farmer Id\" required hidden=\"true\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Region</label>\n                  <select class=\"form-control\" name=\"region\" #region=\"ngModel\" ngModel required>\n                    <option disabled selected value=\"\">Select region</option>\n                    <option *ngFor=\"let regionName of regionsList;\" [value]=\"regionName\">{{regionName}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Longitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"longitude\" #longitude=\"ngModel\" [(ngModel)]=\"this.longitudeT\"\n                    placeholder=\"Longitude\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Latitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"latitude\" #latitude=\"ngModel\" [(ngModel)]=\"this.latitudeT\"\n                    placeholder=\"Latitude\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Size in m<sup>2</sup></label>\n                  <input type=\"number\" class=\"form-control\" name=\"size\" #size=\"ngModel\" ngModel placeholder=\"Size\"\n                    required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Soil</label>\n                  <select class=\"form-control\" name=\"soil\" #soil=\"ngModel\" ngModel required>\n                    <option disabled selected value=\"\">Select soil type</option>\n                    <option *ngFor=\"let soilTypes of soilTypesList;\" [value]=\"soilTypes\">{{soilTypes}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the farm\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newFarmForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-farm/new-farm.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-farm/new-farm.component.ts ***!
  \************************************************/
/*! exports provided: NewFarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFarmComponent", function() { return NewFarmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewFarmComponent = /** @class */ (function () {
    function NewFarmComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.regionsList = ['Heraklion Crete', 'Chania Crete', 'Rehtimnon Crete', 'Lasithi Crete'];
        this.soilTypesList = ['Loam', 'Clay', 'Sand', 'Silt', 'Peat', 'Chalk'];
        this.defaultCoordinates = new google.maps.LatLng(0, 0);
        this.latitudeT = 35.3900078;
        this.longitudeT = 25.0834658;
        this.defaultCoordinates = new google.maps.LatLng(this.latitudeT, this.longitudeT);
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.contentService.getFarmStatistics();
    }
    NewFarmComponent.prototype.ngOnInit = function () {
        this.initMap(this.defaultCoordinates);
    };
    NewFarmComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.insertFarm(form.value);
        }
        this.router.navigate(['/farms']);
    };
    NewFarmComponent.prototype.initMap = function (coordinates) {
        var _this = this;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: coordinates,
            scrollwheel: false
        });
        var marker = new google.maps.Marker({ position: coordinates });
        marker.setMap(map);
        map.addListener('click', function (event) {
            marker.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
            map.panTo(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
            _this.latitudeT = event.latLng.lat();
            _this.longitudeT = event.latLng.lng();
        });
    };
    NewFarmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-farm',
            template: __webpack_require__(/*! ./new-farm.component.html */ "./src/app/new-farm/new-farm.component.html"),
            styles: [__webpack_require__(/*! ./new-farm.component.css */ "./src/app/new-farm/new-farm.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], NewFarmComponent);
    return NewFarmComponent;
}());



/***/ }),

/***/ "./src/app/new-income/new-income.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-income/new-income.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1pbmNvbWUvbmV3LWluY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/new-income/new-income.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-income/new-income.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Income</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #newIncomeForm=\"ngForm\" (ngSubmit)=\"onSubmit(newIncomeForm)\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\"\n                    placeholder=\"Farmer Id\" required hidden=\"true\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" ngModel placeholder=\"Ammount in €\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the intcome\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newIncomeForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-income/new-income.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-income/new-income.component.ts ***!
  \****************************************************/
/*! exports provided: NewIncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewIncomeComponent", function() { return NewIncomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewIncomeComponent = /** @class */ (function () {
    function NewIncomeComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.contentService.getIncomeStatistics();
    }
    NewIncomeComponent.prototype.ngOnInit = function () { };
    NewIncomeComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.insertIncome(form.value);
        }
        this.router.navigate(['/incomes']);
    };
    NewIncomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-income',
            template: __webpack_require__(/*! ./new-income.component.html */ "./src/app/new-income/new-income.component.html"),
            styles: [__webpack_require__(/*! ./new-income.component.css */ "./src/app/new-income/new-income.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], NewIncomeComponent);
    return NewIncomeComponent;
}());



/***/ }),

/***/ "./src/app/new-outcome/new-outcome.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-outcome/new-outcome.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1vdXRjb21lL25ldy1vdXRjb21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-outcome/new-outcome.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-outcome/new-outcome.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Outcome</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #newOutcomeForm=\"ngForm\" (ngSubmit)=\"onSubmit(newOutcomeForm)\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\"\n                    placeholder=\"Farmer Id\" required hidden=\"true\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" ngModel placeholder=\"Ammount in €\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the outcome\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newOutcomeForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-outcome/new-outcome.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-outcome/new-outcome.component.ts ***!
  \******************************************************/
/*! exports provided: NewOutcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOutcomeComponent", function() { return NewOutcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewOutcomeComponent = /** @class */ (function () {
    function NewOutcomeComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.contentService.getOutcomeStatistics();
    }
    NewOutcomeComponent.prototype.ngOnInit = function () { };
    NewOutcomeComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.insertOutcome(form.value);
        }
        this.router.navigate(['/outcomes']);
    };
    NewOutcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-outcome',
            template: __webpack_require__(/*! ./new-outcome.component.html */ "./src/app/new-outcome/new-outcome.component.html"),
            styles: [__webpack_require__(/*! ./new-outcome.component.css */ "./src/app/new-outcome/new-outcome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], NewOutcomeComponent);
    return NewOutcomeComponent;
}());



/***/ }),

/***/ "./src/app/new-production/new-production.component.css":
/*!*************************************************************!*\
  !*** ./src/app/new-production/new-production.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wcm9kdWN0aW9uL25ldy1wcm9kdWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-production/new-production.component.html":
/*!**************************************************************!*\
  !*** ./src/app/new-production/new-production.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Production</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #newProductionForm=\"ngForm\" (ngSubmit)=\"onSubmit(newProductionForm)\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\"\n                    placeholder=\"Farmer Id\" required hidden=\"true\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount Weight</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammountWeight\" #ammountWeight=\"ngModel\" ngModel\n                    placeholder=\"Ammount of weight in L\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" ngModel placeholder=\"Ammount in €\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the production\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newProductionForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-production/new-production.component.ts":
/*!************************************************************!*\
  !*** ./src/app/new-production/new-production.component.ts ***!
  \************************************************************/
/*! exports provided: NewProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductionComponent", function() { return NewProductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProductionComponent = /** @class */ (function () {
    function NewProductionComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.contentService.getProductionStatistics();
    }
    NewProductionComponent.prototype.ngOnInit = function () { };
    NewProductionComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null) {
            this.contentService.insertProduction(form.value);
        }
        this.router.navigate(['/production']);
    };
    NewProductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-production',
            template: __webpack_require__(/*! ./new-production.component.html */ "./src/app/new-production/new-production.component.html"),
            styles: [__webpack_require__(/*! ./new-production.component.css */ "./src/app/new-production/new-production.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], NewProductionComponent);
    return NewProductionComponent;
}());



/***/ }),

/***/ "./src/app/outcomes/outcomes.component.css":
/*!*************************************************!*\
  !*** ./src/app/outcomes/outcomes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dGNvbWVzL291dGNvbWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/outcomes/outcomes.component.html":
/*!**************************************************!*\
  !*** ./src/app/outcomes/outcomes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Total Outcomes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of outcomesList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.ammount | number}} €</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td>{{row.description}}</td>\n                  <td><button class=\"btn btn-sm btn-warning btn-icon\" (click)=\"editOutcome(row)\"><i class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteOutcome(row)\"><i class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewOutcome()\"><i class=\"fa fa-plus\"></i> Add New Outcome</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/outcomes/outcomes.component.ts":
/*!************************************************!*\
  !*** ./src/app/outcomes/outcomes.component.ts ***!
  \************************************************/
/*! exports provided: OutcomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcomesComponent", function() { return OutcomesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OutcomesComponent = /** @class */ (function () {
    function OutcomesComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    OutcomesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Title', 'Ammount', 'Date', 'Description']
        };
        var x = this.contentService.getOutcomesData();
        x.snapshotChanges().subscribe(function (item) {
            _this.outcomesList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['oid'] = element.key;
                if (_this.farmerID === y.farmerid) {
                    _this.outcomesList.push(y);
                }
            });
        });
    };
    OutcomesComponent.prototype.editOutcome = function (outcome) {
        this.router.navigate(['/edit-outcome/' + outcome.oid]);
    };
    OutcomesComponent.prototype.deleteOutcome = function (outcome) {
        this.contentService.deleteOutcome(outcome.oid);
    };
    OutcomesComponent.prototype.addNewOutcome = function () {
        this.router.navigate(['/new-outcome']);
    };
    OutcomesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outcomes',
            template: __webpack_require__(/*! ./outcomes.component.html */ "./src/app/outcomes/outcomes.component.html"),
            styles: [__webpack_require__(/*! ./outcomes.component.css */ "./src/app/outcomes/outcomes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], OutcomesComponent);
    return OutcomesComponent;
}());



/***/ }),

/***/ "./src/app/production/production.component.css":
/*!*****************************************************!*\
  !*** ./src/app/production/production.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/production/production.component.html":
/*!******************************************************!*\
  !*** ./src/app/production/production.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Total Production</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of productionList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.ammountWeight | number}} L</td>\n                  <td>{{row.ammount | number}} €</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td>{{row.description}}</td>\n                  <td><button class=\"btn btn-sm btn-warning btn-icon\" (click)=\"editProduction(row)\"><i class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteProduction(row)\"><i class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewProduction()\"><i class=\"fa fa-plus\"></i> Add New\n        Production</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/production.component.ts":
/*!****************************************************!*\
  !*** ./src/app/production/production.component.ts ***!
  \****************************************************/
/*! exports provided: ProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionComponent", function() { return ProductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductionComponent = /** @class */ (function () {
    function ProductionComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    ProductionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Title', 'Ammount Weight', 'Ammount', 'Date', 'Description']
        };
        var x = this.contentService.getProductionData();
        x.snapshotChanges().subscribe(function (item) {
            _this.productionList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['pid'] = element.key;
                if (_this.farmerID === y.farmerid) {
                    _this.productionList.push(y);
                    var tempDate = new Date(y.registrationDate);
                    _this.date = String(tempDate.getMonth() + 1) + '/' + String(tempDate.getFullYear());
                }
            });
        });
    };
    ProductionComponent.prototype.editProduction = function (production) {
        this.router.navigate(['/edit-production/' + production.pid]);
    };
    ProductionComponent.prototype.deleteProduction = function (production) {
        this.contentService.deleteProduction(production.pid);
    };
    ProductionComponent.prototype.addNewProduction = function () {
        this.router.navigate(['/new-production']);
    };
    ProductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-production',
            template: __webpack_require__(/*! ./production.component.html */ "./src/app/production/production.component.html"),
            styles: [__webpack_require__(/*! ./production.component.css */ "./src/app/production/production.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], ProductionComponent);
    return ProductionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-farmer-layout-farmer-layout-module.js.map