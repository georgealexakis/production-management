(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-farmer-layout-farmer-layout-module"],{

/***/ "./src/app/consultants/consultants.component.css":
/*!*******************************************************!*\
  !*** ./src/app/consultants/consultants.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    white-space: nowrap;\r\n    width: 40rem;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-top: 1rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGFudHMvY29uc3VsdGFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9jb25zdWx0YW50cy9jb25zdWx0YW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/consultants/consultants.component.html":
/*!********************************************************!*\
  !*** ./src/app/consultants/consultants.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Consultants</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of consultantsList; let i = index;\">\n                  <td>{{i + 1}}</td>\n                  <td>{{row.firstName}} {{row.lastName}}</td>\n                  <td><a href=\"mailto: {{row.email}}\">{{row.email}}</a></td>\n                  <td>{{row.city}}</td>\n                  <td>{{row.region}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/consultants/consultants.component.ts":
/*!******************************************************!*\
  !*** ./src/app/consultants/consultants.component.ts ***!
  \******************************************************/
/*! exports provided: ConsultantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantsComponent", function() { return ConsultantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultantsComponent = /** @class */ (function () {
    function ConsultantsComponent(afDb) {
        this.afDb = afDb;
    }
    ConsultantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Name', 'Email', 'City', 'Region']
        };
        this.usersList = this.afDb.list('users', function (ref) { return ref.orderByChild('role').equalTo('consultant'); });
        this.usersList.snapshotChanges().subscribe(function (item) {
            _this.consultantsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['uid'] = element.key;
                _this.consultantsList.push(y);
            });
        });
    };
    ConsultantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultants',
            template: __webpack_require__(/*! ./consultants.component.html */ "./src/app/consultants/consultants.component.html"),
            styles: [__webpack_require__(/*! ./consultants.component.css */ "./src/app/consultants/consultants.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ConsultantsComponent);
    return ConsultantsComponent;
}());



