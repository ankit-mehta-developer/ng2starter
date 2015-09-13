///<reference path="../typings/angular2/angular2.d.ts" />
///<reference path="typings/es6-promise/es6-promise.d.ts"/>
///<reference path="typings/rx/rx.d.ts"/>
//import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Component, View, bootstrap} from 'angular2/angular2';
import {formDirectives} from 'angular2/forms';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'components/app/app.html',
  directives: [formDirectives]
  //directives: [formDirectives, NgFor]
})
// Component controller
class MyAppComponent {
  name: string;
  url: string;
  prefix: string;
  selectedValue: string;
  allValues: Array<string>;
  
  constructor() {
    this.prefix = 'https://www.';
    this.name = 'Frank';
    this.url = 'google.com';
    this.selectedValue = 'second';
    this.allValues = ['first', 'second', 'third'];
  }
  
  createUrl() : string {
    return this.prefix + this.url;
  }
  
  select(newValue: string){
    this.selectedValue = newValue; 
  }
  
  getAllValues() : Array<string> {
    return this.allValues;
  }
}

bootstrap(MyAppComponent);