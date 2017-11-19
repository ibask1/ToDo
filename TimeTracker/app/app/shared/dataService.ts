import {Injectable} from "@angular/core"
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ToDo} from "./todo";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";



@Injectable()
export class DataService {
    constructor(private _http: HttpClient) {
    }
    getTodos():Observable<ToDo[]> {
        return this._http.get<ToDo[]>("/api/todo/")
        .do(data=>console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }
    handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }

    
    public todos: ToDo[] = [];

    loadTodos(): Observable<boolean> {
        return this._http.get("/api/todo")
            .map((data: ToDo[]) => {
                this.todos = data;
                return true;
            });
    }

    loadAllTodos(): Observable<boolean> {
        return this._http.get("/api/todo/all")
            .map((data: ToDo[]) => {
                this.todos = data;
                return true;
            });
    }

    getById(id: number): Observable<ToDo> {
        return this._http.get("/api/todo/" + id)
            .map((data: ToDo) => {
                return data;
            });
    }

    public createTodo(todo: ToDo): Observable<boolean> {
        return this._http.post("/api/todo", todo).map(p => {
            return true;
        });
    }


    public saveTodo(todo: ToDo): Observable<boolean> {
        return this._http.put("/api/todo/" + todo.id, todo).map(p => {
            return true;
        });
    }

    public startTodo(todo: ToDo): Observable<boolean> {
        return this._http.put("api/todo/start/?id=" + todo.id, todo).map(p => {
            return true;
        });
    }


    public deleteTodo(todo: ToDo) {
        return this._http.delete("/api/todo/" + todo.id).map(p => {
            return true;
        });
    }
}