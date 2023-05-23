import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'playground-angular';
  isDevelopment = isDevMode()
}
