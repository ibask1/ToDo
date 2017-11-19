import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../shared/todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styles: []

})
export class TodoComponent implements OnInit {
  @Input() todo: ToDo;  //adding strongly typed view
  @Input() mode: string;  //will use Create or Display mode
  @Output() saveNewTodo = new EventEmitter();
  
  newTodo: ToDo = new ToDo();


  constructor() { }

  createNewTodo() {
    this.saveNewTodo.emit(this.newTodo)
    this.newTodo =  new ToDo();

  }

  ngOnInit() {

  }

}
