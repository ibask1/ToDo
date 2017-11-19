webpackJsonp(["main"],{

/***/ "../../../../../app/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../app/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../app/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello Word from code 2';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "\n\n     <todo-list></todo-list>\n  ",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../app/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../app/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_todoList_component__ = __webpack_require__("../../../../../app/app/todo/todoList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_todo_component__ = __webpack_require__("../../../../../app/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_dataService__ = __webpack_require__("../../../../../app/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__todo_todoList_component__["a" /* TodoListComponent */], __WEBPACK_IMPORTED_MODULE_5__todo_todo_component__["a" /* TodoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_dataService__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../app/app/shared/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this.todos = [];
    }
    DataService.prototype.getTodos = function () {
        return this._http.get("/api/todo/")
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    DataService.prototype.loadTodos = function () {
        var _this = this;
        return this._http.get("/api/todo")
            .map(function (data) {
            _this.todos = data;
            return true;
        });
    };
    DataService.prototype.loadAllTodos = function () {
        var _this = this;
        return this._http.get("/api/todo/all")
            .map(function (data) {
            _this.todos = data;
            return true;
        });
    };
    DataService.prototype.getById = function (id) {
        return this._http.get("/api/todo/" + id)
            .map(function (data) {
            return data;
        });
    };
    DataService.prototype.createTodo = function (todo) {
        return this._http.post("/api/todo", todo).map(function (p) {
            return true;
        });
    };
    DataService.prototype.saveTodo = function (todo) {
        return this._http.put("/api/todo/" + todo.id, todo).map(function (p) {
            return true;
        });
    };
    DataService.prototype.startTodo = function (todo) {
        return this._http.put("api/todo/start/?id=" + todo.id, todo).map(function (p) {
            return true;
        });
    };
    DataService.prototype.deleteTodo = function (todo) {
        return this._http.delete("/api/todo/" + todo.id).map(function (p) {
            return true;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../app/app/shared/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDo; });
var ToDo = (function () {
    function ToDo() {
    }
    return ToDo;
}());



/***/ }),

/***/ "../../../../../app/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"mode=='Display'\">\n  {{todo.title}}\n</div>\n\n<div *ngIf= \"mode=='Create'\">\n \n    <textarea type=\"text\" class=\"form form-control\" [(ngModel)]=\"newTodo.title\" row=\"5\"></textarea>\n   <button class=\"btn btn-success\"\n   (click)=\"createNewTodo()\" >Create New Todo</button>\n</div>\n"

/***/ }),

/***/ "../../../../../app/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_todo__ = __webpack_require__("../../../../../app/app/shared/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent() {
        this.saveNewTodo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__shared_todo__["a" /* ToDo */]();
    }
    TodoComponent.prototype.createNewTodo = function () {
        this.saveNewTodo.emit(this.newTodo);
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__shared_todo__["a" /* ToDo */]();
    };
    TodoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_todo__["a" /* ToDo */])
    ], TodoComponent.prototype, "todo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], TodoComponent.prototype, "mode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "saveNewTodo", void 0);
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'todo',
            template: __webpack_require__("../../../../../app/app/todo/todo.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../app/app/todo/todoList.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>{{title + \"--Hello\"}}</h1>\r\n<div class=\"alert alert-danger\"*ngIf=\"!!errorMessage\">\r\n    {{errorMessage}}\r\n</div>\r\n\r\n<div id=\"test\" *ngIf=\"todo.isCompleted else elseBlock\">\r\n<s>{{todo.title}}</s>\r\n</div>\r\n\r\n<ng-template #elseBlock>\r\n    <span>{{todo.title}}</span>\r\n</ng-template>\r\n\r\n<div>\r\n    <button (click)=\"toggleCompleted()\" class=\"btn\">Toggle Completed</button>\r\n</div>\r\n\r\n<div [hidden]=todo.isCompleted>\r\n    <img src={{todo.imageUrl}}>\r\n    <img [src]=\"todo.imageUrl\"> \r\n <img [src]=\"todo.imageUrl\" [style.width.px]=\"imageWidth\">\r\n</div> \r\n\r\n{{2+2}}\r\n{{getTitle()}}\r\n<div innerText={{title}}></div> -->\r\n\r\n\r\n\r\n\r\n\r\n<!-- <input type=\"text\" class=\"form form-control\" [(ngModel)]=\"newTodoTitle\">\r\n <span>{{newTodoTitle}}</span> \r\n<button class=\"btn btn-success\"(click)=\"createNewTodo()\">Create New Todo</button>  -->\r\n\r\n<div class=\"col-sm-8\">\r\n\r\n\r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">Active Todos\r\n\r\n        </li>\r\n        <li *ngFor=\"let t of todos\" class=\"list-group-item\">\r\n            <todo [mode]=\"'Display'\" [todo]=\"t\" (saveNewTodo)=\"addNewTodo($event)\"></todo>\r\n            <!-- {{todo.title}} {{todo.endDate|date:'MM/dd/yyyy'}} -->\r\n        </li>\r\n    </ul>\r\n\r\n</div>\r\n\r\n<div class=\"col-sm-4\">\r\n    <todo [mode]=\"'Create'\" (saveNewTodo)=\"addNewTodo($event)\"></todo>\r\n</div>"

/***/ }),

