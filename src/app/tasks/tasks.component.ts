// todos os component tem essa chamada para dizer que é componente
import { Component, OnInit } from '@angular/core';
// o OnInit é uma interface que pode ser utilizada na class

//listas de arquivos do projeto
import { Task } from './shared/task.model';

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

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
    public tasks;

    public ngOnInit(){
        this.tasks = TASKS;
    }
}