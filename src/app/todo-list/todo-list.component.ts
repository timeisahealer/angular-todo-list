import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

  @Output()
  complete: EventEmitter<Todo> = new EventEmitter();
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  onCompleteTodo(todo: Todo) {
    this.complete.emit(todo);
  }
  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
