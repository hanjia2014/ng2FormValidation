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
            'phoneNo': ['+64 21 142 7176', forms_1.Validators.required],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmZvcm12YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC5mb3JtdmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBb0U7QUFNcEUsSUFBYSx1QkFBdUI7SUFHaEMsaUNBQVksRUFBZTtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3hDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoSCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkQsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNsQixVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDdEIsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FDQSxDQUFDO0lBQ04sQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSx1QkFBdUI7SUFKbkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLCtCQUErQjtLQUMvQyxDQUFDO3FDQUlrQixtQkFBVztHQUhsQix1QkFBdUIsQ0F1Qm5DO0FBdkJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JtLXZhbGlkYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvYXBwLmZvcm12YWxpZGF0aW9uLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0aW9uQ29tcG9uZW50IHtcbiAgICBjb21wbGV4Rm9ybTogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuY29tcGxleEZvcm0gPSBmYi5ncm91cCh7XG4gICAgICAgICAgICAnZmlyc3ROYW1lJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ2xhc3ROYW1lJzogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKV0pXSxcbiAgICAgICAgICAgICdnZW5kZXInOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAncGhvbmVObyc6IFsnKzY0IDIxIDE0MiA3MTc2JywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnaGlraW5nJzogW2ZhbHNlXSxcbiAgICAgICAgICAgICdydW5uaW5nJzogW2ZhbHNlXSxcbiAgICAgICAgICAgICdzd2ltbWluZyc6IFtmYWxzZV1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21wbGV4Rm9ybSk7XG4gICAgICAgIHRoaXMuY29tcGxleEZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZm9ybTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZm9ybSBjaGFuZ2VkIHRvOicsIGZvcm0pO1xuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB9XG59XG4iXX0=