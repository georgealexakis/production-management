(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-consultant-layout-consultant-layout-module"],{

/***/ "./src/app/consulting/consulting.component.css":
/*!*****************************************************!*\
  !*** ./src/app/consulting/consulting.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    white-space: nowrap;\r\n    width: 40rem;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-top: 1rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGluZy9jb25zdWx0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29uc3VsdGluZy9jb25zdWx0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/consulting/consulting.component.html":
/*!******************************************************!*\
  !*** ./src/app/consulting/consulting.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> My Tips</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive-sm\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <th *ngFor=\"let cell of tableData.headerRow\">{{cell}}</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of tipsList; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{row.title}}</td>\n                  <td>\n                    <p class=\"content\">{{row.content}}</p>\n                  </td>\n                  <td>{{row.tag}}</td>\n                  <td>{{row.registrationDate | date}}</td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-dark btn-icon\" (click)=\"editTip(row)\"><i class=\"fa fa-pencil-alt\"></i></button></td>\n                  <td class=\"text-right\"><button class=\"btn btn-sm btn-danger btn-icon\" (click)=\"deleteTip(row)\"><i\n                        class=\"fa fa-trash\"></i></button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"addNewTip()\"><i class=\"fa fa-plus\"></i> Add New\n        Tip</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/consulting/consulting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/consulting/consulting.component.ts ***!
  \****************************************************/
/*! exports provided: ConsultingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultingComponent", function() { return ConsultingComponent; });
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




var ConsultingComponent = /** @class */ (function () {
    function ConsultingComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.cosultantID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    ConsultingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData = {
            headerRow: ['ID', 'Title', 'Content', 'Tag', 'Date']
        };
        this.contentService.getTipsData().snapshotChanges().subscribe(function (item) {
            _this.tipsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['tid'] = element.key;
                if (_this.cosultantID === y.cid) {
                    _this.tipsList.push(y);
                }
            });
        });
    };
    ConsultingComponent.prototype.editTip = function (tip) {
        this.router.navigate(['/edit-tip/' + tip.tid]);
    };
    ConsultingComponent.prototype.deleteTip = function (tip) {
        this.contentService.deleteTip(tip.tid);
    };
    ConsultingComponent.prototype.addNewTip = function () {
        this.router.navigate(['/new-tip']);
    };
    ConsultingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulting',
            template: __webpack_require__(/*! ./consulting.component.html */ "./src/app/consulting/consulting.component.html"),
            styles: [__webpack_require__(/*! ./consulting.component.css */ "./src/app/consulting/consulting.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], ConsultingComponent);
    return ConsultingComponent;
}());



/***/ }),

/***/ "./src/app/edit-tip/edit-tip.component.css":
/*!*************************************************!*\
  !*** ./src/app/edit-tip/edit-tip.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tip-text{\r\n    max-height: 100% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC10aXAvZWRpdC10aXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdGlwL2VkaXQtdGlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlwLXRleHR7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-tip/edit-tip.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-tip/edit-tip.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Tip</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #editTipForm=\"ngForm\" (ngSubmit)=\"onSubmit(editTipForm)\">\n            <input type=\"hidden\" name=\"tid\" #tid=\"ngModel\" [(ngModel)]=\"tipID\">\n            <input type=\"hidden\" name=\"cid\" #cid=\"ngModel\" [(ngModel)]=\"editedTip.cid\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"editedTip.title\"\n                    placeholder=\"Title\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Tag</label>\n                  <input type=\"text\" class=\"form-control\" name=\"tag\" #tag=\"ngModel\" [(ngModel)]=\"editedTip.tag\"\n                    placeholder=\"Tag of tip\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Content</label>\n                  <textarea rows=\"10\" cols=\"80\" class=\"form-control tip-text\" name=\"content\" #content=\"ngModel\" [(ngModel)]=\"editedTip.content\"\n                    placeholder=\"Main content\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!editTipForm.valid\">Update</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-tip/edit-tip.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-tip/edit-tip.component.ts ***!
  \************************************************/
/*! exports provided: EditTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTipComponent", function() { return EditTipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/content.service */ "./src/app/core/content.service.ts");
/* harmony import */ var _core_tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/tip */ "./src/app/core/tip.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTipComponent = /** @class */ (function () {
    function EditTipComponent(router, route, afDb, contentService) {
        this.router = router;
        this.route = route;
        this.afDb = afDb;
        this.contentService = contentService;
        this.editedTip = new _core_tip__WEBPACK_IMPORTED_MODULE_4__["Tip"]();
        this.getTip();
    }
    EditTipComponent.prototype.ngOnInit = function () { };
    EditTipComponent.prototype.getTip = function () {
        var _this = this;
        this.tipID = this.route.snapshot.paramMap.get('key');
        this.tipReference = this.afDb.object('tips/' + this.tipID);
        this.tipReference.snapshotChanges().subscribe(function (action) {
            _this.editedTip = action.payload.val();
        });
    };
    EditTipComponent.prototype.onSubmit = function (form) {
        if (form.value.tid !== null) {
            this.contentService.updateTip(form.value);
        }
        this.router.navigate(['/consulting']);
    };
    EditTipComponent.prototype.onCancel = function () {
        this.router.navigate(['/consulting']);
    };
    EditTipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-tip',
            template: __webpack_require__(/*! ./edit-tip.component.html */ "./src/app/edit-tip/edit-tip.component.html"),
            styles: [__webpack_require__(/*! ./edit-tip.component.css */ "./src/app/edit-tip/edit-tip.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], EditTipComponent);
    return EditTipComponent;
}());



