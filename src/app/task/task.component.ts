import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  startingTaskArray: Task[] = [];
  newTask = "";

  constructor(private taskService: TaskService) { }

  // this should be a property to dictate which DB gets loaded per the logged in strategy
  // this.authService.isAuthenticated().first()

  ngOnInit() {
    this.startingTaskArray = this.taskService.getTasks();
    this.taskService.taskChanged.subscribe(
      (task: Task[]) => this.startingTaskArray = task
    );
  }

  onAdd(input: string) {
    this.taskService.addTask(new Task(input, false));
    this.newTask = "";
  }

  onComplete(i) {
    this.taskService.completeTask(i);
  }

  onUndo(i) {
    this.taskService.undoTask(i);
  }

  onDelete(i) {
    this.taskService.deleteTask(this.startingTaskArray[i]);
  }

}
