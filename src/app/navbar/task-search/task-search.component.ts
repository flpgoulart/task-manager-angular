import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Task } from "../../tasks/shared/task.model";
import { TaskService } from "../../tasks/shared/task.service";

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/of";

@Component({
    selector: 'task-search',
    templateUrl: './task-search.component.html'
})

export class TaskSearchComponent implements OnInit{
    public searchTerms: Subject<string> = new Subject();

    public tasks: Task[] = [];

    public constructor(private taskService: TaskService, private router: Router){}

    public ngOnInit() {
        this.searchTerms
            //serve para dar um delay antes da execução do switchMap
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(
                term => term ? this.taskService.seachByTitle(term) : Observable.of<Task[]>([])
            ).subscribe(tasks => this.tasks = tasks)
    }

    public search(term: string) {
        this.searchTerms.next(term);
    }

    public gotoTask(task: Task) {
        this.tasks = [];
        this.router.navigate(['/tasks',task.id])

    }
}