/***/ }),

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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Farm</h5>\n        </div>\n        <div class=\"map-panel\">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n        <div class=\"card-body\">\n          <form #editFarmForm=\"ngForm\" (ngSubmit)=\"onSubmit(editFarmForm)\">\n            <input type=\"hidden\" name=\"fid\" #fid=\"ngModel\" [(ngModel)]=\"farmID\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"editedFarm.farmerid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedFarm.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Region</label>\n                  <select class=\"form-control\" name=\"region\" #region=\"ngModel\" [(ngModel)]=\"editedFarm.region\" required>\n                    <option disabled selected value=\"\">Select region</option>\n                    <option *ngFor=\"let regionName of regionsList;\" [value]=\"regionName\">{{regionName}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" [ngModel]=\"editedFarm.registrationDate | date:'yyyy-MM-dd'\"\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Longitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"longitude\" #longitude=\"ngModel\" [(ngModel)]=\"editedFarm.longitude\"\n                    placeholder=\"Longitude\" readonly required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Latitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"latitude\" #latitude=\"ngModel\" [(ngModel)]=\"editedFarm.latitude\"\n                    placeholder=\"Latitude\" readonly required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Size in m<sup>2</sup></label>\n                  <input type=\"number\" class=\"form-control\" name=\"size\" #size=\"ngModel\" [(ngModel)]=\"editedFarm.size\"\n                    placeholder=\"Size\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Soil</label>\n                  <select class=\"form-control\" name=\"soil\" #soil=\"ngModel\" [(ngModel)]=\"editedFarm.soil\" required>\n                    <option disabled value=\"\">Select soil type</option>\n                    <option *ngFor=\"let soilTypes of soilTypesList;\" [value]=\"soilTypes\">{{soilTypes}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\"\n                    [(ngModel)]=\"editedFarm.description\" placeholder=\"Give a description about the farm\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editFarmForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var _core_farm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/farm */ "./src/app/core/farm.ts");
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
    function EditFarmComponent(router, route, afDb, contentService) {
        this.router = router;
        this.route = route;
        this.afDb = afDb;
        this.contentService = contentService;
        this.regionsList = ['Heraklion Crete', 'Chania Crete', 'Rehtimnon Crete', 'Lasithi Crete'];
        this.soilTypesList = ['Loam', 'Clay', 'Sand', 'Silt', 'Peat', 'Chalk'];
        this.editedFarm = new _core_farm__WEBPACK_IMPORTED_MODULE_4__["Farm"]();
        this.getFarm();
    }
    EditFarmComponent.prototype.ngOnInit = function () { };
    EditFarmComponent.prototype.getFarm = function () {
        var _this = this;
        this.farmID = this.route.snapshot.paramMap.get('key');
        this.farmReference = this.afDb.object('farms/' + this.farmID);
        this.subscription = this.farmReference.snapshotChanges().subscribe(function (action) {
            _this.editedFarm = action.payload.val();
            _this.initMap(new google.maps.LatLng(_this.editedFarm.latitude, _this.editedFarm.longitude));
        });
    };
    EditFarmComponent.prototype.onSubmit = function (form) {
        if (form.value.fid !== null) {
            this.contentService.updateFarm(form.value);
        }
        this.subscription.unsubscribe();
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
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Income</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #editIncomeForm=\"ngForm\" (ngSubmit)=\"onSubmit(editIncomeForm)\">\n            <input type=\"hidden\" name=\"iid\" #iid=\"ngModel\" [(ngModel)]=\"incomeID\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"editedIncome.farmerid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedIncome.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" [ngModel]=\"editedIncome.registrationDate | date:'yyyy-MM-dd'\"\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" [(ngModel)]=\"editedIncome.ammount\"\n                    placeholder=\"Ammount in €\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\"\n                    [(ngModel)]=\"editedIncome.description\" placeholder=\"Give a description about the income\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editIncomeForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        if (form.value.iid !== null) {
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        if (form.value.oid !== null) {
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Production</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #editProductionForm=\"ngForm\" (ngSubmit)=\"onSubmit(editProductionForm)\">\n            <input type=\"hidden\" name=\"pid\" #pid=\"ngModel\" [(ngModel)]=\"productionID\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"editedProduction.farmerid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedProduction.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" [ngModel]=\"editedProduction.registrationDate | date:'yyyy-MM-dd'\"\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Farm</label>\n                  <select class=\"form-control\" name=\"farmid\" #farmid=\"ngModel\" [(ngModel)]=\"editedProduction.farmid\"\n                    required>\n                    <option disabled value=\"\">Select farm</option>\n                    <option *ngFor=\"let farm of farmsList;\" [value]=\"farm.fid\">{{farm.title}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Units</label>\n                  <input type=\"number\" class=\"form-control\" name=\"units\" #units=\"ngModel\" [(ngModel)]=\"editedProduction.units\"\n                    placeholder=\"Units\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Weight in kg</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammountWeight\" #ammountWeight=\"ngModel\" [(ngModel)]=\"editedProduction.ammountWeight\"\n                    placeholder=\"Weight in kg\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\"\n                    [(ngModel)]=\"editedProduction.description\" placeholder=\"Give a description about the production\"\n                    required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editProductionForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var _core_production__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/production */ "./src/app/core/production.ts");
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
        this.editedProduction = new _core_production__WEBPACK_IMPORTED_MODULE_5__["Production"]();
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        this.productionID = this.route.snapshot.paramMap.get('key');
        this.getProduction();
        this.getFarms();
    }
    EditProductionComponent.prototype.ngOnInit = function () { };
    EditProductionComponent.prototype.getProduction = function () {
        var _this = this;
        this.productionReference = this.afDb.object('production/' + this.productionID);
        this.productionReference.snapshotChanges().subscribe(function (action) {
            _this.editedProduction = action.payload.val();
        });
    };
    EditProductionComponent.prototype.getFarms = function () {
        var _this = this;
        this.contentService.getFarmsData().snapshotChanges().subscribe(function (item) {
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
    EditProductionComponent.prototype.onSubmit = function (form) {
        if (form.value.pid !== null) {
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]])
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

module.exports = ".map-panel{\r\n    padding: 0px;\r\n}\r\n.map{\r\n    height: 25rem;\r\n}\r\n.content{\r\n    white-space: nowrap;\r\n    width: 40rem;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-top: 1rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyLWRhc2hib2FyZC9mYXJtZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvZmFybWVyLWRhc2hib2FyZC9mYXJtZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLXBhbmVse1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5tYXB7XHJcbiAgICBoZWlnaHQ6IDI1cmVtO1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/farmer-dashboard/farmer-dashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/farmer-dashboard/farmer-dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-lg\">\n  <canvas baseChart id=\"mainChart\" [datasets]=\"mainChartData\" [labels]=\"mainChartLabels\" [colors]=\"mainChartColors\"\n    [options]=\"mainChartOptions\" [chartType]=\"mainChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">General</h5>\n          <h4 class=\"card-title\">Financial Measurements</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"measuresChart\" [datasets]=\"measuresChartData\" [labels]=\"measuresChartLabels\" [colors]=\"measuresChartColors\"\n              [options]=\"measuresChartOptions\" [chartType]=\"measuresChartType\" (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_chat-round\"></i> General incomes vs outcomes.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">{{this.contentService.tempYear}}</h5>\n          <h4 class=\"card-title\">Incomes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"incomesChart\" [datasets]=\"incomesChartData\" [labels]=\"incomesChartLabels\" [colors]=\"incomesChartColors\"\n              [options]=\"incomesChartOptions\" [chartType]=\"incomesChartType\" (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_chat-round\"></i> Monthly incomes in €.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">{{this.contentService.tempYear}}</h5>\n          <h4 class=\"card-title\">Outcomes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"outcomesChart\" [datasets]=\"outcomesChartData\" [labels]=\"outcomesChartLabels\" [colors]=\"outcomesChartColors\"\n              [options]=\"outcomesChartOptions\" [chartType]=\"outcomesChartType\" (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_chat-round\"></i> Monthly outcomes in €.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"map-panel\">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card  card-tasks\">\n        <div class=\"card-header \">\n          <h4 class=\"card-title\">Tips</h4>\n        </div>\n        <div class=\"card-body \">\n          <div class=\"table-full-width table-responsive-sm\">\n            <table class=\"table\">\n              <tbody>\n                <tr *ngFor=\"let row of tipsList; let i = index;\">\n                  <td class=\"text-left\">{{row.title}}</td>\n                  <td class=\"text-left\">\n                    <p class=\"content\">{{row.content}}</p>\n                  </td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td class=\"td-actions text-right\">\n                    <button type=\"button\" class=\"btn btn-neutral\" data-original-title=\"Remove\" (click)=\"readTip(row)\">Read</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div *ngIf=\"tipsCounter>4\" class=\"row justify-content-md-center\">\n            <div class=\"col-md-6\">\n              <button type=\"button\" class=\"btn btn-lg btn-block btn-neutral\" (click)=\"readAllTips()\">Read More</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"now-ui-icons business_bulb-63\"></i> <a routerLink=\"/consultants\">Contact now with Consultants</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function FarmerDashboardComponent(router, contentService) {
        var _this = this;
        this.router = router;
        this.contentService = contentService;
        this.measuresData = [0, 0];
        this.tipsCounter = 0;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        this.contentService.calledMethod.subscribe(function () {
            _this.initializeMainChart();
            _this.initializeMeasuresChart();
            _this.initializeIncomesChart();
            _this.initializeOutcomesChart();
            _this.getFarmsData();
        });
    }
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
        this.mainChartData = [{
                label: 'Production Kg',
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }];
        this.contentService.getProductionData().snapshotChanges().subscribe(function (item) {
            var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var index = 0;
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['pid'] = element.key;
                index++;
                if (_this.farmerID === y.farmerid) {
                    for (var i = 0; i < 12; i++) {
                        var rDate = new Date(y.registrationDate);
                        var date = String(rDate.getMonth() + 1) + '/' + String(rDate.getFullYear());
                        if (date === (i + 1) + '/' + _this.contentService.tempYear) {
                            data[i] = data[i] + y.ammountWeight;
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
            var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                        if (date === (i + 1) + '/' + _this.contentService.tempYear) {
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
            var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                        if (date === (i + 1) + '/' + _this.contentService.tempYear) {
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
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false
        });
    };
    FarmerDashboardComponent.prototype.getFarmsData = function () {
        var _this = this;
        this.contentService.getFarmsDataId(this.farmerID).snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                var productionUnits = 0;
                var productionAmmount = 0;
                var marker;
                var infowindow;
                y['fid'] = element.key;
                firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('production').orderByChild('farmid').equalTo(y.fid).once('value', function (item2) {
                    item2.forEach(function (element2) {
                        var p = element2.toJSON();
                        p['pid'] = element2.key;
                        productionUnits = productionUnits + p.units;
                        productionAmmount = productionAmmount + p.ammountWeight;
                    });
                });
                infowindow = new google.maps.InfoWindow({
                    content: '<b>Title:</b> ' + y.title +
                        '<br>' + '<b>Soil:</b> ' + y.soil +
                        '<br>' + '<b>Total Units:</b> ' + productionUnits + ' Units' +
                        '<br>' + '<b>Total Production:</b> ' + productionAmmount + ' kg'
                });
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(y.latitude, y.longitude)
                });
                marker.addListener('click', function () {
                    infowindow.open(this.map, marker);
                });
                marker.setMap(_this.map);
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
        this.getTips();
        this.initMap();
        this.getFarmsData();
    };
    FarmerDashboardComponent.prototype.getTips = function () {
        var _this = this;
        this.contentService.getTipsLimitedData().snapshotChanges().subscribe(function (item) {
            _this.tipsList = [];
            _this.tipsCounter = 0;
            var counter = 0;
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['tid'] = element.key;
                _this.tipsList.push(y);
                _this.tipsCounter++;
                counter++;
                if (counter === item.length) {
                    _this.tipsList.reverse();
                }
            });
        });
    };
    FarmerDashboardComponent.prototype.readTip = function (tip) {
        this.router.navigate(['/tip/' + tip.tid]);
    };
    FarmerDashboardComponent.prototype.readAllTips = function () {
        this.router.navigate(['/tips/']);
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]])
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> My Farms</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of farmsList; let i = index;\">\n                  <td>{{i + 1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.region}}</td>\n                  <td>{{row.size | number}} m<sup>2</sup></td>\n                  <td>{{row.soil}}</td>\n                  <td>{{row.description}}</td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-dark btn-icon\" (click)=\"editFarm(row)\"><i class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteFarm(row)\"><i\n                        class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewFarm()\"><i class=\"fa fa-plus\"></i> Add New Farm</button>\n    </div>\n  </div>\n</div>"

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
        this.contentService.getFarmsData().snapshotChanges().subscribe(function (item) {
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> My Incomes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of incomesList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.ammount | number}} €</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td>{{row.description}}</td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-dark btn-icon\" (click)=\"editIncome(row)\"><i\n                        class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteIncome(row)\"><i\n                        class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewIncome()\"><i class=\"fa fa-plus\"></i> Add New Income</button>\n    </div>\n  </div>\n</div>"

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
        this.contentService.getIncomesData().snapshotChanges().subscribe(function (item) {
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
/* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../tips/tips.component */ "./src/app/tips/tips.component.ts");
/* harmony import */ var _tip_tip_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../tip/tip.component */ "./src/app/tip/tip.component.ts");
/* harmony import */ var _consultants_consultants_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../consultants/consultants.component */ "./src/app/consultants/consultants.component.ts");
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
                _edit_production_edit_production_component__WEBPACK_IMPORTED_MODULE_20__["EditProductionComponent"],
                _tips_tips_component__WEBPACK_IMPORTED_MODULE_21__["TipsComponent"],
                _tip_tip_component__WEBPACK_IMPORTED_MODULE_22__["TipComponent"],
                _consultants_consultants_component__WEBPACK_IMPORTED_MODULE_23__["ConsultantsComponent"]
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
/* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tips/tips.component */ "./src/app/tips/tips.component.ts");
/* harmony import */ var _tip_tip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../tip/tip.component */ "./src/app/tip/tip.component.ts");
/* harmony import */ var _consultants_consultants_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../consultants/consultants.component */ "./src/app/consultants/consultants.component.ts");
















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
    { path: 'edit-production/:key', component: _edit_production_edit_production_component__WEBPACK_IMPORTED_MODULE_12__["EditProductionComponent"] },
    { path: 'tips', component: _tips_tips_component__WEBPACK_IMPORTED_MODULE_13__["TipsComponent"] },
    { path: 'tip/:key', component: _tip_tip_component__WEBPACK_IMPORTED_MODULE_14__["TipComponent"] },
    { path: 'consultants', component: _consultants_consultants_component__WEBPACK_IMPORTED_MODULE_15__["ConsultantsComponent"] }
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Farm</h5>\n        </div>\n        <div class=\"map-panel\">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n        <div class=\"card-body\">\n          <form #newFarmForm=\"ngForm\" (ngSubmit)=\"onSubmit(newFarmForm)\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Region</label>\n                  <select class=\"form-control\" name=\"region\" #region=\"ngModel\" ngModel required>\n                    <option disabled selected value=\"\">Select region</option>\n                    <option *ngFor=\"let regionName of regionsList;\" [value]=\"regionName\">{{regionName}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Longitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"longitude\" #longitude=\"ngModel\" [(ngModel)]=\"this.longitudeT\"\n                    placeholder=\"Longitude\" readonly required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Latitude</label>\n                  <input type=\"text\" class=\"form-control\" name=\"latitude\" #latitude=\"ngModel\" [(ngModel)]=\"this.latitudeT\"\n                    placeholder=\"Latitude\" readonly required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Size in m<sup>2</sup></label>\n                  <input type=\"number\" class=\"form-control\" name=\"size\" #size=\"ngModel\" ngModel placeholder=\"Size\"\n                    required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Soil</label>\n                  <select class=\"form-control\" name=\"soil\" #soil=\"ngModel\" ngModel required>\n                    <option disabled selected value=\"\">Select soil type</option>\n                    <option *ngFor=\"let soilTypes of soilTypesList;\" [value]=\"soilTypes\">{{soilTypes}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the farm\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newFarmForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.contentService.insertFarm(form.value);
        this.router.navigate(['/farms']);
    };
    NewFarmComponent.prototype.onCancel = function () {
        this.router.navigate(['/farms']);
    };
    NewFarmComponent.prototype.initMap = function (coordinates) {
        var _this = this;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: coordinates,
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Income</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #newIncomeForm=\"ngForm\" (ngSubmit)=\"onSubmit(newIncomeForm)\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" ngModel\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" ngModel placeholder=\"Ammount in €\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the income\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newIncomeForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.contentService.insertIncome(form.value);
        this.router.navigate(['/incomes']);
    };
    NewIncomeComponent.prototype.onCancel = function () {
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Outcome</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #newOutcomeForm=\"ngForm\" (ngSubmit)=\"onSubmit(newOutcomeForm)\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" ngModel\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Ammount</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammount\" #ammount=\"ngModel\" ngModel placeholder=\"Ammount in €\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the outcome\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newOutcomeForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.contentService.insertOutcome(form.value);
        this.router.navigate(['/outcomes']);
    };
    NewOutcomeComponent.prototype.onCancel = function () {
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Production</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #newProductionForm=\"ngForm\" (ngSubmit)=\"onSubmit(newProductionForm)\">\n            <input type=\"hidden\" name=\"farmerid\" #farmerid=\"ngModel\" [(ngModel)]=\"this.farmerID\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date</label>\n                  <input type=\"date\" class=\"form-control\" name=\"registrationDate\" #registrationDate=\"ngModel\" ngModel\n                    placeholder=\"Date\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Farm</label>\n                  <select class=\"form-control\" name=\"farmid\" #farmid=\"ngModel\" ngModel required>\n                    <option disabled selected value=\"\">Select farm</option>\n                    <option *ngFor=\"let farm of farmsList;\" [value]=\"farm.fid\">{{farm.title}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Units</label>\n                  <input type=\"number\" class=\"form-control\" name=\"units\" #units=\"ngModel\" ngModel placeholder=\"Units\"\n                    required>\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Weight in kg</label>\n                  <input type=\"number\" class=\"form-control\" name=\"ammountWeight\" #ammountWeight=\"ngModel\" ngModel\n                    placeholder=\"Weight in kg\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" name=\"description\" #description=\"ngModel\" ngModel\n                    placeholder=\"Give a description about the production\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newProductionForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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
    function NewProductionComponent(router, afDb, contentService) {
        this.router = router;
        this.afDb = afDb;
        this.contentService = contentService;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.getFarms();
        this.contentService.getProductionStatistics();
    }
    NewProductionComponent.prototype.ngOnInit = function () { };
    NewProductionComponent.prototype.getFarms = function () {
        var _this = this;
        this.faList = this.afDb.list('farms', function (ref) { return ref.orderByChild('farmerid').equalTo(_this.farmerID); });
        this.faList.snapshotChanges().subscribe(function (item) {
            _this.farmsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['fid'] = element.key;
                _this.farmsList.push(y);
            });
        });
    };
    NewProductionComponent.prototype.onSubmit = function (form) {
        this.contentService.insertProduction(form.value);
        this.router.navigate(['/production']);
    };
    NewProductionComponent.prototype.onCancel = function () {
        this.router.navigate(['/production']);
    };
    NewProductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-production',
            template: __webpack_require__(/*! ./new-production.component.html */ "./src/app/new-production/new-production.component.html"),
            styles: [__webpack_require__(/*! ./new-production.component.css */ "./src/app/new-production/new-production.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> My Outcomes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of outcomesList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.ammount | number}} €</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td>{{row.description}}</td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-dark btn-icon\" (click)=\"editOutcome(row)\"><i\n                        class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteOutcome(row)\"><i\n                        class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewOutcome()\"><i class=\"fa fa-plus\"></i> Add New Outcome</button>\n    </div>\n  </div>\n</div>"

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
        this.contentService.getOutcomesData().snapshotChanges().subscribe(function (item) {
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

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> My Production</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of productionList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>{{row.ammountWeight | number}} kg</td>\n                  <td>{{row.units | number}}</td>\n                  <td>{{row.ammountWeight*estimatedPrice | number}} €</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td>{{row.description}}</td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-dark btn-icon\" (click)=\"editProduction(row)\"><i\n                        class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteProduction(row)\"><i\n                        class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewProduction()\"><i class=\"fa fa-plus\"></i> Add New\n        Production</button>\n    </div>\n  </div>\n</div>"

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
        this.estimatedPrice = 3.80;
        this.farmerID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    ProductionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Title', 'Weight', 'Units', 'Est. Profit', 'Date', 'Description']
        };
        this.contentService.getProductionData().snapshotChanges().subscribe(function (item) {
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



/***/ }),

/***/ "./src/app/tip/tip.component.css":
/*!***************************************!*\
  !*** ./src/app/tip/tip.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpcC90aXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tip/tip.component.html":
/*!****************************************!*\
  !*** ./src/app/tip/tip.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"category\">{{currentTip.tag}}</h4>\n          <h5 class=\"title\"> {{currentTip.title}}</h5>\n        </div>\n        <div class=\"card-body\">\n          <p>{{currentTip.content}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tip/tip.component.ts":
/*!**************************************!*\
  !*** ./src/app/tip/tip.component.ts ***!
  \**************************************/
/*! exports provided: TipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipComponent", function() { return TipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tip */ "./src/app/core/tip.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TipComponent = /** @class */ (function () {
    function TipComponent(router, route, afDb) {
        this.router = router;
        this.route = route;
        this.afDb = afDb;
        this.currentTip = new _core_tip__WEBPACK_IMPORTED_MODULE_3__["Tip"]();
        this.getTip();
    }
    TipComponent.prototype.ngOnInit = function () { };
    TipComponent.prototype.getTip = function () {
        var _this = this;
        this.tipID = this.route.snapshot.paramMap.get('key');
        this.tipReference = this.afDb.object('tips/' + this.tipID);
        this.tipReference.snapshotChanges().subscribe(function (action) {
            _this.currentTip = action.payload.val();
        });
    };
    TipComponent.prototype.onBack = function () {
        this.router.navigate(['/tips']);
    };
    TipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tip',
            template: __webpack_require__(/*! ./tip.component.html */ "./src/app/tip/tip.component.html"),
            styles: [__webpack_require__(/*! ./tip.component.css */ "./src/app/tip/tip.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], TipComponent);
    return TipComponent;
}());



/***/ }),

/***/ "./src/app/tips/tips.component.css":
/*!*****************************************!*\
  !*** ./src/app/tips/tips.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    white-space: nowrap;\r\n    width: 40rem;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-top: 1rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlwcy90aXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvdGlwcy90aXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tips/tips.component.html":
/*!******************************************!*\
  !*** ./src/app/tips/tips.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Tips</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of tipsList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>\n                    <p class=\"content\">{{row.content}}</p>\n                  </td>\n                  <td>{{row.tag}}</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-info btn-icon\" (click)=\"readTip(row)\"><i class=\"fa fa-search\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tips/tips.component.ts":
/*!****************************************!*\
  !*** ./src/app/tips/tips.component.ts ***!
  \****************************************/
/*! exports provided: TipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsComponent", function() { return TipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipsComponent = /** @class */ (function () {
    function TipsComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
    }
    TipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Title', 'Content', 'Tag', 'Date']
        };
        this.contentService.getTipsData().snapshotChanges().subscribe(function (item) {
            _this.tipsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['tid'] = element.key;
                _this.tipsList.push(y);
            });
        });
    };
    TipsComponent.prototype.readTip = function (tip) {
        this.router.navigate(['/tip/' + tip.tid]);
    };
    TipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tips',
            template: __webpack_require__(/*! ./tips.component.html */ "./src/app/tips/tips.component.html"),
            styles: [__webpack_require__(/*! ./tips.component.css */ "./src/app/tips/tips.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]])
    ], TipsComponent);
    return TipsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-farmer-layout-farmer-layout-module.js.map