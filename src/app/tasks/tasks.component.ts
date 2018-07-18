// todos os component tem essa chamada para dizer que é componente
import { Component, OnInit } from '@angular/core';
// o OnInit é uma interface que pode ser utilizada na class

//listas de arquivos do projeto
import { Task } from './shared/task.model';
import { TaskService } from "./shared/task.service";

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    providers: [
        //poderia ser declarado apenas assim "TaskService", mas pelo efeito didatico foi incluido completo
        //{ provide: TaskService, useClass: TaskService }
    ]
})

export class TasksComponent implements OnInit {
    public tasks: Array<Task>;
    public selectedTask: Task;

    // o type script permite que tenha uma propriedade criada dentro do método construtor
    // quando eu passo no método construtor uma classe como tipo de parametro, o Angular entendi como uma dependência e procura um provider para isso
    public constructor(private taskService: TaskService){ }

    public ngOnInit(){
        this.taskService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks, 
                error => alert("Ocorreu um erro no servidor")
            )
    }

    // recebe um parametro do tipo Task e não retorna nada
    public onSelect(task: Task): void {
        this.selectedTask = task;
    }
}