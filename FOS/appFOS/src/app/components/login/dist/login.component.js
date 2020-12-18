"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var auth_service_1 = require("../../services/auth/auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.data = {
            login: null,
            password: null
        };
        this.result = null;
        this.dateajd = new Date();
        this.moment = null;
        this.asideVisible = authService.authenticate;
        this._asideSubscription = authService.menuVisibilityChange.subscribe(function (value) {
            _this.asideVisible = value;
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "isSidebarVisible", {
        get: function () {
            return this.authService.authenticate;
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.toggleSidebar = function () {
        this.authService.toggleSidebarVisibility();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.loginAuth(this.data).subscribe(function (result) {
            if (result.token !== null) {
                // console.log("result.token");
                // console.log(result.token);
                _this.moment = JSON.stringify(_this.dateajd.getTime());
                // console.log("juste avant enregistrement dans le localStorage this.moment est stringifié " + this.moment);
                localStorage.setItem('tokenFOS_Expire', _this.moment);
                localStorage.setItem('tokenFOS_Token', result.token);
                _this.toggleSidebar();
                _this.router.navigate(['/home'], { skipLocationChange: false });
            }
            else {
                _this.router.navigate(['/login'], { skipLocationChange: false });
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            providers: [auth_service_1.AuthService],
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
