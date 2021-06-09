"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.YearsService = exports.Years = void 0;
var core_1 = require("@angular/core");
var Years = /** @class */ (function () {
    function Years() {
    }
    return Years;
}());
exports.Years = Years;
var API_URL = 'http://localhost:3040';
var YearsService = /** @class */ (function () {
    function YearsService(http) {
        this.http = http;
    }
    YearsService.prototype.getYears = function () {
        return this.http.get(API_URL + '/years');
    };
    YearsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], YearsService);
    return YearsService;
}());
exports.YearsService = YearsService;