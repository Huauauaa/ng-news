import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  showForm = false;
  subject = new Subject<any>();

  constructor() {}

  toggleShowForm(val?: undefined | boolean): void {
    if (val !== undefined) {
      this.showForm = val;
    } else {
      this.showForm = !this.showForm;
    }

    this.subject.next(this.showForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
