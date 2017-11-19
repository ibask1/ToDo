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
var todo_1 = require("../shared/todo");
var dataService_1 = require("../shared/dataService");
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
        var newTodo = new todo_1.ToDo();
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
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: "todo-list",
        templateUrl: "todoList.component.html"
    }),
    __metadata("design:paramtypes", [dataService_1.DataService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todoList.component.js.map