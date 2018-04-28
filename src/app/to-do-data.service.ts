import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  idCount = 0;
  todos: Todo[] = [];

  constructor() {

  }

  addTodo(newTodo: Todo): TodoDataService {
    if (!newTodo.id) {
      newTodo.id = this.idCount;
      this.idCount++;
    }
    this.todos.push(newTodo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, updatedTodo: Object): Todo {
    const currTodo = this.getTodoById(id);
    Object.assign(currTodo, updatedTodo);
    return currTodo;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  completeTodo(todo: Todo): Todo {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}



