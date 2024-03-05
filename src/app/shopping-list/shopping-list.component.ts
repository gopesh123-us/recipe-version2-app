import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements AfterViewInit {
  @ViewChildren('shoppingListItem') shoppingList: QueryList<any>;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
    new Ingredient('Oranges', 20),
  ];

  ngAfterViewInit() {
    this.shoppingList.first.nativeElement.style.color = 'red';
    this.shoppingList.last.nativeElement.style.color = 'green';
    console.log(this.shoppingList);
  }
}
