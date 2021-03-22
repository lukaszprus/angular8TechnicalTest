import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.interface';
import { ErrorObserver } from 'rxjs';
import { tap } from 'rxjs/operators';

const verbs = {
  get: 'got',
  add: 'added',
  update: 'updated',
  delete: 'deleted'
};

function notification<T>(verb: keyof typeof verbs, plural?: boolean) {
  const label = plural ? 'tasks' : 'task';
  const errorMsg = `failed to ${verb} ${label}`;

  const observer: ErrorObserver<T> = {
    error() {
      console.log(errorMsg);
    }
  };

  if (verb !== 'get') {
    const successMsg = `${label} successfully ${verbs[verb]}`;

    observer.complete = () => {
      console.log(successMsg);
    };
  }

  return tap(observer);
}

@Injectable({ providedIn: 'root'})
export class TaskService {
  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get<Task[]>('api/tasks')
      .pipe(notification('get', true));
  }

  get(id: number) {
    return this.http.get<Task>(`api/tasks/${ id }`)
      .pipe(notification('get'));
  }

  add(task: Omit<Task, 'id'>) {
    return this.http.post('api/tasks', task)
      .pipe(notification('add'));
  }

  update(id: number, patch: Partial<Omit<Task, 'id'>>) {
    return this.http.patch<Task>(`api/tasks/${ id }`, patch)
      .pipe(notification('update'));
  }

  delete(id: number) {
    return this.http.delete<Task>(`api/tasks/${ id }`)
      .pipe(notification('delete'));
  }
}
