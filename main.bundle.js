webpackJsonp([1,4],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_info__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
        console.log('UserService connect');
        this.init();
    }
    UserService.prototype.init = function () {
        if (localStorage.getItem('users') === null || localStorage.getItem('users') === undefined) {
            var users = __WEBPACK_IMPORTED_MODULE_1__data_data_info__["a" /* USERS */];
            localStorage.setItem('users', JSON.stringify(users));
            return;
        }
    };
    UserService.prototype.getUsers = function () {
        return JSON.parse(localStorage.getItem('users'));
    };
    UserService.prototype.update = function (data) {
        localStorage.setItem('users', JSON.stringify(data));
        return;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(302);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_components_contacts_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_components_groups_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_components_clock_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_7__pages_components_contacts_component__["a" /* ContactsPageComponent */] },
    { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_8__pages_components_groups_component__["a" /* GroupsPageComponent */] },
    { path: 'clock', component: __WEBPACK_IMPORTED_MODULE_9__pages_components_clock_component__["a" /* ClockPageComponent */] },
    { path: '**', redirectTo: 'contacts', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_components_contacts_component__["a" /* ContactsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_components_groups_component__["a" /* GroupsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_components_clock_component__["a" /* ClockPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["b" /* AccordionModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var User = (function () {
    function User() {
    }
    return User;
}());
var USERS = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Pupkin',
        age: 47,
        active: false,
        group: 'user',
        description: 'Like coffee',
        note: ''
    },
    {
        id: 2,
        name: 'Vasyl',
        surname: 'Pupkin',
        age: 42,
        active: false,
        group: 'admin',
        description: 'Like coffee',
        note: ''
    },
    {
        id: 3,
        name: 'Bill',
        surname: 'Gates',
        age: 57,
        active: false,
        group: 'user',
        description: 'Like coffee',
        note: ''
    },
    {
        id: 4,
        name: 'Ivan',
        surname: 'Ivanov',
        age: 21,
        active: false,
        group: 'user',
        description: 'Like coffee',
        note: ''
    }
];
//# sourceMappingURL=data-info.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClockPageComponent = (function () {
    function ClockPageComponent(appComponent, userService) {
        var _this = this;
        this.appComponent = appComponent;
        this.userService = userService;
        setInterval(function () {
            _this.currentTime = __WEBPACK_IMPORTED_MODULE_1_moment__().format('h:mm:ss a');
        }, 1000);
    }
    ClockPageComponent.prototype.ngOnInit = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__().format('Do MMM YYYY');
    };
    ClockPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var canvasEl = this.canvas.nativeElement;
        this.ctx = canvasEl.getContext("2d");
        this.radius = canvasEl.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.9;
        setInterval(function () { _this.drawClock(); }, 1000);
    };
    ClockPageComponent.prototype.drawClock = function () {
        this.drawFace(this.ctx, this.radius);
        this.drawNumbers(this.ctx, this.radius);
        this.drawTime(this.ctx, this.radius);
    };
    ClockPageComponent.prototype.drawFace = function (ctx, radius) {
        var grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#d499a1";
        ctx.fill();
        grad = ctx.createRadialGradient(0, 0, radius * 0.8, 0, 0, radius * 1.35);
        // grad.addColorStop(0, '#000');
        // grad.addColorStop(0.5, '#FFF');
        grad.addColorStop(1, '#FFF');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    };
    ClockPageComponent.prototype.drawNumbers = function (ctx, radius) {
        var ang;
        var num;
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.80);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.80);
            ctx.rotate(-ang);
        }
    };
    ClockPageComponent.prototype.drawTime = function (ctx, radius) {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        // hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        this.drawHand(ctx, hour, radius * 0.4, radius * 0.07);
        // minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        this.drawHand(ctx, minute, radius * 0.6, radius * 0.07);
        // second
        second = (second * Math.PI / 30);
        this.drawHand(ctx, second, radius * 0.75, radius * 0.02);
    };
    ClockPageComponent.prototype.drawHand = function (ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    };
    return ClockPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], ClockPageComponent.prototype, "canvas", void 0);
ClockPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(382)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], ClockPageComponent);

var _a, _b, _c;
//# sourceMappingURL=clock.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactsPageComponent = (function () {
    function ContactsPageComponent(appComponent, userService) {
        this.appComponent = appComponent;
        this.userService = userService;
        this.error = {
            message: ''
        };
        this.submitted = false;
        this.contactForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            surname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            group: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](),
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]()
        });
    }
    ContactsPageComponent.prototype.showChildModal = function (edit) {
        if (edit) {
            this.toEdit = true;
            this.fillForm();
        }
        this.childModal.show();
    };
    ContactsPageComponent.prototype.hideChildModal = function () {
        if (this.toEdit) {
            this.toEdit = false;
            this.contactForm.reset();
        }
        this.childModal.hide();
    };
    ContactsPageComponent.prototype.ngOnInit = function () {
        this.users = this.userService.getUsers();
        this.toSelect = false;
        this.toEdit = false;
        this.checkNumberOfInputs = 0;
    };
    ContactsPageComponent.prototype.toSelectBtn = function () {
        this.toSelect = !this.toSelect;
    };
    ContactsPageComponent.prototype.checkInputs = function (event, user) {
        if (event.target.checked) {
            this.checkNumberOfInputs++;
            user.active = true;
        }
        else {
            this.checkNumberOfInputs--;
            user.active = false;
        }
        if (this.checkNumberOfInputs === 1) {
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].active) {
                    this.currentContact = this.users[i];
                    break;
                }
            }
        }
    };
    ContactsPageComponent.prototype.removeContacts = function () {
        var cache = [];
        for (var i = 0; i < this.users.length; i++) {
            if (!this.users[i].active) {
                cache.push(this.users[i]);
            }
        }
        this.users = cache;
        this.checkNumberOfInputs = 0;
        this.userService.update(this.users);
    };
    ContactsPageComponent.prototype.createContact = function () {
        this.submitted = true;
        if (this.contactForm.valid) {
            var newContactObj = this.contactForm.value;
            newContactObj.active = false;
            newContactObj.id = this.users[this.users.length - 1].id + 1;
            this.submitted = false;
            this.contactForm.reset();
            this.hideChildModal();
            this.users.push(newContactObj);
            this.userService.update(this.users);
        }
        else {
            this.error.message = 'Fill all inputs!';
        }
    };
    ContactsPageComponent.prototype.editContact = function () {
        this.submitted = true;
        if (this.contactForm.valid) {
            var newContactObj = this.contactForm.value;
            newContactObj.id = this.contactToEdit.id;
            newContactObj.active = false;
            this.replaceEditItem(this.users, newContactObj);
            this.checkNumberOfInputs = 0;
            this.submitted = false;
            this.contactToEdit = null;
            this.contactForm.reset();
            this.hideChildModal();
            this.userService.update(this.users);
        }
        else {
            this.error.message = 'Fill all inputs!';
        }
    };
    ContactsPageComponent.prototype.replaceEditItem = function (parent, child) {
        for (var i = 0; i < parent.length; i++) {
            if (parent[i].id === child.id) {
                parent[i] = child;
                break;
            }
        }
    };
    ContactsPageComponent.prototype.fillForm = function () {
        var selectedContact;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].active) {
                selectedContact = this.users[i];
                this.contactToEdit = selectedContact;
                break;
            }
        }
        this.contactForm.controls['name'].setValue(selectedContact.name);
        this.contactForm.controls['surname'].setValue(selectedContact.surname);
        this.contactForm.controls['age'].setValue(selectedContact.age);
        this.contactForm.controls['group'].setValue(selectedContact.group);
        this.contactForm.controls['description'].setValue(selectedContact.description);
        this.contactForm.controls['note'].setValue(selectedContact.note);
    };
    return ContactsPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('childModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], ContactsPageComponent.prototype, "childModal", void 0);
ContactsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(383)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], ContactsPageComponent);

var _a, _b, _c;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsPageComponent = (function () {
    function GroupsPageComponent(appComponent, userService) {
        this.appComponent = appComponent;
        this.userService = userService;
        this.sortedGroups = null;
    }
    GroupsPageComponent.prototype.ngOnInit = function () {
        this.sortedGroups = null;
        this.groupInfo = null;
        this.activeInfoCard = false;
        this.contactsArray = this.userService.getUsers();
        this.createGroupsArray(this.contactsArray);
    };
    GroupsPageComponent.prototype.createGroupsArray = function (items) {
        var _this = this;
        items.forEach(function (item) {
            if (!_this.sortedGroups) {
                _this.sortedGroups = [];
                _this.sortedGroups.push(_this._createGroupObj(item));
            }
            else {
                var checkName_1 = false;
                _this.sortedGroups.forEach(function (group) {
                    if (group.name === item.group) {
                        group.contacts.push(item);
                        checkName_1 = true;
                    }
                });
                if (!checkName_1) {
                    _this.sortedGroups.push(_this._createGroupObj(item));
                }
            }
        });
    };
    GroupsPageComponent.prototype._createGroupObj = function (data) {
        var group = {
            name: data.group,
            contacts: [data]
        };
        return group;
    };
    GroupsPageComponent.prototype.openGroup = function (group) {
        if (!this.groupInfo) {
            this.groupInfo = group;
        }
        if (this.activeInfoCard) {
            if (this.groupInfo.name === group.name) {
                this.activeInfoCard = false;
                this.groupInfo = null;
            }
            else {
                this.groupInfo = group;
            }
        }
        else {
            this.activeInfoCard = true;
        }
    };
    GroupsPageComponent.prototype.removeFromGroup = function (contact) {
        var noGroupContact = contact;
        noGroupContact.group = 'no group';
        this._updateContactsArray(noGroupContact);
        this.userService.update(this.contactsArray);
        this.sortedGroups = null;
        this.activeInfoCard = false;
        this.groupInfo = null;
        this.createGroupsArray(this.contactsArray);
    };
    GroupsPageComponent.prototype._updateContactsArray = function (newData) {
        this.contactsArray.forEach(function (contact) {
            if (contact.id === newData.id) {
                contact = newData;
            }
        });
    };
    return GroupsPageComponent;
}());
GroupsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(384)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], GroupsPageComponent);

var _a, _b;
//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular

// Import Services

var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(381),
        styles: [__webpack_require__(356)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)();
// imports


// module
exports.push([module.i, ".buffer-top {\n  margin-top: 20px; }\n\n.buffer-bottom {\n  margin-bottom: 20px; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.empty-content {\n  text-transform: uppercase;\n  font-size: 16px; }\n\nlegend.nav-fieldset-custom {\n  width: auto;\n  padding: 2px 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3) !important;\n  text-transform: uppercase;\n  font-size: 12px;\n  border-radius: 3px;\n  box-shadow: none; }\n\nfieldset.nav-fieldset-custom {\n  border: 1px solid rgba(0, 0, 0, 0.3) !important;\n  padding: 0 1.4em 1.4em 1.4em !important;\n  margin: 0 0 1.5em 0 !important;\n  box-shadow: 0 0 0 0 #000;\n  border-radius: 5px;\n  height: 450px; }\n\n.users-line div {\n  line-height: 35px;\n  border-right: 1px solid rgba(0, 0, 0, 0.3); }\n\n.contacts-wrapper {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  height: 335px;\n  overflow: scroll; }\n  .contacts-wrapper .row {\n    padding-left: 0;\n    padding-right: 0;\n    margin-left: 0;\n    margin-right: 0; }\n  .contacts-wrapper .to-arrow {\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.3);\n    color: #fff; }\n  .contacts-wrapper .to-arrow::after {\n    content: '';\n    position: absolute;\n    left: calc(50% - 10px);\n    bottom: -21px;\n    border: 10px solid transparent;\n    border-top: 10px solid rgba(0, 0, 0, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 106,
	"./af.js": 106,
	"./ar": 113,
	"./ar-dz": 107,
	"./ar-dz.js": 107,
	"./ar-kw": 108,
	"./ar-kw.js": 108,
	"./ar-ly": 109,
	"./ar-ly.js": 109,
	"./ar-ma": 110,
	"./ar-ma.js": 110,
	"./ar-sa": 111,
	"./ar-sa.js": 111,
	"./ar-tn": 112,
	"./ar-tn.js": 112,
	"./ar.js": 113,
	"./az": 114,
	"./az.js": 114,
	"./be": 115,
	"./be.js": 115,
	"./bg": 116,
	"./bg.js": 116,
	"./bn": 117,
	"./bn.js": 117,
	"./bo": 118,
	"./bo.js": 118,
	"./br": 119,
	"./br.js": 119,
	"./bs": 120,
	"./bs.js": 120,
	"./ca": 121,
	"./ca.js": 121,
	"./cs": 122,
	"./cs.js": 122,
	"./cv": 123,
	"./cv.js": 123,
	"./cy": 124,
	"./cy.js": 124,
	"./da": 125,
	"./da.js": 125,
	"./de": 128,
	"./de-at": 126,
	"./de-at.js": 126,
	"./de-ch": 127,
	"./de-ch.js": 127,
	"./de.js": 128,
	"./dv": 129,
	"./dv.js": 129,
	"./el": 130,
	"./el.js": 130,
	"./en-au": 131,
	"./en-au.js": 131,
	"./en-ca": 132,
	"./en-ca.js": 132,
	"./en-gb": 133,
	"./en-gb.js": 133,
	"./en-ie": 134,
	"./en-ie.js": 134,
	"./en-nz": 135,
	"./en-nz.js": 135,
	"./eo": 136,
	"./eo.js": 136,
	"./es": 138,
	"./es-do": 137,
	"./es-do.js": 137,
	"./es.js": 138,
	"./et": 139,
	"./et.js": 139,
	"./eu": 140,
	"./eu.js": 140,
	"./fa": 141,
	"./fa.js": 141,
	"./fi": 142,
	"./fi.js": 142,
	"./fo": 143,
	"./fo.js": 143,
	"./fr": 146,
	"./fr-ca": 144,
	"./fr-ca.js": 144,
	"./fr-ch": 145,
	"./fr-ch.js": 145,
	"./fr.js": 146,
	"./fy": 147,
	"./fy.js": 147,
	"./gd": 148,
	"./gd.js": 148,
	"./gl": 149,
	"./gl.js": 149,
	"./gom-latn": 150,
	"./gom-latn.js": 150,
	"./he": 151,
	"./he.js": 151,
	"./hi": 152,
	"./hi.js": 152,
	"./hr": 153,
	"./hr.js": 153,
	"./hu": 154,
	"./hu.js": 154,
	"./hy-am": 155,
	"./hy-am.js": 155,
	"./id": 156,
	"./id.js": 156,
	"./is": 157,
	"./is.js": 157,
	"./it": 158,
	"./it.js": 158,
	"./ja": 159,
	"./ja.js": 159,
	"./jv": 160,
	"./jv.js": 160,
	"./ka": 161,
	"./ka.js": 161,
	"./kk": 162,
	"./kk.js": 162,
	"./km": 163,
	"./km.js": 163,
	"./kn": 164,
	"./kn.js": 164,
	"./ko": 165,
	"./ko.js": 165,
	"./ky": 166,
	"./ky.js": 166,
	"./lb": 167,
	"./lb.js": 167,
	"./lo": 168,
	"./lo.js": 168,
	"./lt": 169,
	"./lt.js": 169,
	"./lv": 170,
	"./lv.js": 170,
	"./me": 171,
	"./me.js": 171,
	"./mi": 172,
	"./mi.js": 172,
	"./mk": 173,
	"./mk.js": 173,
	"./ml": 174,
	"./ml.js": 174,
	"./mr": 175,
	"./mr.js": 175,
	"./ms": 177,
	"./ms-my": 176,
	"./ms-my.js": 176,
	"./ms.js": 177,
	"./my": 178,
	"./my.js": 178,
	"./nb": 179,
	"./nb.js": 179,
	"./ne": 180,
	"./ne.js": 180,
	"./nl": 182,
	"./nl-be": 181,
	"./nl-be.js": 181,
	"./nl.js": 182,
	"./nn": 183,
	"./nn.js": 183,
	"./pa-in": 184,
	"./pa-in.js": 184,
	"./pl": 185,
	"./pl.js": 185,
	"./pt": 187,
	"./pt-br": 186,
	"./pt-br.js": 186,
	"./pt.js": 187,
	"./ro": 188,
	"./ro.js": 188,
	"./ru": 189,
	"./ru.js": 189,
	"./sd": 190,
	"./sd.js": 190,
	"./se": 191,
	"./se.js": 191,
	"./si": 192,
	"./si.js": 192,
	"./sk": 193,
	"./sk.js": 193,
	"./sl": 194,
	"./sl.js": 194,
	"./sq": 195,
	"./sq.js": 195,
	"./sr": 197,
	"./sr-cyrl": 196,
	"./sr-cyrl.js": 196,
	"./sr.js": 197,
	"./ss": 198,
	"./ss.js": 198,
	"./sv": 199,
	"./sv.js": 199,
	"./sw": 200,
	"./sw.js": 200,
	"./ta": 201,
	"./ta.js": 201,
	"./te": 202,
	"./te.js": 202,
	"./tet": 203,
	"./tet.js": 203,
	"./th": 204,
	"./th.js": 204,
	"./tl-ph": 205,
	"./tl-ph.js": 205,
	"./tlh": 206,
	"./tlh.js": 206,
	"./tr": 207,
	"./tr.js": 207,
	"./tzl": 208,
	"./tzl.js": 208,
	"./tzm": 210,
	"./tzm-latn": 209,
	"./tzm-latn.js": 209,
	"./tzm.js": 210,
	"./uk": 211,
	"./uk.js": 211,
	"./ur": 212,
	"./ur.js": 212,
	"./uz": 214,
	"./uz-latn": 213,
	"./uz-latn.js": 213,
	"./uz.js": 214,
	"./vi": 215,
	"./vi.js": 215,
	"./x-pseudo": 216,
	"./x-pseudo.js": 216,
	"./yo": 217,
	"./yo.js": 217,
	"./zh-cn": 218,
	"./zh-cn.js": 218,
	"./zh-hk": 219,
	"./zh-hk.js": 219,
	"./zh-tw": 220,
	"./zh-tw.js": 220
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 358;


/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Users and Groups:</h1>\n<div class=\"container buffer-top\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <div class=\"nav-wrapper\">\n        <fieldset class=\"nav-fieldset-custom\">\n          <legend class=\"nav-fieldset-custom\">Menu</legend>\n          <a class=\"btn btn-info btn-block\" routerLink=\"/contacts\">Contacts</a>\n          <a class=\"btn btn-info btn-block\" routerLink=\"/groups\">Groups</a>\n          <a class=\"btn btn-info btn-block\" routerLink=\"/clock\">Clock</a>\n        </fieldset>\n      </div>\n    </div>\n    <div class=\"col-sm-10 no-padding\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8\">\n  <div class=\"main-wrapper\">\n    <fieldset class=\"nav-fieldset-custom\">\n      <legend class=\"nav-fieldset-custom\" align=\"center\">Analog Clock</legend>\n      <div class=\"buffer-top text-center\">\n        <canvas id=\"clock_id\" #canvas width=\"300\" height=\"300\"></canvas>\n      </div>\n    </fieldset>\n  </div>\n</div>\n<div class=\"col-sm-4\">\n  <div class=\"info-wrapper\">\n    <fieldset class=\"nav-fieldset-custom\">\n      <legend class=\"nav-fieldset-custom\" align=\"right\">Digital Clock</legend>\n      <h2 class=\"buffer-top buffer-bottom text-center\">Date: <br>{{currentDate}}</h2>\n      <h1 class=\"buffer-top text-center\">{{currentTime}}</h1>\n    </fieldset>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-9\">\n  <div class=\"main-wrapper\">\n    <fieldset class=\"nav-fieldset-custom\">\n      <legend class=\"nav-fieldset-custom\" align=\"center\">Contacts page</legend>\n      <div class=\"actions-btn-wrapper text-center\">\n        <div class=\"row\">\n          <button type=\"button\" class=\"btn btn-default col-sm-3\" [disabled]=\"toSelect\" (click)=\"showChildModal()\">Create</button>\n          <button type=\"button\" class=\"btn btn-info col-sm-3\" [disabled]=\"checkNumberOfInputs !== 1\" (click)=\"showChildModal('edit')\">Edit</button>\n          <button type=\"button\" class=\"btn btn-danger col-sm-3\" [disabled]=\"checkNumberOfInputs === 0\" (click)=\"removeContacts()\">Delete</button>\n          <button type=\"button\" class=\"btn btn-success col-sm-3\" (click)=\"toSelectBtn()\" *ngIf=\"!toSelect\">Select</button>\n          <button type=\"button\" class=\"btn btn-danger col-sm-3\" [disabled]=\"checkNumberOfInputs > 0\" (click)=\"toSelectBtn()\" *ngIf=\"toSelect\">Cancel</button>\n        </div>\n      </div>\n      <div class=\"contacts-wrapper buffer-top\" *ngIf=\"users && users.length > 0\">\n        <div class=\"row buffer-bottom table-bordered text-center\">\n          <div class=\"col-sm-1\" *ngIf=\"toSelect\"></div>\n          <div class=\"col-sm-1\" *ngIf=\"!toSelect\">#</div>\n          <div class=\"col-sm-2 to-arrow\"><span>Name</span></div>\n          <div class=\"col-sm-2 to-arrow\"><span>Surname</span></div>\n          <div class=\"col-sm-2 to-arrow\"><span>Age</span></div>\n          <div class=\"col-sm-3 to-arrow\"><span>Description</span></div>\n          <div class=\"col-sm-2 to-arrow\"><span>Note</span></div>\n        </div>\n        <div class=\"row table-bordered text-center users-line\" *ngFor=\"let user of users; let i = index;\">\n          <div class=\"col-sm-1\" *ngIf=\"!toSelect\">{{i + 1}}</div>\n          <div class=\"col-sm-1\" *ngIf=\"toSelect\"><input type=\"checkbox\" (change)=\"checkInputs($event, user)\"></div>\n          <div class=\"col-sm-2\"><span>{{user.name}}</span></div>\n          <div class=\"col-sm-2\"><span>{{user.surname}}</span></div>\n          <div class=\"col-sm-2\"><span>{{user.age}}</span></div>\n          <div class=\"col-sm-3\"><span>{{user.description}}</span></div>\n          <div class=\"col-sm-2\"><span>{{user.note}}</span></div>\n        </div>\n      </div>\n      <div class=\"contacts-wrapper buffer-top text-center\" *ngIf=\"users && users.length === 0\">\n        There aren't any contacts!\n      </div>\n    </fieldset>\n  </div>\n</div>\n<div class=\"col-sm-3\">\n  <div class=\"info-wrapper\">\n    <fieldset class=\"nav-fieldset-custom\">\n      <legend class=\"nav-fieldset-custom\" align=\"right\">Contact card</legend>\n      <div class=\"text-center buffer-top empty-content\" *ngIf=\"checkNumberOfInputs === 0\">\n        No user is selected!<br>Please, make a choice!\n      </div>\n      <div class=\"buffer-top\" *ngIf=\"checkNumberOfInputs === 1\">\n        <h3 class=\"text-center buffer-bottom\">{{currentContact.name}} {{currentContact.surname}}</h3>\n        <p>age: {{currentContact.age}}</p>\n        <p>group: {{currentContact.group}}</p>\n        <p>description: {{currentContact.description}}</p>\n        <p>note: {{currentContact.note}}</p>\n      </div>\n      <div class=\"text-center buffer-top\" *ngIf=\"checkNumberOfInputs > 1\">\n        Press <button [disabled]=\"true\" class=\"btn btn-danger btn-sm\">Delete</button> button <br>to remove <br>selected Contacts.\n      </div>\n    </fieldset>\n  </div>\n</div>\n\n<!--Modal to create new Contact-->\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!toEdit\">Create new Contact:</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"toEdit\">Edit Contact:</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"alert alert-danger text-center col-sm-6 col-sm-offset-3\" role=\"alert\" [hidden]=\"!error.message\">{{error.message}}</div>\n        <form [formGroup]=\"contactForm\" class=\"form-horizontal\" id=\"contact-form\">\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error': !contactForm.controls['name'].valid && submitted}\">\n            <label for=\"name\" class=\"col-sm-5 control-label\">Name</label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error': !contactForm.controls['surname'].valid && submitted}\">\n            <label for=\"surname\" class=\"col-sm-5 control-label\">Surname</label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error': !contactForm.controls['age'].valid && submitted}\">\n            <label for=\"age\" class=\"col-sm-5 control-label\">Age</label>\n            <div class=\"col-sm-6\">\n              <input type=\"number\" id=\"age\" formControlName=\"age\" class=\"form-control\" min=\"1\">\n            </div>\n          </div>\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error': !contactForm.controls['group'].valid && submitted}\">\n            <label for=\"group\" class=\"col-sm-5 control-label\">Group</label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" id=\"group\" formControlName=\"group\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error': !contactForm.controls['description'].valid && submitted}\">\n            <label for=\"description\" class=\"col-sm-5 control-label\">Description</label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" id=\"description\" formControlName=\"description\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error': !contactForm.controls['note'].valid && submitted}\">\n            <label for=\"note\" class=\"col-sm-5 control-label\">Note</label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" id=\"note\" formControlName=\"note\" class=\"form-control\">\n            </div>\n          </div>\n        </form>\n        <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"createContact()\" *ngIf=\"!toEdit\">Create</button>\n        <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"editContact()\" *ngIf=\"toEdit\">Edit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8\">\n  <div class=\"main-wrapper\">\n    <fieldset class=\"nav-fieldset-custom\">\n      <legend class=\"nav-fieldset-custom\" align=\"center\">Groups page</legend>\n      <accordion [closeOthers]=\"true\">\n        <accordion-group heading=\"name: {{group.name}}, (number of contacts: {{group.contacts.length}})\" *ngFor=\"let group of sortedGroups\" (click)=\"openGroup(group)\">\n          <div *ngFor=\"let contact of group.contacts\" class=\"col-sm-12\">\n            {{contact.name}} {{contact.surname}}\n          </div>\n        </accordion-group>\n      </accordion>\n    </fieldset>\n  </div>\n</div>\n<div class=\"col-sm-4\">\n  <div class=\"info-wrapper\">\n    <fieldset class=\"nav-fieldset-custom\">\n      <legend class=\"nav-fieldset-custom\" align=\"right\">Group info</legend>\n      <div class=\"buffer-top text-center\" *ngIf=\"!activeInfoCard\">\n        <h2>Click on group to see info!</h2>\n      </div>\n      <div class=\"buffer-top text-center\" *ngIf=\"activeInfoCard\">\n        <h2 class=\"buffer-bottom\">{{groupInfo.name}}</h2>\n        <div class=\"row\" *ngFor=\"let cont of groupInfo.contacts\">\n          <div class=\"col-sm-6\">{{cont.name}} {{cont.surname}}</div>\n          <div class=\"col-sm-6\" *ngIf=\"groupInfo.name !== 'no group'\">\n            <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"removeFromGroup(cont)\">Del</button>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n</div>\n"

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ })

},[429]);
//# sourceMappingURL=main.bundle.js.map