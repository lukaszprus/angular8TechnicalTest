import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add-edit/todo-add.component';
import { TodoEditComponent } from './todo-add-edit/todo-edit.component';
import { FilterPropertyPipe } from './filter-property.pipe';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, TodoAddComponent, TodoEditComponent, FilterPropertyPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
