import { Component, OnInit } from '@angular/core';

import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Task[] | undefined;
  term = '';

  constructor(private taskService: TaskService) {}

  delete(task: Task) {
    const index = this.tasks!.indexOf(task);

    // tslint:disable-next-line: no-unused-expression
    index > -1 && this.tasks!.splice(index, 1);
  }

  ngOnInit() {
    this.taskService.getAll().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
