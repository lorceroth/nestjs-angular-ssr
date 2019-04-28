import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoIndex } from './todos/todo.index';

const routes: Routes = [
  {
    path: '',
    component: TodoIndex
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
