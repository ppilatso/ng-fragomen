import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-search.component.html',
})
export class DropdownSearchComponent {
  public users = [
    "Bonnie Green",
    "Jese Leos",
    "Michael Gough"
  ]
}
