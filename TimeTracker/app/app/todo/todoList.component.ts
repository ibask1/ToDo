import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToDo } from "../shared/todo";
import { DataService } from "../shared/dataService";

@Component({
    selector: "todo-list",
    templateUrl: "todoList.component.html"

})


export class TodoListComponent implements OnInit {
    constructor(private dataService:DataService){


    }
    refresh(): void {
        this.dataService.getTodos().subscribe(data=>{
            this.todos=data;
        })

    
        // var todo1 = new ToDo();
        // todo1.id=1;
        // todo1.title="Walk the dog";
        // this.todos.push(todo1);
    }

    ngOnInit(): void {
        this.refresh()
    }

    public title = "Hello TodoListComponent";
    errorMessage: string = "";
    newTodoTitle: string = "";
    todo: ToDo;
    todos: ToDo[]=[];

    createNewTodo() {
    var newTodo = new ToDo();

    newTodo.title=this.newTodoTitle;
        // this.todos.push(newTodo);
        this.newTodoTitle="";
        this.addNewTodo(newTodo);
    }

     addNewTodo(todo:ToDo):void {
         //todo.id=this.todos.length+1;
         todo.priority = this.todos.length+1;
      
         this.dataService.createTodo(todo).subscribe(data=>{
             if(data){
                 this.refresh()
             }
         },error=>{
             this.errorMessage=error;
         })
        
    }
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
    imageWidth = 200;

    toggleCompleted() {
        this.todo.isCompleted = !this.todo.isCompleted;
    }
    getTitle() {
        return this.title + "!!!!!"
    }

}
