"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenInterceptor = void 0;
var core_1 = require("@angular/core");
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
        this.ref = null;
        this.now = null;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        this.dateajd = new Date();
        this.now = this.dateajd.getTime();
        // this.ref = JSON.parse(localStorage.getItem('tokenFOS_Expire'));
        this.ref = parseInt(localStorage.getItem('tokenFOS_Expire'));
        // console.log("la c'est NOW " + this.now);
        // console.log("la c'est REF " + this.ref);
        // console.log("la c'est resultat de now-ref : " + (this.now - this.ref));
        // console.log("la c'est resultat de la condition d'entrée : " + ((this.now - this.ref) < 900000));
        if ((this.now - this.ref) < 900000) {
            // console.log(localStorage.getItem('tokenFOS_Token'));
            // localStorage.setItem('tokenFOS_Expire', JSON.stringify(this.now));
            localStorage.setItem('tokenFOS_Expire', this.now);
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.auth.getToken()
                }
            });
            return next.handle(request);
        }
        else {
            this.auth.logout();
            return next.handle(request);
        }
    };
    TokenInterceptor = __decorate([
        core_1.Injectable()
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;
