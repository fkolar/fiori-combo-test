import { Component } from '@angular/core';
import {ComboboxSelectionChangeEvent} from '@fundamental-ngx/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fiori-test';
  dataSource = [
    'Apple',
    'Banana',
    'Pineapple',
    'Strawberry',
    'Broccoli',
    'Carrot',
    'Jalapeño',
    'Spinach'
  ];
  selectedItem: any;

  onSelect1(item: ComboboxSelectionChangeEvent): void {
    this.selectedItem = item.payload;
  }
}
