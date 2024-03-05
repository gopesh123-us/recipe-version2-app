import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  navItemClicked: string = 'recipebook';
  onNavMenuClicked(itemClicked: string) {
    this.navItemClicked = itemClicked;
  }
}
