import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import "rxjs/Rx";

import { Task } from "./task";

@Injectable()
export class TaskService {
  taskChanged = new EventEmitter<Task[]>();

  private startingTasks: Task[] = [
    new Task("Create Dynamic Lists", false),
    new Task("Connect to Firebase", false),
    new Task("Authentication", false),
    new Task("Start Project", true),
    new Task("Set Routing", true),
    new Task("Experiment with Material 2", true)
  ];

  constructor(private http: Http) { }

  addTask(task: Task) {
    this.startingTasks.push(task);
  }

  completeTask(index) {
    this.startingTasks[index].completed = true;
  }

  undoTask(index) {
    this.startingTasks[index].completed = false;
  }

  deleteTask(task: Task) {
    this.startingTasks.splice(this.startingTasks.indexOf(task), 1);
  }

  getTasks() {
    return this.startingTasks;
  }

}
