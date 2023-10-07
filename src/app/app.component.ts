import { Component } from '@angular/core';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-app';
  showForm = false;
  showList = true;

  onShowForm() {
    this.showForm = true;
    this.showList = false;
  }

  onShowList() {
    this.showForm = false;
    this.showList = true;
  }
}
