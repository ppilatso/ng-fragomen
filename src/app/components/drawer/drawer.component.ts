import { Component, Input } from '@angular/core';
import { DropdownSearchComponent } from '../dropdown-search/dropdown-search.component';
import { CommonModule } from '@angular/common';

const data = {
  "countries": [
    {"name": "United States", "code": "US"},
    {"name": "Canada", "code": "CA"},
    {"name": "United Kingdom", "code": "GB"},
    {"name": "France", "code": "FR"},
    {"name": "Germany", "code": "DE"},
    {"name": "China", "code": "CN"},
    {"name": "Japan", "code": "JP"},
    {"name": "Brazil", "code": "BR"},
    {"name": "Australia", "code": "AU"},
    {"name": "India", "code": "IN"}
  ]
}


@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, DropdownSearchComponent],
  templateUrl: './drawer.component.html'
})
export class DrawerComponent {
  countries = data.countries;

  reasonsForTravel: string[] = [
    "Exploration and Adventure.",
    "Relaxation and Leisure.",
    "Cultural Immersion.",
    "Personal Growth.",
    "Connecting with Others."
];
}
