import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAddComponent } from './todo/todo-add-edit/todo-add.component';
import { TodoEditComponent } from './todo/todo-add-edit/todo-edit.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
  { path: ':id/edit', component: TodoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
