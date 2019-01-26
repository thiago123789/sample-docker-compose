import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

    baseUrl = 'http://localhost:8080/api/todo/';

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<any> {
        return this.httpClient
            .get(this.baseUrl)
            .pipe(todo =>{
                return todo;
            });
    }

    public getOne(id: number): Observable<any> {
        return this.httpClient
            .get(this.baseUrl + id)
            .pipe(todo =>{
                return todo;
            });
    }

    public create(obj: any): Observable<any>{
        return this.httpClient
            .post(this.baseUrl, obj)
            .pipe(todo =>{
                return todo;
            });
    }

    public done(id: number): Observable<any> {
        return this.httpClient
            .post(this.baseUrl + id, null)
            .pipe(todo => {
                return todo;
            })
    }

    public undone(id: number): Observable<any> {
        return this.httpClient
            .post(this.baseUrl + id, null)
            .pipe(todo => {
                return todo;
            })
    }

    public delete(id: number): Observable<any>{
        return this.httpClient
            .delete(this.baseUrl + id);
    }

}
