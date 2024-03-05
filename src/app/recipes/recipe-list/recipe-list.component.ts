import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe;
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simply a test recipe',
      'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Recipe(
      'Vegan Gombo',
      'Keith Corbin’s Vegan Gombo',
      'https://ca-times.brightspotcdn.com/dims4/default/50ee4d6/2147483647/strip/true/crop/6720x4480+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdb%2F2d%2F832f1ba64577a6871daa03c15286%2F1165556-fo-test-kitchen-corbin-11.jpg'
    ),
  ];
  onSelection(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selectedRecipeEvent.emit(this.selectedRecipe);
  }
  ngOnInit() {
    this.selectedRecipe = this.recipes[0];
    this.selectedRecipeEvent.emit(this.selectedRecipe);
  }

  constructor() {}
}
