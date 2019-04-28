import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'todo-index',
  templateUrl: './todo.index.html'
})
export class TodoIndex implements OnInit {

  public todos: any[];

  constructor(private readonly _client: HttpClient) {}

  ngOnInit(): void {
    this._client.get('api/todos')
      .subscribe((todos: any[]) => {
        this.todos = todos;
      });
  }
}
