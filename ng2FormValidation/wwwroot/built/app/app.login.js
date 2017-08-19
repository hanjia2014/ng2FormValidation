"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var LoginComponent = (function () {
    function LoginComponent(fb, http) {
        this.http = http;
        if (localStorage.getItem('jwt')) {
            this.authenticated = true;
            this.profile = JSON.parse(localStorage.getItem('profile'));
        }
        this.loginForm = fb.group({
            'email': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required],
        });
    }
    LoginComponent.prototype.submitForm = function (value) {
        var _this = this;
        var form = {
            'client_id': 'YOUR-AUTH0-CLIENT-ID',
            'username': value.email,
            'password': value.password,
            'connection': 'YOUR-DATABASE-CONNECTION-NAME',
            'grant_type': 'password',
            'scope': 'openid name email'
        };
        this.http.post('https://YOUR-AUTH0-DOMAIN.auth0.com/oauth/ro', form).subscribe(function (res) {
            var data = res.json();
            if (data.id_token) {
                localStorage.setItem('jwt', data.id_token);
                _this.getUserInfo(data);
            }
        });
    };
    LoginComponent.prototype.getUserInfo = function (data) {
        var _this = this;
        var form = {
            'id_token': data.id_token
        };
        this.http.post('https://YOUR-AUTH0-DOMAIN.auth0.com/tokeninfo', form).subscribe(function (res) {
            var data = res.json();
            _this.profile = data;
            localStorage.setItem('profile', JSON.stringify(data));
            _this.authenticated = true;
            _this.loginForm.reset();
        });
    };
    LoginComponent.prototype.logout = function () {
        localStorage.removeItem('jwt');
        localStorage.removeItem('profile');
        this.authenticated = false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        templateUrl: './app/app.login.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC5sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBb0U7QUFDcEUsc0NBQXFFO0FBTXJFLElBQWEsY0FBYztJQUt6Qix3QkFBWSxFQUFlLEVBQVMsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUMsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sRUFBRyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDeEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxLQUFVO1FBQXJCLGlCQW1CQztRQWxCQyxJQUFJLElBQUksR0FBRztZQUNULFdBQVcsRUFBRyxzQkFBc0I7WUFDcEMsVUFBVSxFQUFHLEtBQUssQ0FBQyxLQUFLO1lBQ3hCLFVBQVUsRUFBRyxLQUFLLENBQUMsUUFBUTtZQUMzQixZQUFZLEVBQUcsK0JBQStCO1lBQzlDLFlBQVksRUFBRyxVQUFVO1lBQ3pCLE9BQU8sRUFBRyxtQkFBbUI7U0FDOUIsQ0FBQTtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDhDQUE4QyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDNUUsVUFBQyxHQUFPO1lBQ04sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFTO1FBQXJCLGlCQWFDO1FBWkMsSUFBSSxJQUFJLEdBQUc7WUFDVCxVQUFVLEVBQUcsSUFBSSxDQUFDLFFBQVE7U0FDM0IsQ0FBQTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLCtDQUErQyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDN0UsVUFBQyxHQUFPO1lBQ04sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSxjQUFjO0lBSjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUcsc0JBQXNCO0tBQ3JDLENBQUM7cUNBTWdCLG1CQUFXLEVBQWUsV0FBSTtHQUxuQyxjQUFjLENBeUQxQjtBQXpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2dpbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmwgOiAnLi9hcHAvYXBwLmxvZ2luLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgbG9naW5Gb3JtIDogRm9ybUdyb3VwO1xuICBhdXRoZW50aWNhdGVkOiBib29sZWFuXG4gIHByb2ZpbGUgOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cCl7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpKXtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnByb2ZpbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xuICAgIH1cbiAgICB0aGlzLmxvZ2luRm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICdlbWFpbCcgOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAncGFzc3dvcmQnOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSlcbiAgfVxuXG4gIHN1Ym1pdEZvcm0odmFsdWU6IGFueSl7XG4gICAgbGV0IGZvcm0gPSB7XG4gICAgICAnY2xpZW50X2lkJyA6ICdZT1VSLUFVVEgwLUNMSUVOVC1JRCcsXG4gICAgICAndXNlcm5hbWUnIDogdmFsdWUuZW1haWwsXG4gICAgICAncGFzc3dvcmQnIDogdmFsdWUucGFzc3dvcmQsXG4gICAgICAnY29ubmVjdGlvbicgOiAnWU9VUi1EQVRBQkFTRS1DT05ORUNUSU9OLU5BTUUnLFxuICAgICAgJ2dyYW50X3R5cGUnIDogJ3Bhc3N3b3JkJyxcbiAgICAgICdzY29wZScgOiAnb3BlbmlkIG5hbWUgZW1haWwnXG4gICAgfVxuXG4gICAgdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vWU9VUi1BVVRIMC1ET01BSU4uYXV0aDAuY29tL29hdXRoL3JvJywgZm9ybSkuc3Vic2NyaWJlKFxuICAgICAgKHJlczphbnkpPT57XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgaWYoZGF0YS5pZF90b2tlbil7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIGRhdGEuaWRfdG9rZW4pO1xuICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBnZXRVc2VySW5mbyhkYXRhOiBhbnkpe1xuICAgIGxldCBmb3JtID0ge1xuICAgICAgJ2lkX3Rva2VuJyA6IGRhdGEuaWRfdG9rZW5cbiAgICB9XG4gICAgdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vWU9VUi1BVVRIMC1ET01BSU4uYXV0aDAuY29tL3Rva2VuaW5mbycsIGZvcm0pLnN1YnNjcmliZShcbiAgICAgIChyZXM6YW55KT0+e1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHRoaXMucHJvZmlsZSA9IGRhdGE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5yZXNldCgpO1xuICAgICAgfVxuICAgIClcbiAgfVxuICBcbiAgbG9nb3V0KCl7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2p3dCcpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==