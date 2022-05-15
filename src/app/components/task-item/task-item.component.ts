import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Task from 'src/app/types/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {};
  @Output() onDeleteTask: EventEmitter<string> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  constructor() {}

  onDelete(id: string) {
    this.onDeleteTask.emit(id);
  }
  onEdit(task: Task) {
    this.onEditTask.emit(task);
  }

  ngOnInit(): void {}
}
