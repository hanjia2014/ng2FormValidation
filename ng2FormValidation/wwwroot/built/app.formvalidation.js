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
var FormValidationComponent = (function () {
    function FormValidationComponent(fb) {
        this.complexForm = fb.group({
            'firstName': [null, forms_1.Validators.required],
            'lastName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
            'gender': [null, forms_1.Validators.required],
            'hiking': [false],
            'running': [false],
            'swimming': [false]
        });
        console.log(this.complexForm);
        this.complexForm.valueChanges.subscribe(function (form) {
            console.log('form changed to:', form);
        });
    }
    FormValidationComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    return FormValidationComponent;
}());
FormValidationComponent = __decorate([
    core_1.Component({
        selector: 'form-validation',
        templateUrl: './app/app.formvalidation.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormValidationComponent);
exports.FormValidationComponent = FormValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmZvcm12YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2FwcC5mb3JtdmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBb0U7QUFNcEUsSUFBYSx1QkFBdUI7SUFHbEMsaUNBQVksRUFBZTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUIsV0FBVyxFQUFHLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3pDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqSCxRQUFRLEVBQUcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdEMsUUFBUSxFQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2xCLFNBQVMsRUFBRyxDQUFDLEtBQUssQ0FBQztZQUNuQixVQUFVLEVBQUcsQ0FBQyxLQUFLLENBQUM7U0FDckIsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFFLFVBQUMsSUFBUztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FDQSxDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSx1QkFBdUI7SUFKbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFHLCtCQUErQjtLQUM5QyxDQUFDO3FDQUlnQixtQkFBVztHQUhoQix1QkFBdUIsQ0FzQm5DO0FBdEJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS12YWxpZGF0aW9uJyxcbiAgdGVtcGxhdGVVcmwgOiAnLi9hcHAvYXBwLmZvcm12YWxpZGF0aW9uLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0aW9uQ29tcG9uZW50IHtcbiAgY29tcGxleEZvcm0gOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKXtcbiAgICB0aGlzLmNvbXBsZXhGb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgJ2ZpcnN0TmFtZScgOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAnbGFzdE5hbWUnOiBbbnVsbCwgIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKV0pXSxcbiAgICAgICdnZW5kZXInIDogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgJ2hpa2luZycgOiBbZmFsc2VdLFxuICAgICAgJ3J1bm5pbmcnIDogW2ZhbHNlXSxcbiAgICAgICdzd2ltbWluZycgOiBbZmFsc2VdXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBsZXhGb3JtKTtcbiAgICB0aGlzLmNvbXBsZXhGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoIChmb3JtOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtIGNoYW5nZWQgdG86JywgZm9ybSk7XG4gICAgfVxuICAgICk7XG4gIH1cblxuICBzdWJtaXRGb3JtKHZhbHVlOiBhbnkpe1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgfVxufVxuIl19