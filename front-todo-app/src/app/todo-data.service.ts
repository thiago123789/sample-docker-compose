import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  baseUrl = 'http://localhost:8080/api/todo/';

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor(private httpClient: HttpClient)  {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    this.httpClient
      .post(this.baseUrl, todo)
      .subscribe(todo => {
        this.todos.push(<Todo>todo);
        this.updateList();
      }, err =>{
        console.log(err);
      });
    return this;
  }

  updateList() {
    this.httpClient
    .get(this.baseUrl)
    .subscribe(todo => {
      this.todos = <Todo[]>todo;
    }, err => {
        console.log(err);
    });
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
      this.httpClient.delete(this.baseUrl + id).subscribe(() => { 
        this.updateList();
      }, err => {
        console.log(err);
      });
    this.updateList();
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    // noinspection TypeScriptUnresolvedFunction
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    if (todo.finalizado === true) {
      this.httpClient.post(this.baseUrl + 'undone/' + todo.id, null)
        .subscribe(() => {
          this.updateList();
         }, err => {
          console.log(err);
        });
    } else {
      this.httpClient.post(this.baseUrl + todo.id, null)
      .subscribe(() => { 
        this.updateList();
      }, err => {
        console.log(err);
      });
    }
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.finalizado
    });
    return updatedTodo;
  }

}
