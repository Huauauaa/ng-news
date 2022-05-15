import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import Task from 'src/app/types/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  initData: Task = {};
  tasks: Task[] = [{ id: '1', text: 'test', reminder: false }];
  showForm = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showForm = val));
  }

  saveTask(task: Task) {
    if (task.id) {
      const index = this.tasks.findIndex((item) => item.id === task.id);
      this.tasks.splice(index, 1, task);
    } else {
      this.tasks.unshift({ ...task, id: nanoid() });
    }
    this.uiService.toggleShowForm(false);
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  editTask(task: Task) {
    this.initData = task;
    this.uiService.toggleShowForm(true);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
