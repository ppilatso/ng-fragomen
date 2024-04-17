import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [    
    RouterOutlet,
    NavbarComponent,
    DrawerComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-fragomen';
}
