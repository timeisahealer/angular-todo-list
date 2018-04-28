import { Component } from '@angular/core';
import { TodoDataService } from './to-do-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})
export class AppComponent {
  title = 'app';
  newTodo: Todo;
  private todoDataService: TodoDataService;

  constructor(todoDataService: TodoDataService) {
    this.newTodo = new Todo();
    this.todoDataService = todoDataService;
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
    // this.newTodo = new Todo;
  }

  onCompleteTodo(todo: Todo) {
    this.todoDataService.completeTodo(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  getAllTodos(): Todo[] {
    return this.todoDataService.getAllTodos();
  }
}