/***/ }),

/***/ "./src/app/layouts/consultant-layout/consultant-layout.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layouts/consultant-layout/consultant-layout.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultantLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantLayoutModule", function() { return ConsultantLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _consultant_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consultant-layout.routing */ "./src/app/layouts/consultant-layout/consultant-layout.routing.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _consulting_consulting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../consulting/consulting.component */ "./src/app/consulting/consulting.component.ts");
/* harmony import */ var _new_tip_new_tip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../new-tip/new-tip.component */ "./src/app/new-tip/new-tip.component.ts");
/* harmony import */ var _edit_tip_edit_tip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../edit-tip/edit-tip.component */ "./src/app/edit-tip/edit-tip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ConsultantLayoutModule = /** @class */ (function () {
    function ConsultantLayoutModule() {
    }
    ConsultantLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _consulting_consulting_component__WEBPACK_IMPORTED_MODULE_8__["ConsultingComponent"],
                _new_tip_new_tip_component__WEBPACK_IMPORTED_MODULE_9__["NewTipComponent"],
                _edit_tip_edit_tip_component__WEBPACK_IMPORTED_MODULE_10__["EditTipComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_consultant_layout_routing__WEBPACK_IMPORTED_MODULE_4__["ConsultantLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
            ]
        })
    ], ConsultantLayoutModule);
    return ConsultantLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/consultant-layout/consultant-layout.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/consultant-layout/consultant-layout.routing.ts ***!
  \************************************************************************/
/*! exports provided: ConsultantLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantLayoutRoutes", function() { return ConsultantLayoutRoutes; });
/* harmony import */ var _consulting_consulting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consulting/consulting.component */ "./src/app/consulting/consulting.component.ts");
/* harmony import */ var _new_tip_new_tip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../new-tip/new-tip.component */ "./src/app/new-tip/new-tip.component.ts");
/* harmony import */ var _edit_tip_edit_tip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../edit-tip/edit-tip.component */ "./src/app/edit-tip/edit-tip.component.ts");



var ConsultantLayoutRoutes = [
    { path: 'consulting', component: _consulting_consulting_component__WEBPACK_IMPORTED_MODULE_0__["ConsultingComponent"] },
    { path: 'new-tip', component: _new_tip_new_tip_component__WEBPACK_IMPORTED_MODULE_1__["NewTipComponent"] },
    { path: 'edit-tip/:key', component: _edit_tip_edit_tip_component__WEBPACK_IMPORTED_MODULE_2__["EditTipComponent"] }
];


/***/ }),

/***/ "./src/app/new-tip/new-tip.component.css":
/*!***********************************************!*\
  !*** ./src/app/new-tip/new-tip.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tip-text{\r\n    max-height: 100% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRpcC9uZXctdGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9uZXctdGlwL25ldy10aXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXAtdGV4dHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/new-tip/new-tip.component.html":
/*!************************************************!*\
  !*** ./src/app/new-tip/new-tip.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">New Tip</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #newTipForm=\"ngForm\" (ngSubmit)=\"onSubmit(newTipForm)\">\n            <input type=\"hidden\" name=\"cid\" #cid=\"ngModel\" [(ngModel)]=\"this.consultantID\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\" ngModel placeholder=\"Title\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 pr-1\">\n                <div class=\"form-group\">\n                  <label>Tag</label>\n                  <input type=\"text\" class=\"form-control\" name=\"tag\" #tag=\"ngModel\" ngModel placeholder=\"Tag of tip\"\n                    required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Content</label>\n                  <textarea rows=\"10\" cols=\"80\" class=\"form-control tip-text\" name=\"content\" #content=\"ngModel\" ngModel\n                    placeholder=\"Main content\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"onCancel()\">Cancel</button>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!newTipForm.valid\">Add</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-tip/new-tip.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-tip/new-tip.component.ts ***!
  \**********************************************/
/*! exports provided: NewTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTipComponent", function() { return NewTipComponent; });
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




var NewTipComponent = /** @class */ (function () {
    function NewTipComponent(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.consultantID = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    NewTipComponent.prototype.ngOnInit = function () { };
    NewTipComponent.prototype.onSubmit = function (form) {
        this.contentService.insertTip(form.value);
        this.router.navigate(['/consulting']);
    };
    NewTipComponent.prototype.onCancel = function () {
        this.router.navigate(['/consulting']);
    };
    NewTipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-tip',
            template: __webpack_require__(/*! ./new-tip.component.html */ "./src/app/new-tip/new-tip.component.html"),
            styles: [__webpack_require__(/*! ./new-tip.component.css */ "./src/app/new-tip/new-tip.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], NewTipComponent);
    return NewTipComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-consultant-layout-consultant-layout-module.js.map