import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Swathi !!';
  address = {
      street: '4747 willow rd',
      city: 'Plesanton'
  };
}
