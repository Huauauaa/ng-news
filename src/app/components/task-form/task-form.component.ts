import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import Task from 'src/app/types/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() initData: Task = {};
  @Output() saveTask: EventEmitter<Task> = new EventEmitter();
  id: string = '';
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if (!this.text) {
      alert('不能为空');
      return;
    }
    const task: Task = {
      id: this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.saveTask.emit(task);

    this.onClear();
  }

  onClear() {
    this.id = '';
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: any): void {
    const { text, reminder, day, id } = changes.initData.currentValue;
    this.id = id;
    this.text = text;
    this.day = day;
    this.reminder = reminder;
  }
}
