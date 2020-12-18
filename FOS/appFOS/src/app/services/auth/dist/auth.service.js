"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var API_URL = 'http://localhost:3040';
var AuthService = /** @class */ (function () {
    function AuthService(http, router, bonjourService) {
        this.http = http;
        this.router = router;
        this.bonjourService = bonjourService;
        this.ref = null;
        this.now = null;
    }
    AuthService.prototype.ngOnInit = function () {
        // this.isAuthenticated();
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('tokenFOS_Token');
    };
    AuthService.prototype.getExpire = function () {
        return localStorage.getItem('tokenFOS_Expire');
    };
    AuthService.prototype.login = function (data) {
        var _this = this;
        // console.log('formLogin auth', data);
        this.http.post(API_URL + '/login', data).subscribe(function (result) {
            if (result.token !== null) {
                // console.log("result.token :", result.token);
                _this.dateajd = new Date();
                _this.now = JSON.stringify(_this.dateajd.getTime());
                localStorage.setItem('tokenFOS_Expire', _this.now);
                localStorage.setItem('tokenFOS_Token', result.token);
                _this.bonjourService.setBonjour();
                _this.router.navigate(['/home'], { skipLocationChange: false });
            }
            else {
                _this.router.navigate(['/login'], { skipLocationChange: false });
            }
        }, function (error) { return console.log('Error ', error); });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('tokenFOS_Expire');
        localStorage.removeItem('tokenFOS_Token');
        this.bonjourService.setGoodbye();
        //  TODO   http.get('/logout'); // dire à api que token dead
        this.router.navigate(['/login'], { skipLocationChange: false });
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        this.dateajd = new Date();
        this.now = this.dateajd.getTime();
        this.ref = this.getExpire();
        if (token) {
            if ((this.now - this.ref) < 900000) {
                this.now = JSON.stringify(this.now);
                localStorage.setItem('tokenFOS_Expire', this.now);
                this.bonjourService.setBonjour();
            }
            else {
                window.alert('Vous avez été déconnecté car vous êtes resté innactif pendant trop longtemps');
                this.logout();
            }
        }
        else {
            console.log('ou passe dans le else');
            this.logout();
        }
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
