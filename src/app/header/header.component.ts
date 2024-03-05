import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() navMenuClicked = new EventEmitter<string>();
  navItem: string;
  onRecipeBookClick() {
    this.navItem = 'recipebook';
    this.navMenuClicked.emit(this.navItem);
  }

  onShoppingListClick() {
    this.navItem = 'shoppinglist';
    this.navMenuClicked.emit(this.navItem);
  }
}
