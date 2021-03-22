import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService } from '../task.service';
import { TodoAddEditBase } from './todo-add-edit.base';
import { TodoAddEdit } from './todo-add-edit.interface';

@Component({
  templateUrl: './todo-add-edit.component.html'
})
export class TodoAddComponent extends TodoAddEditBase {
  constructor(fb: FormBuilder, router: Router, private taskService: TaskService) {
    super(fb, router);
  }

  getObservable() {
    return this.taskService.add({ ...this.form.value as TodoAddEdit, done: false });
  }
}
