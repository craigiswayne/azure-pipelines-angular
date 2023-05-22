import { Component } from '@angular/core';
import {MyMonitoringService} from "./services/logging.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'playground-angular';
  constructor(private readonly router: Router, private myMonitoringService: MyMonitoringService) {

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.myMonitoringService.logPageView(event.urlAfterRedirects);
      }
    });
  }

  public logException(){
    this.myMonitoringService.logException(new Error('test error'));
  }
}
