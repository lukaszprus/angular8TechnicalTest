import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() task!: Task;
  // tslint:disable-next-line:no-output-rename
  @Output('delete') taskDelete = new EventEmitter<Task>();
  expanded = false;

  constructor(private taskService: TaskService) {}

  get done() {
    return this.task.done !== false;
  }

  set done(value: any) {
    this.task.done = value ? new Date().toDateString() : false;
    this.taskService.update(this.task.id, { done: this.task.done }).subscribe();
  }

  delete() {
    this.taskService.delete(this.task.id).subscribe({
      complete: () => {
        this.taskDelete.emit(this.task);
      }
    });
  }
}
