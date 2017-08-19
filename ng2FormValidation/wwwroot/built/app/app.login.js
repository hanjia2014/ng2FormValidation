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
            'client_id': 'GjorS5pff545rBowT6pyFqqkVQIkE0eT',
            'username': value.email,
            'password': value.password,
            'connection': 'Username-Password-Authentication',
            'grant_type': 'password',
            'scope': 'openid name email'
        };
        this.http.post('https://hanjia.auth0.com/oauth/ro', form).subscribe(function (res) {
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
        this.http.post('https://hanjia.auth0.com/tokeninfo', form).subscribe(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC5sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBb0U7QUFDcEUsc0NBQXVFO0FBTXZFLElBQWEsY0FBYztJQUt2Qix3QkFBWSxFQUFlLEVBQVMsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDMUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxLQUFVO1FBQXJCLGlCQW1CQztRQWxCRyxJQUFJLElBQUksR0FBRztZQUNQLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ3ZCLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUMxQixZQUFZLEVBQUUsa0NBQWtDO1lBQ2hELFlBQVksRUFBRSxVQUFVO1lBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQTtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDL0QsVUFBQyxHQUFRO1lBQ0wsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFTO1FBQXJCLGlCQWFDO1FBWkcsSUFBSSxJQUFJLEdBQUc7WUFDUCxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDNUIsQ0FBQTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDaEUsVUFBQyxHQUFRO1lBQ0wsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSxjQUFjO0lBSjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsc0JBQXNCO0tBQ3RDLENBQUM7cUNBTWtCLG1CQUFXLEVBQWUsV0FBSTtHQUxyQyxjQUFjLENBeUQxQjtBQXpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4tZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAubG9naW4uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICAgIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW5cbiAgICBwcm9maWxlOiBPYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBodHRwOiBIdHRwKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0JykpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2VtYWlsJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0odmFsdWU6IGFueSkge1xuICAgICAgICBsZXQgZm9ybSA9IHtcbiAgICAgICAgICAgICdjbGllbnRfaWQnOiAnR2pvclM1cGZmNTQ1ckJvd1Q2cHlGcXFrVlFJa0UwZVQnLFxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogdmFsdWUuZW1haWwsXG4gICAgICAgICAgICAncGFzc3dvcmQnOiB2YWx1ZS5wYXNzd29yZCxcbiAgICAgICAgICAgICdjb25uZWN0aW9uJzogJ1VzZXJuYW1lLVBhc3N3b3JkLUF1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgICAgICdncmFudF90eXBlJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICdzY29wZSc6ICdvcGVuaWQgbmFtZSBlbWFpbCdcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2hhbmppYS5hdXRoMC5jb20vb2F1dGgvcm8nLCBmb3JtKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIGRhdGEuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgZm9ybSA9IHtcbiAgICAgICAgICAgICdpZF90b2tlbic6IGRhdGEuaWRfdG9rZW5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9oYW5qaWEuYXV0aDAuY29tL3Rva2VuaW5mbycsIGZvcm0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2p3dCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=