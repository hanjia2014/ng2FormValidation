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
var ComplexFormComponent = (function () {
    function ComplexFormComponent(fb) {
        this.complexForm = fb.group({
            'firstName': '',
            'lastName': '',
            'gender': ['Female'],
            'hiking': false,
            'running': false,
            'swimming': false
        });
    }
    ComplexFormComponent.prototype.submitForm = function (value) {
        console.log('Reactive Form Data: ');
        console.log(value);
    };
    return ComplexFormComponent;
}());
ComplexFormComponent = __decorate([
    core_1.Component({
        selector: 'complex-form',
        templateUrl: './app/app.complexform.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ComplexFormComponent);
exports.ComplexFormComponent = ComplexFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBsZXhmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC5jb21wbGV4Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBcUU7QUFNckUsSUFBYSxvQkFBb0I7SUFHL0IsOEJBQVksRUFBZTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUIsV0FBVyxFQUFHLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUcsQ0FBQyxRQUFRLENBQUM7WUFDckIsUUFBUSxFQUFHLEtBQUs7WUFDaEIsU0FBUyxFQUFHLEtBQUs7WUFDakIsVUFBVSxFQUFHLEtBQUs7U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksb0JBQW9CO0lBSmhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUcsNEJBQTRCO0tBQzNDLENBQUM7cUNBSWdCLG1CQUFXO0dBSGhCLG9CQUFvQixDQWtCaEM7QUFsQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcGxleC1mb3JtJyxcbiAgdGVtcGxhdGVVcmwgOiAnLi9hcHAvYXBwLmNvbXBsZXhmb3JtLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBsZXhGb3JtQ29tcG9uZW50IHtcbiAgY29tcGxleEZvcm0gOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKXtcbiAgICB0aGlzLmNvbXBsZXhGb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgJ2ZpcnN0TmFtZScgOiAnJyxcbiAgICAgICdsYXN0TmFtZSc6ICcnLFxuICAgICAgJ2dlbmRlcicgOiBbJ0ZlbWFsZSddLFxuICAgICAgJ2hpa2luZycgOiBmYWxzZSxcbiAgICAgICdydW5uaW5nJyA6IGZhbHNlLFxuICAgICAgJ3N3aW1taW5nJyA6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHN1Ym1pdEZvcm0odmFsdWU6IGFueSl7XG4gICAgY29uc29sZS5sb2coJ1JlYWN0aXZlIEZvcm0gRGF0YTogJylcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==