"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var auth_service_1 = require("../../services/auth/auth.service");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, bonjourService) {
        this.authService = authService;
        this.bonjourService = bonjourService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionBonjour = this.bonjourService.getBonjour().subscribe(function (data) { console.log('Data de Bonjour :', data); _this.navbarDisplay = data; }, function (err) { return console.group('Erreur data de bonjour', err); });
        this.authService.isAuthenticated();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscriptionBonjour.unsubscribe();
    };
    NavbarComponent.prototype.checking = function () {
        console.log('navbar navbarDisplay');
        console.log(this.navbarDisplay);
    };
    NavbarComponent.prototype.navbarLogout = function () {
        this.authService.logout();
        console.log('navbarLogout');
    };
    NavbarComponent.prototype.showStorage = function () {
        console.log(localStorage.getItem('tokenFOS_Expire'));
        console.log(localStorage.getItem('tokenFOS_Token'));
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            providers: [auth_service_1.AuthService],
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
