var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, View, bootstrap } from 'angular2/angular2';
import { formDirectives } from 'angular2/forms';
// Annotation section
let MyAppComponent = class {
    constructor() {
        this.prefix = 'https://www.';
        this.name = 'Frank';
        this.url = 'google.com';
        this.selectedValue = 'second';
        this.allValues = ['first', 'second', 'third'];
    }
    createUrl() {
        return this.prefix + this.url;
    }
    select(newValue) {
        this.selectedValue = newValue;
    }
    getAllValues() {
        return this.allValues;
    }
};
MyAppComponent = __decorate([
    Component({
        selector: 'my-app'
    }),
    View({
        templateUrl: 'components/app/app.html',
        directives: [formDirectives]
    })
], MyAppComponent);
bootstrap(MyAppComponent);
//# sourceMappingURL=app.js.map