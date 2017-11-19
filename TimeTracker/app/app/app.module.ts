import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todoList.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { DataService } from './shared/dataService';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent, TodoListComponent, TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
