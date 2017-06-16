import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { Task } from '../shared/task';
import { PTaskService } from './p-task.service';

@Component({
  selector: 'app-p-task',
  templateUrl: './p-task.component.html',
  styleUrls: ['./p-task.component.css']
})
export class PTaskComponent implements OnInit {
  tasks: Task[] = [];
  newTask = "";

  constructor(private pTaskService: PTaskService,
              public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.tasks = this.pTaskService.getTasks();
    this.pTaskService.tasksChanged.subscribe(
      (tasks: Task[]) => this.tasks = tasks
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onAdd(input: string) {
    this.pTaskService.addTask(new Task(input, false));
    this.newTask = "";
  }

  onComplete(i) {
    this.pTaskService.completeTask(i);
  }

  onUndo(i) {
    this.pTaskService.undoTask(i);
  }

  onDelete(i) {
    this.pTaskService.deleteTask(this.tasks[i]);
  }

  onStore() {
    this.pTaskService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.openSnackBar("Tasks stored", "");
  }

  onFetch() {
    this.pTaskService.fetchData();
    this.openSnackBar("Tasks Retrieved", "");

  }

  // ngOnDestroy() {
  //   this.pTaskService.tasksChanged.unsubscribe();
  // }

}
