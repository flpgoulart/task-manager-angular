// esse decorator, avisa ao angular que talvez o serviço dependa que algum código seja adicionado
import { Injectable } from "@angular/core";

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
    public getTasks(): Array<Task>{
        return TASKS;
    }
}