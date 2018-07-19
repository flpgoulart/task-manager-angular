// como prática, indica importar sempre o Component em primeiro lugar
//o Input permite a troca de variáveis dentro do HTML, ou seja, passagem de param de um modelo para outro
import { Component, OnInit } from '@angular/core';
// ActivatedRoute dá detalhes ao que se está acessando pelo usuário
// Params é para coletar os dados transferidos pela URL
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
// serve para implementar no route o método switchMap
import "rxjs/add/operator/switchMap";

import { Task } from '../shared/task.model';
import { TaskService } from "../shared/task.service";

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
    public task: Task;

    public constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ) { }


    public ngOnInit(){
        this.route.params
        // no caso do subscribe é por causa do Observable, identico ao Promise
        // o switchMap ele é inteligente o suficiente para tratar várias chamadas de requisições e entregar somente a ultima para o subscribe retornar
            .switchMap((params: Params) => this.taskService.getTask(+params['id']))
            //o subscribe sempre precisa estar presente
            .subscribe(
                task => this.task = task,
                error => alert("Ocorreu um erro no servidor, tente mais tarde!")
            )
    }

    public goBack() {
        this.location.back();
    }

    public updateTask(){
        if(!this.task.title){
            alert("A tarefa deve ter um título")
        } else {
            this.taskService.updateTask(this.task)
                .subscribe(
                    () => alert("Tarefa atualizada com sucesso!"),
                    () => alert("Ocorreu um erro no servidor, tente mais tarde!")
                )
        }
    }
}