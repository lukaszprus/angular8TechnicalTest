import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Task } from '../task.interface';

import { TaskService } from '../task.service';
import { TodoAddEditBase } from './todo-add-edit.base';
import { TodoAddEdit } from './todo-add-edit.interface';

@Component({
  templateUrl: './todo-add-edit.component.html'
})
export class TodoEditComponent extends TodoAddEditBase implements OnInit {
  id: number | undefined;
  task: Task | undefined;

  constructor(fb: FormBuilder, router: Router, private taskService: TaskService, private route: ActivatedRoute) {
    super(fb, router);
  }

  getObservable() {
    return this.id ? this.taskService.update(this.id, { ...this.form.value as TodoAddEdit }) : EMPTY;
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.taskService.get(+params.get('id')!))
      )
      .subscribe(task => {
        this.id = task.id;

        this.form.patchValue(task);
      });
  }
}
