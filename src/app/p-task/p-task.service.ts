import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import "rxjs/Rx";

import { Task } from "../shared/task";

@Injectable()
export class PTaskService {
  tasksChanged = new EventEmitter<Task[]>();

  private tasks: Task[] = [
    new Task("Sample Task To-Do", false),
    new Task("Sample Task Complete", true)
  ];

  constructor(private http: Http) { }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  completeTask(index) {
    this.tasks[index].completed = true;
  }

  undoTask(index) {
    this.tasks[index].completed = false;
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  getTasks() {
    return this.tasks;
  }

  storeData() {
    const body = JSON.stringify(this.tasks);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://organizer-6307e.firebaseio.com/tasks.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://organizer-6307e.firebaseio.com/tasks.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Task[]) => {
          this.tasks = data;
          this.tasksChanged.emit(this.tasks);
        }
      );
  }

}
