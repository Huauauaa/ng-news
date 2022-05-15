import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showForm = false;
  subscription: Subscription;
  router: Router;

  constructor(private uiService: UiService, router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showForm = val));

    this.router = router;
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onToggle() {
    this.uiService.toggleShowForm();
  }
}
