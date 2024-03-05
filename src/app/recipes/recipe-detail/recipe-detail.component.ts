import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements AfterViewInit {
  @Input() recipeTobeDisplayed: Recipe;
  @ViewChild('recipeName') recipeName: ElementRef;
  onNgInit() {}
  ngAfterViewInit() {
    this.recipeName.nativeElement.style.color = 'teal';
  }
}
