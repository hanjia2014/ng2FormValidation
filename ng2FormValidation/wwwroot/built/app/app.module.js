"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_simpleform_1 = require("./app.simpleform");
var app_complexform_1 = require("./app.complexform");
var app_formvalidation_1 = require("./app.formvalidation");
var app_login_1 = require("./app.login");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            app_simpleform_1.SimpleFormComponent,
            app_complexform_1.ComplexFormComponent,
            app_formvalidation_1.FormValidationComponent,
            app_login_1.LoginComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOERBQTBEO0FBQzFELHNDQUF5QztBQUN6Qyx3Q0FBa0U7QUFDbEUsc0NBQTJDO0FBRTNDLGlEQUErQztBQUMvQyxtREFBdUQ7QUFDdkQscURBQXlEO0FBQ3pELDJEQUErRDtBQUMvRCx5Q0FBNEM7QUFtQjVDLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWpCckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWixvQ0FBbUI7WUFDbkIsc0NBQW9CO1lBQ3BCLDRDQUF1QjtZQUN2QiwwQkFBYztTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixtQkFBVztZQUNYLDJCQUFtQjtZQUNuQixpQkFBVTtTQUNYO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2FwcC5zaW1wbGVmb3JtJztcbmltcG9ydCB7IENvbXBsZXhGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcGxleGZvcm0nO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2FwcC5mb3JtdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLmxvZ2luJ1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgU2ltcGxlRm9ybUNvbXBvbmVudCxcbiAgICBDb21wbGV4Rm9ybUNvbXBvbmVudCxcbiAgICBGb3JtVmFsaWRhdGlvbkNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=