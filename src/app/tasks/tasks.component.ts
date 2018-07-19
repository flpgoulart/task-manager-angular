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
    public newTask: Task;
    // public selectedTask: Task;

    // o type script permite que tenha uma propriedade criada dentro do método construtor
    // quando eu passo no método construtor uma classe como tipo de parametro, o Angular entendi como uma dependência e procura um provider para isso
    public constructor(private taskService: TaskService){ 
        this.newTask = new Task(null, '');
    }

    public ngOnInit(){
        this.taskService.getAll()
            .subscribe(
                tasks => this.tasks = tasks, 
                error => alert("Ocorreu um erro no servidor")
            )
    }

    public createTask(){
        //este comando serve para atualizar o titulo, removendo os campos em branco 
        this.newTask.title = this.newTask.title.trim();

        if (!this.newTask.title) {
            alert("A tarefa deve ter um título!")
        } else {
            this.taskService.create(this.newTask)
                .subscribe(
                    (task) => {
                        this.tasks.push(task);
                        this.newTask = new Task(null, '');
                    },
                    () => alert("Ocorreu um erro no servidor, tente mais tarde.")
                )
        }

    }

    public deleteTask(task: Task){
        if (confirm(`Deseja realmente excluir a tarefa "${task.title}"`)) {
            this.taskService.delete(task.id)
                .subscribe(
                    () => this.tasks = this.tasks.filter(t => t !== task),
                    () => alert("Ocorreu um erro no servidor, tente mais tarde!")
                )
        }
    }

    // recebe um parametro do tipo Task e não retorna nada
    // public onSelect(task: Task): void {
    //     this.selectedTask = task;
    // }
}