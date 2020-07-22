import { Component, NgZone } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private ngZone: NgZone) {
    akitaDevtools(ngZone);
  }
}