/***/ "../../../../../app/app/todo/todoList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_todo__ = __webpack_require__("../../../../../app/app/shared/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataService__ = __webpack_require__("../../../../../app/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(dataService) {
        this.dataService = dataService;
        this.title = "Hello TodoListComponent";
        this.errorMessage = "";
        this.newTodoTitle = "";
        this.todos = [];
        // todos = [{
        //     "id": 1,
        //     "title": "Learn",
        //     "isCompleted": false,
        //     "startDate": "2017-11-04T00:00:00",
        //     "endDate": "2017-11-15T00:00:00",
        //     "minutesSpent": 15,
        //     "priority": 1
        // }, {
        //     "id": 2,
        //     "title": "Learn",
        //     "isCompleted": false,
        //     "startDate": "2017-11-04T00:00:00",
        //     "endDate": "2017-11-15T00:00:00",
        //     "minutesSpent": 15,
        //     "priority": 1,
        // }
        // ]
        // todo: ToDo = {
        //     "id": 1,
        //     "title": "Learn",
        //     "isCompleted": false,
        //     "startDate": "2017-11-04T00:00:00",
        //     "endDate": "2017-11-15T00:00:00",
        //     "minutesSpent": 15,
        //     "priority": 1
        //     assignedTo: {
        //         name: "Orest"
        //     }
        // };
        this.imageWidth = 200;
    }
    TodoListComponent.prototype.refresh = function () {
        var _this = this;
        this.dataService.getTodos().subscribe(function (data) {
            _this.todos = data;
        });
        // var todo1 = new ToDo();
        // todo1.id=1;
        // todo1.title="Walk the dog";
        // this.todos.push(todo1);
    };
    TodoListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    TodoListComponent.prototype.createNewTodo = function () {
        var newTodo = new __WEBPACK_IMPORTED_MODULE_1__shared_todo__["a" /* ToDo */]();
        newTodo.title = this.newTodoTitle;
        // this.todos.push(newTodo);
        this.newTodoTitle = "";
        this.addNewTodo(newTodo);
    };
    TodoListComponent.prototype.addNewTodo = function (todo) {
        var _this = this;
        //todo.id=this.todos.length+1;
        todo.priority = this.todos.length + 1;
        this.dataService.createTodo(todo).subscribe(function (data) {
            if (data) {
                _this.refresh();
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    TodoListComponent.prototype.toggleCompleted = function () {
        this.todo.isCompleted = !this.todo.isCompleted;
    };
    TodoListComponent.prototype.getTitle = function () {
        return this.title + "!!!!!";
    };
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "todo-list",
            template: __webpack_require__("../../../../../app/app/todo/todoList.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "../../../../../app/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../app/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../app/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../app/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map