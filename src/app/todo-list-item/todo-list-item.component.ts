import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor() {
    // this.todo = new Todo();
  }

  @Output()
  complete: EventEmitter<Todo> = new EventEmitter();
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  ngOnInit() {
  }

  completeTodo() {
    this.complete.emit(this.todo);
  }

  removeTodo() {
    this.remove.emit(this.todo);
  }

}
