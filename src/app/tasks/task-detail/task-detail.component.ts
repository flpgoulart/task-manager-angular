// como prática, indica importar sempre o Component em primeiro lugar
//o Input permite a troca de variáveis dentro do HTML, ou seja, passagem de param de um modelo para outro
import { Component, Input } from '@angular/core';

import { Task } from '../shared/task.model';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent{
    @Input() public task: Task;

    public constructor() {
    }
}