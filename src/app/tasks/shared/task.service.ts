import { Http, Response } from "@angular/http";
// esse decorator, avisa ao angular que talvez o serviço dependa que algum código seja adicionado
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Task } from "./task.model";

//para fazer simulação de array, será apagado
const TASKS: Array<Task> = [
    { id: 1, title: 'Fazer tarefa 1'},
    { id: 2, title: 'Fazer tarefa 2'},
    { id: 3, title: 'Fazer tarefa 3'},
    { id: 4, title: 'Fazer tarefa 4'},
    { id: 5, title: 'Fazer tarefa 5'},
    { id: 6, title: 'Fazer tarefa 6'},
    { id: 7, title: 'Fazer tarefa 7'},
    { id: 8, title: 'Fazer tarefa 8'},
    { id: 9, title: 'Fazer tarefa 9'}
];

@Injectable()

export class TaskService{
    public tasksUrl = "api/tasks";

    public constructor(private http: Http) {}

    public getTasks(): Observable<Task[]>{
        return this.http.get(this.tasksUrl)
            .map((response: Response ) => response.json().data as Task[] )
    }

    public getImportantTasks(): Observable<Task[]>{
        return this.getTasks()
            .map(tasks => tasks.slice(0,4));
    }

    public getTask(id: number): Observable<Task> {
        let url = `${this.tasksUrl}/${id}`;

        return this.http.get(url)
            .map((response: Response) => response.json().data as Task)
    }
}