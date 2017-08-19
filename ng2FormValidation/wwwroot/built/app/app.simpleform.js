"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleFormComponent = (function () {
    function SimpleFormComponent() {
    }
    SimpleFormComponent.prototype.submitForm = function (form) {
        console.log('Form Data: ');
        console.log(form);
    };
    return SimpleFormComponent;
}());
SimpleFormComponent = __decorate([
    core_1.Component({
        selector: 'simple-form',
        templateUrl: './app/app.simpleform.html'
    })
], SimpleFormComponent);
exports.SimpleFormComponent = SimpleFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNpbXBsZWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvYXBwLnNpbXBsZWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFNMUMsSUFBYSxtQkFBbUI7SUFBaEM7SUFLQSxDQUFDO0lBSkMsd0NBQVUsR0FBVixVQUFXLElBQVM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksbUJBQW1CO0lBSi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUcsMkJBQTJCO0tBQzFDLENBQUM7R0FDVyxtQkFBbUIsQ0FLL0I7QUFMWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ltcGxlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybCA6ICcuL2FwcC9hcHAuc2ltcGxlZm9ybS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVGb3JtQ29tcG9uZW50IHtcbiAgc3VibWl0Rm9ybShmb3JtOiBhbnkpOiB2b2lke1xuICAgIGNvbnNvbGUubG9nKCdGb3JtIERhdGE6ICcpO1xuICAgIGNvbnNvbGUubG9nKGZvcm0pO1xuICB9XG59XG4iXX0=